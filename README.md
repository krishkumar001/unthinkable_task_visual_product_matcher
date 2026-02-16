Final Submission Template

Subject: Visual Product Matcher - Technical Assessment Submission


I've completed the Visual Product Matcher technical assessment. Here are the deliverables:

🔗 GitHub Repository: https://github.com/krishkumar001/unthinkable_task_visual_product_matcher
🌐 Live Application: http://unthinkabletaskvisualproductmatcher.vercel.app/

Key features implemented:
• Dual image upload methods (file + URL)
• Visual similarity matching using color histogram analysis
• Category and similarity-based filtering
• 55 products across 5 categories
• Fully responsive mobile design
• Comprehensive error handling and loading states

Technical approach :

I built a React + Vite application that enables visual product search through client-side image analysis. The core innovation is using color histogram comparison instead of external ML APIs, providing instant results without API costs or rate limits.

The system extracts color histograms from uploaded images using Canvas API, analyzing RGB distribution across 512 bins. Each product image undergoes the same process, and similarity is calculated using histogram intersection method, producing scores from 0-100%.

The frontend features dual upload methods (file/URL), real-time filtering by category and similarity threshold, and a responsive grid layout built with Tailwind CSS. All 55 products span five categories (electronics, fashion, furniture, home, sports) using Unsplash's royalty-free images.

Key technical decisions: Vite for fast builds, client-side processing to eliminate backend complexity, and histogram-based matching for reliable results without ML overhead. The application is deployment-ready for Vercel or Netlify with zero configuration.

Performance optimization includes image downsampling to 64x64 for processing, lazy result rendering, and efficient filtering. Error handling covers invalid uploads, CORS issues.


The application is production-ready and deployed.

Looking forward to discussing the implementation!

Best regards,
Krish Kumar
BTECH/60064/22


