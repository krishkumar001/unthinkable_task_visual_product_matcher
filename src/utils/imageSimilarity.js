// Simple image similarity using color histogram comparison
// This provides a client-side solution without needing external APIs

export const getImageSimilarity = async (imageUrl1, imageUrl2) => {
  try {
    const histogram1 = await getColorHistogram(imageUrl1);
    const histogram2 = await getColorHistogram(imageUrl2);
    
    // Calculate similarity using histogram intersection
    const similarity = compareHistograms(histogram1, histogram2);
    return similarity;
  } catch (error) {
    console.error('Error calculating similarity:', error);
    return 0;
  }
};

const getColorHistogram = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Resize to small size for performance
      const size = 64;
      canvas.width = size;
      canvas.height = size;
      
      ctx.drawImage(img, 0, 0, size, size);
      const imageData = ctx.getImageData(0, 0, size, size);
      const data = imageData.data;
      
      // Create RGB histogram (8 bins per channel = 512 total bins)
      const bins = 8;
      const histogram = new Array(bins * bins * bins).fill(0);
      
      for (let i = 0; i < data.length; i += 4) {
        const r = Math.floor((data[i] / 256) * bins);
        const g = Math.floor((data[i + 1] / 256) * bins);
        const b = Math.floor((data[i + 2] / 256) * bins);
        const index = r * bins * bins + g * bins + b;
        histogram[index]++;
      }
      
      // Normalize histogram
      const total = size * size;
      const normalizedHistogram = histogram.map(val => val / total);
      
      resolve(normalizedHistogram);
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = imageUrl;
  });
};

const compareHistograms = (hist1, hist2) => {
  // Histogram intersection method
  let intersection = 0;
  for (let i = 0; i < hist1.length; i++) {
    intersection += Math.min(hist1[i], hist2[i]);
  }
  
  // Convert to percentage (0-100)
  return Math.round(intersection * 100);
};

export const findSimilarProducts = async (uploadedImageUrl, products) => {
  const results = [];
  
  for (const product of products) {
    try {
      const similarity = await getImageSimilarity(uploadedImageUrl, product.image);
      results.push({
        ...product,
        similarity
      });
    } catch (error) {
      console.error(`Error processing product ${product.id}:`, error);
      results.push({
        ...product,
        similarity: 0
      });
    }
  }
  
  // Sort by similarity (highest first)
  return results.sort((a, b) => b.similarity - a.similarity);
};
