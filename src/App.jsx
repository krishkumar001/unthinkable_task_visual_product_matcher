import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ProductGrid from './components/ProductGrid';
import { products } from './data/products';
import { findSimilarProducts } from './utils/imageSimilarity';
import './index.css';

function App() {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (imageUrl) => {
    setIsLoading(true);
    setError(null);
    setSimilarProducts([]);

    try {
      const results = await findSimilarProducts(imageUrl, products);
      setSimilarProducts(results);
    } catch (err) {
      console.error('Error finding similar products:', err);
      setError('Failed to process image. Please try again with a different image.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Visual Product Matcher
              </h1>
              <p className="text-gray-600 mt-1">
                Find similar products by uploading an image
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>{products.length} products</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upload section */}
        <ImageUpload onImageUpload={handleImageUpload} isLoading={isLoading} />

        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-medium text-red-800">Error</h3>
              <p className="text-red-700 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Results section */}
        <ProductGrid products={similarProducts} isLoading={isLoading} />

        {/* Info section */}
        {similarProducts.length === 0 && !isLoading && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              How it works
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Upload Image</h4>
                <p className="text-sm text-gray-600">
                  Upload a product image or provide a URL
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">AI Analysis</h4>
                <p className="text-sm text-gray-600">
                  Our system analyzes visual features
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-1">Get Results</h4>
                <p className="text-sm text-gray-600">
                  View similar products ranked by similarity
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">

            Build By -Krish Kumar , BTECH/60064/22

            Built with React + Vite | Image similarity using color histogram analysis

          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
