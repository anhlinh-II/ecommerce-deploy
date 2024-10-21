import { useParams } from "react-router-dom";


const NewsDetails = () => {
     const { id } = useParams();
     const newsArticles = [
          {
               id: 1,
               title: 'New Arrivals in Fashion!',
               date: 'October 20, 2024',
               excerpt: 'Check out the latest trends and collections from our fashion store. Discover fresh styles and exclusive deals!',
               longText: `
           Our fashion store is excited to announce the arrival of new collections just in time for the season! 
           Explore an array of styles that cater to every taste and preference. From chic dresses to stylish accessories, 
           we have something for everyone. 
   
           Visit us in-store or online to be the first to grab these new arrivals. 
           Plus, enjoy exclusive discounts on select items. Don't miss out on this opportunity to update your wardrobe 
           with the latest fashion trends!
         `,
               imageUrl: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
          },
          {
               id: 2,
               title: 'Holiday Season Sale',
               date: 'October 18, 2024',
               excerpt: 'Prepare for the biggest holiday sale of the year. Massive discounts on electronics, clothing, and more!',
               longText: `
           The holiday season is almost here, and we’re rolling out our biggest sale of the year! 
           Get ready to save big on a wide variety of products. 
   
           From the latest electronics to fashionable clothing, there will be something for everyone on your gift list. 
           Enjoy discounts of up to 70% on select items. Mark your calendars and get ready to shop! 
           Our sale starts on November 1st and runs through the holiday season. 
           Don't miss this chance to save!
         `,
               imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
          },
          {
               id: 3,
               title: 'Exclusive Offers on Kitchenware',
               date: 'October 15, 2024',
               excerpt: 'Discover our premium collection of kitchenware and get exclusive discounts this month.',
               longText: `
           Calling all cooking enthusiasts! This month, we are thrilled to introduce our premium collection of kitchenware. 
           Whether you are an amateur chef or a culinary expert, our kitchenware is designed to make your cooking experience seamless. 
   
           From high-quality pots and pans to innovative gadgets, we have everything you need to elevate your kitchen. 
           Plus, enjoy exclusive discounts on select items for a limited time. Visit us in-store or online to explore our collection and take advantage of these special offers!
         `,
               imageUrl: 'https://images.pexels.com/photos/7651828/pexels-photo-7651828.jpeg',
          },
          {
               id: 4,
               title: 'Winter Collection Launch',
               date: 'October 12, 2024',
               excerpt: 'Explore our new winter collection featuring warm, stylish, and cozy apparel for the cold season.',
               longText: `
           As the temperatures drop, it's time to refresh your wardrobe with our new winter collection! 
           We’ve curated a range of stylish and cozy apparel that will keep you warm and fashionable all season long. 
   
           From knitted sweaters to stylish coats, our collection is designed to cater to all your winter needs. 
           Check out our website or visit us in-store to see the full collection. 
           Stay warm and chic this winter with our latest arrivals!
         `,
               imageUrl: 'https://images.pexels.com/photos/4440153/pexels-photo-4440153.jpeg',
          },
          {
               id: 5,
               title: 'Sneak Peek into Black Friday Deals',
               date: 'October 8, 2024',
               excerpt: 'Get a sneak peek of our upcoming Black Friday deals on electronics, fashion, and home goods.',
               longText: `
           The countdown to Black Friday is on! We’re excited to give you an exclusive sneak peek of the incredible deals 
           we have lined up for this year's shopping extravaganza. 
   
           From unbeatable prices on the latest electronics to amazing discounts on fashion and home goods, 
           this is the perfect time to get your holiday shopping done early. 
   
           Keep an eye on our website for more updates as we approach Black Friday. You won’t want to miss these deals!
         `,
               imageUrl: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg',
          },
          {
               id: 6,
               title: 'Best Sellers in Electronics',
               date: 'October 5, 2024',
               excerpt: 'Take a look at the top-selling electronics of the year and grab them at unbeatable prices.',
               longText: `
           This year, we’ve seen some incredible innovations in the world of electronics, and we’re excited to showcase 
           our best-selling products! 
   
           From smartphones to smart home devices, these top sellers are flying off the shelves. 
           Join us as we highlight our most popular items and offer them at unbeatable prices for a limited time. 
   
           Whether you’re looking to upgrade your gadgets or find the perfect gift for someone special, 
           our best-sellers are sure to impress!
         `,
               imageUrl: 'https://images.pexels.com/photos/5723377/pexels-photo-5723377.jpeg',
          },
          // Add more articles as needed
     ];

     // Find the article by ID
     const article = newsArticles.find((article) => article.id === parseInt(id));

     if (!article) {
          return <div>Article not found!</div>;
     }

     return (
          <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col items-center">
               <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
               <p className="text-gray-600 mb-2">{article.date}</p>
               <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-1/2 h-auto rounded-lg mb-6"
               />
               <p className="text-gray-800 mb-4 italic text-base">{article.excerpt}</p>
               <div className="prose lg:prose-xl text-gray-700">
                    <p>{article.longText}</p>
               </div>
          </div>
     );
};

export default NewsDetails;
