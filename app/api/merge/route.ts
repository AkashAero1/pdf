import { NextRequest, NextResponse } from 'next/server';
import PDFMerger from 'pdf-merger-js';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    // Create a temporary directory for processing
    const tempDir = join(process.cwd(), 'tmp');
    const merger = new PDFMerger();

    // Save uploaded files temporarily and add them to merger
    const savedFiles = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = `${uuidv4()}.pdf`;
        const filepath = join(tempDir, filename);
        await writeFile(filepath, buffer);
        return filepath;
      })
    );

    // Merge PDFs
    for (const filepath of savedFiles) {
      await merger.add(filepath);
    }

    // Generate merged PDF
    const mergedPdfBuffer = await merger.saveAsBuffer();
    
    // Clean up temporary files
    await Promise.all(
      savedFiles.map((filepath) => writeFile(filepath, ''))
    );

    // Return the merged PDF
    return new NextResponse(mergedPdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="merged.pdf"',
      },
    });
  } catch (error) {
    console.error('Error merging PDFs:', error);
    return NextResponse.json(
      { error: 'Failed to merge PDFs' },
      { status: 500 }
    );
  }
} 