import { useState } from 'react';

const ProductGrid = ({ products, isLoading }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minSimilarity, setMinSimilarity] = useState(0);

  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const similarityMatch = product.similarity >= minSimilarity;
    return categoryMatch && similarityMatch;
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Finding similar products...</p>
          <p className="text-gray-400 text-sm mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            No Results Yet
          </h3>
          <p className="text-gray-500">
            Upload an image to find similar products
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Similar Products ({filteredProducts.length})
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Category filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Similarity filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Similarity: {minSimilarity}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={minSimilarity}
              onChange={(e) => setMinSimilarity(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Product grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No products match your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.similarity}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2 capitalize">
                  {product.category}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                        style={{ width: `${product.similarity}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
