import { useNavigate } from "react-router-dom";

const News = () => {
    const navigate = useNavigate();
    const newsArticles = [
        {
            id: 1,
            title: 'New Arrivals in Fashion!',
            slug: 'new-arrivals-in-fashion',
            date: 'October 20, 2024',
            excerpt:
                'Discover the latest trends and collections from our fashion store. Explore fresh styles and exclusive offers!',
            imageUrl: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
        },
        {
            id: 2,
            title: 'Holiday Discounts',
            slug: 'holiday-discounts',
            date: 'October 18, 2024',
            excerpt:
                'Get ready for the biggest sale of the year. Huge discounts on electronics, clothing, and more!',
            imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        },
        {
            id: 3,
            title: 'Exclusive Deals on Kitchenware',
            slug: 'exclusive-deals-on-kitchenware',
            date: 'October 15, 2024',
            excerpt:
                'Check out our premium kitchenware collection and enjoy exclusive offers this month.',
            imageUrl: 'https://images.pexels.com/photos/7651828/pexels-photo-7651828.jpeg',
        },
        {
            id: 4,
            title: 'Winter Collection Launch',
            slug: 'winter-collection-launch',
            date: 'October 12, 2024',
            excerpt:
                'Discover our new winter collection featuring warm, stylish, and comfortable outfits for the cold season.',
            imageUrl: 'https://images.pexels.com/photos/4440153/pexels-photo-4440153.jpeg',
        },
        {
            id: 5,
            title: 'Black Friday Sneak Peek',
            slug: 'black-friday-sneak-peek',
            date: 'October 8, 2024',
            excerpt:
                'Get a sneak peek at our upcoming Black Friday deals on electronics, fashion, and home appliances.',
            imageUrl: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg',
        },
        {
            id: 6,
            title: 'Best-Selling Electronics',
            slug: 'best-selling-electronics',
            date: 'October 5, 2024',
            excerpt:
                'Explore the best-selling electronics of the year and grab them at unbelievable prices.',
            imageUrl: 'https://images.pexels.com/photos/5723377/pexels-photo-5723377.jpeg',
        },
        // Add more articles if needed
    ];

    const handleClickNews = (item) => {
        navigate(`/news/${item.slug}`)
    }

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsArticles.map((article) => (
                        <div
                            key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => handleClickNews(article)}
                        >
                            <img
                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                src={article.imageUrl}
                                alt={article.title}
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 transition-colors duration-300 hover:text-blue-600 hover:underline">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 mb-4">{article.date}</p>
                                <p className="text-gray-700">{article.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
