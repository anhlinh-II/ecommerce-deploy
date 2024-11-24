import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const { slug } = useParams();

    const newsArticles = [
        {
            id: 1,
            title: 'New Arrivals in Fashion!',
            slug: 'new-arrivals-in-fashion',
            date: 'October 20, 2024',
            excerpt: 'Discover the latest trends and collections from our fashion store. Explore fresh styles and exclusive deals!',
            longText: `
                Our fashion store is thrilled to announce the launch of new collections this season! Discover a variety of styles to suit every preference and need. From elegant dresses to eye-catching accessories, we have something for everyone, regardless of age or personal style.

                Visit us in-store or online to be among the first to own these new arrivals. Moreover, enjoy exclusive deals on select items that you won’t find anywhere else. Don’t miss this opportunity to refresh your wardrobe with the latest trends and stand out from the crowd! Fashion is more than just clothing; it’s a statement of individuality, a form of expression that allows us to showcase who we are. In this collection, we’ve focused on blending timeless designs with modern elements to create something truly special. Each piece has been carefully crafted with high-quality materials to ensure comfort and durability, so you can feel as good as you look. Our designers have traveled the world, drawing inspiration from diverse cultures, landscapes, and traditions. From vibrant patterns inspired by the streets of Marrakech to minimalist cuts that echo the elegance of Paris, there’s a story behind every piece. We believe that fashion should not only look good but also make you feel empowered, confident, and ready to take on the world.

                Whether you’re looking for an outfit for a special occasion, upgrading your work wardrobe, or just treating yourself, this collection has something for you. And for those who love to accessorize, our range of bags, scarves, and jewelry will add the perfect finishing touch to your ensemble. Stay tuned for more updates, as we’ll be introducing exclusive limited-edition pieces throughout the season. Make sure to sign up for our newsletter to be the first to know about upcoming events, flash sales, and new arrivals. Your fashion journey starts here – let us help you make it extraordinary.
            `,
            imageUrl: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
        },
        {
            id: 2,
            title: 'Holiday Discounts!',
            slug: 'holiday-discounts',
            date: 'October 18, 2024',
            excerpt: 'Get ready for the biggest discounts of the year. Save big on electronics, apparel, and more!',
            longText: `
                Our fashion store is thrilled to announce the launch of new collections this season! Discover a variety of styles to suit every preference and need. From elegant dresses to eye-catching accessories, we have something for everyone, regardless of age or personal style.

                Visit us in-store or online to be among the first to own these new arrivals. Moreover, enjoy exclusive deals on select items that you won’t find anywhere else. Don’t miss this opportunity to refresh your wardrobe with the latest trends and stand out from the crowd! Fashion is more than just clothing; it’s a statement of individuality, a form of expression that allows us to showcase who we are. In this collection, we’ve focused on blending timeless designs with modern elements to create something truly special. Each piece has been carefully crafted with high-quality materials to ensure comfort and durability, so you can feel as good as you look. Our designers have traveled the world, drawing inspiration from diverse cultures, landscapes, and traditions. From vibrant patterns inspired by the streets of Marrakech to minimalist cuts that echo the elegance of Paris, there’s a story behind every piece. We believe that fashion should not only look good but also make you feel empowered, confident, and ready to take on the world.

                Whether you’re looking for an outfit for a special occasion, upgrading your work wardrobe, or just treating yourself, this collection has something for you. And for those who love to accessorize, our range of bags, scarves, and jewelry will add the perfect finishing touch to your ensemble. Stay tuned for more updates, as we’ll be introducing exclusive limited-edition pieces throughout the season. Make sure to sign up for our newsletter to be the first to know about upcoming events, flash sales, and new arrivals. Your fashion journey starts here – let us help you make it extraordinary.
            `,
            imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        },
        {
            id: 3,
            title: 'Exclusive Deals On Kitchenware!',
            slug: 'exclusive-deals-on-kitchenware',
            date: 'October 15, 2024',
            excerpt: 'Discover our premium kitchenware collection and enjoy exclusive offers this month.',
            longText: `
                Our fashion store is thrilled to announce the launch of new collections this season! Discover a variety of styles to suit every preference and need. From elegant dresses to eye-catching accessories, we have something for everyone, regardless of age or personal style.

                Visit us in-store or online to be among the first to own these new arrivals. Moreover, enjoy exclusive deals on select items that you won’t find anywhere else. Don’t miss this opportunity to refresh your wardrobe with the latest trends and stand out from the crowd! Fashion is more than just clothing; it’s a statement of individuality, a form of expression that allows us to showcase who we are. In this collection, we’ve focused on blending timeless designs with modern elements to create something truly special. Each piece has been carefully crafted with high-quality materials to ensure comfort and durability, so you can feel as good as you look. Our designers have traveled the world, drawing inspiration from diverse cultures, landscapes, and traditions. From vibrant patterns inspired by the streets of Marrakech to minimalist cuts that echo the elegance of Paris, there’s a story behind every piece. We believe that fashion should not only look good but also make you feel empowered, confident, and ready to take on the world.

                Whether you’re looking for an outfit for a special occasion, upgrading your work wardrobe, or just treating yourself, this collection has something for you. And for those who love to accessorize, our range of bags, scarves, and jewelry will add the perfect finishing touch to your ensemble. Stay tuned for more updates, as we’ll be introducing exclusive limited-edition pieces throughout the season. Make sure to sign up for our newsletter to be the first to know about upcoming events, flash sales, and new arrivals. Your fashion journey starts here – let us help you make it extraordinary.
            `,
            imageUrl: 'https://images.pexels.com/photos/7651828/pexels-photo-7651828.jpeg',
        },
        {
            id: 4,
            title: 'Winter Collection Launch!',
            slug: 'winter-collection-launch',
            date: 'October 12, 2024',
            excerpt: 'Explore our new winter collection featuring cozy, stylish, and comfortable attire for the cold season.',
            longText: `
                Our fashion store is thrilled to announce the launch of new collections this season! 
                Discover a variety of styles to suit every preference and need. From elegant dresses to eye-catching accessories, 
                we have something for everyone, regardless of age or personal style.

                Visit us in-store or online to be among the first to own these new arrivals. Moreover, enjoy exclusive deals on select items that you won’t find anywhere else. Don’t miss this opportunity to refresh your wardrobe with the latest trends and stand out from the crowd! Fashion is more than just clothing; it’s a statement of individuality, a form of expression that allows us to showcase who we are. In this collection, we’ve focused on blending timeless designs with modern elements to create something truly special. Each piece has been carefully crafted with high-quality materials to ensure comfort and durability, so you can feel as good as you look. Our designers have traveled the world, drawing inspiration from diverse cultures, landscapes, and traditions. From vibrant patterns inspired by the streets of Marrakech to minimalist cuts that echo the elegance of Paris, there’s a story behind every piece. We believe that fashion should not only look good but also make you feel empowered, confident, and ready to take on the world.

                Whether you’re looking for an outfit for a special occasion, upgrading your work wardrobe, or just treating yourself, this collection has something for you. And for those who love to accessorize, our range of bags, scarves, and jewelry will add the perfect finishing touch to your ensemble. Stay tuned for more updates, as we’ll be introducing exclusive limited-edition pieces throughout the season. Make sure to sign up for our newsletter to be the first to know about upcoming events, flash sales, and new arrivals. Your fashion journey starts here – let us help you make it extraordinary.
            `,
            imageUrl: 'https://images.pexels.com/photos/4440153/pexels-photo-4440153.jpeg',
        },
        {
            id: 5,
            title: 'Black Friday Deals Preview!',
            slug: 'black-friday-sneak-peek',
            date: 'October 8, 2024',
            excerpt: 'Get an exclusive sneak peek at our upcoming Black Friday deals on electronics, fashion, and home goods.',
            longText: `
                Our fashion store is thrilled to announce the launch of new collections this season! Discover a variety of styles to suit every preference and need. From elegant dresses to eye-catching accessories, we have something for everyone, regardless of age or personal style.

                Visit us in-store or online to be among the first to own these new arrivals. Moreover, enjoy exclusive deals on select items that you won’t find anywhere else. Don’t miss this opportunity to refresh your wardrobe with the latest trends and stand out from the crowd! Fashion is more than just clothing; it’s a statement of individuality, a form of expression that allows us to showcase who we are. In this collection, we’ve focused on blending timeless designs with modern elements to create something truly special. Each piece has been carefully crafted with high-quality materials to ensure comfort and durability, so you can feel as good as you look. Our designers have traveled the world, drawing inspiration from diverse cultures, landscapes, and traditions. From vibrant patterns inspired by the streets of Marrakech to minimalist cuts that echo the elegance of Paris, there’s a story behind every piece. We believe that fashion should not only look good but also make you feel empowered, confident, and ready to take on the world.

                Whether you’re looking for an outfit for a special occasion, upgrading your work wardrobe, or just treating yourself, this collection has something for you. And for those who love to accessorize, our range of bags, scarves, and jewelry will add the perfect finishing touch to your ensemble. Stay tuned for more updates, as we’ll be introducing exclusive limited-edition pieces throughout the season. Make sure to sign up for our newsletter to be the first to know about upcoming events, flash sales, and new arrivals. Your fashion journey starts here – let us help you make it extraordinary.
            `,
            imageUrl: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg',
        },
        {
            id: 6,
            title: 'Best-Selling Electronics!',
            slug: 'best-selling-electronics',
            date: 'October 5, 2024',
            excerpt: 'Discover the top-selling electronics of the year and grab them at unbeatable prices.',
            longText: `
                Our fashion store is thrilled to announce the launch of new collections this season! Discover a variety of styles to suit every preference and need. From elegant dresses to eye-catching accessories, we have something for everyone, regardless of age or personal style.

                Visit us in-store or online to be among the first to own these new arrivals. Moreover, enjoy exclusive deals on select items that you won’t find anywhere else. Don’t miss this opportunity to refresh your wardrobe with the latest trends and stand out from the crowd! Fashion is more than just clothing; it’s a statement of individuality, a form of expression that allows us to showcase who we are. In this collection, we’ve focused on blending timeless designs with modern elements to create something truly special. Each piece has been carefully crafted with high-quality materials to ensure comfort and durability, so you can feel as good as you look. Our designers have traveled the world, drawing inspiration from diverse cultures, landscapes, and traditions. From vibrant patterns inspired by the streets of Marrakech to minimalist cuts that echo the elegance of Paris, there’s a story behind every piece. We believe that fashion should not only look good but also make you feel empowered, confident, and ready to take on the world.

                Whether you’re looking for an outfit for a special occasion, upgrading your work wardrobe, or just treating yourself, this collection has something for you. And for those who love to accessorize, our range of bags, scarves, and jewelry will add the perfect finishing touch to your ensemble. Stay tuned for more updates, as we’ll be introducing exclusive limited-edition pieces throughout the season. Make sure to sign up for our newsletter to be the first to know about upcoming events, flash sales, and new arrivals. Your fashion journey starts here – let us help you make it extraordinary.
            `,
            imageUrl: 'https://images.pexels.com/photos/5723377/pexels-photo-5723377.jpeg',
        },
    ];

    const article = newsArticles.find((article) => article.slug === slug);

    if (!article) {
        return <div className="text-center text-red-600 font-bold text-xl mt-10">Article not found!</div>;
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
            <div className="prose lg:prose-xl text-gray-700 max-w-[800px] mx-auto">
                {article.longText.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph.trim()}</p>
                ))}
            </div>
        </div>
    );
};

export default NewsDetails;
