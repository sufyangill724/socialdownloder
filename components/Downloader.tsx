'use client';

import { useState, useRef } from 'react';
import { validateUrl, getPlatformFromUrl } from '@/lib/validation';

type DownloadState = 'idle' | 'loading' | 'success' | 'error';

export default function Downloader() {
  const [url, setUrl] = useState('');
  const [state, setState] = useState<DownloadState>('idle');
  const [error, setError] = useState('');
  const [downloadData, setDownloadData] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateUrl(url);
    if (!validation.valid) {
      setError(validation.error || 'Please enter a valid supported video URL.');
      setState('error');
      return;
    }

    setState('loading');
    setError('');
    setDownloadData(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process the URL.');
      }

      setDownloadData(data);
      setState('success');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      setState('error');
    }
  };

  const handleReset = () => {
    setUrl('');
    setState('idle');
    setError('');
    setDownloadData(null);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleDownload = () => {
    if (downloadData?.downloadUrl) {
      window.open(downloadData.downloadUrl, '_blank');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-grow relative">
            <input
              ref={inputRef}
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (state === 'error') {
                  setState('idle');
                  setError('');
                }
              }}
              placeholder="Paste the URL of the video or reel here..."
              className="input-field pr-20"
              disabled={state === 'loading'}
              aria-label="Video URL input"
              aria-describedby={error ? 'url-error' : undefined}
            />
            <button
              type="button"
              onClick={handlePaste}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              disabled={state === 'loading'}
              aria-label="Paste from clipboard"
            >
              Paste
            </button>
          </div>
          <button
            type="submit"
            className="btn-primary whitespace-nowrap min-w-[120px]"
            disabled={state === 'loading' || !url.trim()}
          >
            {state === 'loading' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              'Download'
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700" role="alert">
            <p id="url-error">{error}</p>
          </div>
        )}

        {state === 'success' && downloadData && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-green-800">Ready to download!</p>
                {downloadData.title && (
                  <p className="text-sm text-green-700">{downloadData.title}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleDownload}
                  className="btn-primary text-sm py-2 px-4"
                >
                  Download Video
                </button>
                <button
                  onClick={handleReset}
                  className="btn-secondary text-sm py-2 px-4"
                >
                  New URL
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}