// Product database with 50+ items using Unsplash images
export const products = [
  // Electronics
  { id: 1, name: "Wireless Headphones", category: "electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", price: 199 },
  { id: 2, name: "Laptop Computer", category: "electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", price: 1299 },
  { id: 3, name: "Smartphone", category: "electronics", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", price: 899 },
  { id: 4, name: "Smartwatch", category: "electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", price: 399 },
  { id: 5, name: "Camera", category: "electronics", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400", price: 1499 },
  { id: 6, name: "Tablet", category: "electronics", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400", price: 699 },
  { id: 7, name: "Gaming Console", category: "electronics", image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400", price: 499 },
  { id: 8, name: "Keyboard", category: "electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400", price: 129 },
  { id: 9, name: "Computer Mouse", category: "electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400", price: 79 },
  { id: 10, name: "Portable Speaker", category: "electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", price: 149 },
  
  // Fashion
  { id: 11, name: "Leather Jacket", category: "fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400", price: 249 },
  { id: 12, name: "Running Shoes", category: "fashion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", price: 159 },
  { id: 13, name: "Sunglasses", category: "fashion", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", price: 199 },
  { id: 14, name: "Wristwatch", category: "fashion", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400", price: 449 },
  { id: 15, name: "Backpack", category: "fashion", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", price: 89 },
  { id: 16, name: "Baseball Cap", category: "fashion", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400", price: 35 },
  { id: 17, name: "Sneakers", category: "fashion", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400", price: 129 },
  { id: 18, name: "Handbag", category: "fashion", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400", price: 299 },
  { id: 19, name: "Denim Jeans", category: "fashion", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", price: 79 },
  { id: 20, name: "Winter Coat", category: "fashion", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400", price: 199 },
  
  // Furniture
  { id: 21, name: "Office Chair", category: "furniture", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400", price: 399 },
  { id: 22, name: "Modern Sofa", category: "furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", price: 1299 },
  { id: 23, name: "Wooden Desk", category: "furniture", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", price: 599 },
  { id: 24, name: "Table Lamp", category: "furniture", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", price: 79 },
  { id: 25, name: "Bookshelf", category: "furniture", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400", price: 249 },
  { id: 26, name: "Dining Table", category: "furniture", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400", price: 899 },
  { id: 27, name: "Bed Frame", category: "furniture", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400", price: 799 },
  { id: 28, name: "Coffee Table", category: "furniture", image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=400", price: 349 },
  { id: 29, name: "Armchair", category: "furniture", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400", price: 549 },
  { id: 30, name: "Floor Lamp", category: "furniture", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400", price: 129 },
  
  // Home & Kitchen
  { id: 31, name: "Coffee Maker", category: "home", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400", price: 149 },
  { id: 32, name: "Blender", category: "home", image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", price: 99 },
  { id: 33, name: "Toaster", category: "home", image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=400", price: 59 },
  { id: 34, name: "Plant Pot", category: "home", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400", price: 29 },
  { id: 35, name: "Throw Pillow", category: "home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400", price: 39 },
  { id: 36, name: "Wall Clock", category: "home", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400", price: 49 },
  { id: 37, name: "Cookware Set", category: "home", image: "https://images.unsplash.com/photo-1584990347449-39b03c87f53d?w=400", price: 199 },
  { id: 38, name: "Vase", category: "home", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400", price: 45 },
  { id: 39, name: "Candles", category: "home", image: "https://images.unsplash.com/photo-1602874801006-96da0981e88b?w=400", price: 25 },
  { id: 40, name: "Area Rug", category: "home", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=400", price: 299 },
  
  // Sports & Outdoors
  { id: 41, name: "Yoga Mat", category: "sports", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400", price: 49 },
  { id: 42, name: "Dumbbell Set", category: "sports", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400", price: 159 },
  { id: 43, name: "Basketball", category: "sports", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400", price: 39 },
  { id: 44, name: "Tennis Racket", category: "sports", image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400", price: 129 },
  { id: 45, name: "Bicycle", category: "sports", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400", price: 699 },
  { id: 46, name: "Camping Tent", category: "sports", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400", price: 249 },
  { id: 47, name: "Hiking Boots", category: "sports", image: "https://images.unsplash.com/photo-1520219493119-d5ba4eefc68f?w=400", price: 179 },
  { id: 48, name: "Water Bottle", category: "sports", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400", price: 29 },
  { id: 49, name: "Golf Clubs", category: "sports", image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400", price: 599 },
  { id: 50, name: "Skateboard", category: "sports", image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=400", price: 89 },
  
  // Additional items
  { id: 51, name: "Gaming Headset", category: "electronics", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400", price: 179 },
  { id: 52, name: "Monitor", category: "electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400", price: 449 },
  { id: 53, name: "Wallet", category: "fashion", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", price: 59 },
  { id: 54, name: "Belt", category: "fashion", image: "https://images.unsplash.com/photo-1624222247344-550fb60583aa?w=400", price: 45 },
  { id: 55, name: "Side Table", category: "furniture", image: "https://images.unsplash.com/photo-1616464822287-e0c6b4e6d5e1?w=400", price: 179 }
];
