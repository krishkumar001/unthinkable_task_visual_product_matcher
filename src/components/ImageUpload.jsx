import { useState } from 'react';

const ImageUpload = ({ onImageUpload, isLoading }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [uploadMethod, setUploadMethod] = useState('file'); // 'file' or 'url'
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        setPreviewUrl(dataUrl);
        onImageUpload(dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (imageUrl.trim()) {
      setPreviewUrl(imageUrl);
      onImageUpload(imageUrl);
    }
  };

  const handleReset = () => {
    setImageUrl('');
    setPreviewUrl('');
    setUploadMethod('file');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Upload Image</h2>
      
      {/* Upload method toggle */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setUploadMethod('file')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            uploadMethod === 'file'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Upload File
        </button>
        <button
          onClick={() => setUploadMethod('url')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            uploadMethod === 'url'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Image URL
        </button>
      </div>

      {/* Upload interface */}
      {uploadMethod === 'file' ? (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
            disabled={isLoading}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <svg
              className="w-12 h-12 text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="text-gray-600 font-medium">
              Click to upload an image
            </span>
            <span className="text-gray-400 text-sm mt-1">
              PNG, JPG, GIF up to 10MB
            </span>
          </label>
        </div>
      ) : (
        <form onSubmit={handleUrlSubmit} className="space-y-4">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!imageUrl.trim() || isLoading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Load Image
          </button>
        </form>
      )}

      {/* Image preview */}
      {previewUrl && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-gray-700">Preview</h3>
            <button
              onClick={handleReset}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
              disabled={isLoading}
            >
              Remove
            </button>
          </div>
          <div className="relative">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full max-h-64 object-contain rounded-lg border border-gray-200"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
