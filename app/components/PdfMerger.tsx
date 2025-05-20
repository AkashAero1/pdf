'use client';

import { useState, useCallback } from 'react';
import { Upload, File, X, Loader2 } from 'lucide-react';

interface FileWithPreview extends File {
  preview?: string;
}

export default function PdfMerger() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === 'application/pdf'
    );
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []).filter(
      (file) => file.type === 'application/pdf'
    );
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('Please select at least 2 PDF files to merge');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('files', file);
      });

      const response = await fetch('/api/merge', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to merge PDFs');
      }

      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Clear the files after successful merge
      setFiles([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to merge PDFs');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors bg-gray-900/50"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <input
          type="file"
          accept=".pdf"
          multiple
          onChange={onFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <Upload className="w-12 h-12 text-blue-400 mb-4" />
          <p className="text-gray-300 mb-2">
            Drag and drop PDF files here, or click to select files
          </p>
          <p className="text-sm text-gray-400">Only PDF files are supported</p>
        </label>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-200">Selected Files:</h3>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-800/50 p-3 rounded-lg border border-gray-700"
              >
                <div className="flex items-center">
                  <File className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm text-gray-300">{file.name}</span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleMerge}
            disabled={isUploading || files.length < 2}
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Merging PDFs...
              </>
            ) : (
              'Merge PDFs'
            )}
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-900/50 text-red-400 rounded-lg text-sm border border-red-800">
          {error}
        </div>
      )}
    </div>
  );
} 