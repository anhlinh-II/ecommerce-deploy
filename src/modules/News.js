import { useNavigate } from "react-router-dom";

const News = () => {
    const navigate = useNavigate();
    const newsArticles = [
        {
            id: 1,
            title: 'Sản Phẩm Mới Trong Thời Trang!',
            date: 'Ngày 20 tháng 10, 2024',
            excerpt:
                'Khám phá những xu hướng và bộ sưu tập mới nhất từ cửa hàng thời trang của chúng tôi. Tìm hiểu những phong cách tươi mới và những ưu đãi độc quyền!',
            imageUrl: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
        },
        {
            id: 2,
            title: 'Giảm Giá Mùa Lễ',
            date: 'Ngày 18 tháng 10, 2024',
            excerpt:
                'Chuẩn bị cho đợt giảm giá lớn nhất trong năm. Giảm giá mạnh trên điện tử, quần áo, và nhiều hơn nữa!',
            imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        },
        {
            id: 3,
            title: 'Ưu Đãi Độc Quyền Trên Đồ Dùng Nhà Bếp',
            date: 'Ngày 15 tháng 10, 2024',
            excerpt:
                'Khám phá bộ sưu tập đồ dùng nhà bếp cao cấp của chúng tôi và nhận ưu đãi độc quyền trong tháng này.',
            imageUrl: 'https://images.pexels.com/photos/7651828/pexels-photo-7651828.jpeg',
        },
        {
            id: 4,
            title: 'Ra Mắt Bộ Sưu Tập Mùa Đông',
            date: 'Ngày 12 tháng 10, 2024',
            excerpt:
                'Khám phá bộ sưu tập mùa đông mới của chúng tôi với những trang phục ấm áp, phong cách và thoải mái cho mùa lạnh.',
            imageUrl: 'https://images.pexels.com/photos/4440153/pexels-photo-4440153.jpeg',
        },
        {
            id: 5,
            title: 'Hé Lộ Những Ưu Đãi Ngày Black Friday',
            date: 'Ngày 8 tháng 10, 2024',
            excerpt:
                'Nhận cái nhìn thoáng qua về những ưu đãi Black Friday sắp tới của chúng tôi trên điện tử, thời trang và đồ gia dụng.',
            imageUrl: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg',
        },
        {
            id: 6,
            title: 'Sản Phẩm Bán Chạy Nhất Trong Điện Tử',
            date: 'Ngày 5 tháng 10, 2024',
            excerpt:
                'Khám phá những sản phẩm điện tử bán chạy nhất trong năm và sở hữu chúng với giá không thể tin được.',
            imageUrl: 'https://images.pexels.com/photos/5723377/pexels-photo-5723377.jpeg',
        },
        // Thêm nhiều bài viết nếu cần
    ];

    const handleClickNews = (item) => {
        navigate(`/news/${item.id}`)
    }

    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Tin Tức Mới Nhất</h1>
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
