import { useParams } from "react-router-dom";

const NewsDetails = () => {
    const { id } = useParams();
    const newsArticles = [
     {
          id: 1,
          title: 'Sản Phẩm Mới Trong Thời Trang!',
          date: 'Ngày 20 tháng 10, 2024',
          excerpt: 'Khám phá những xu hướng và bộ sưu tập mới nhất từ cửa hàng thời trang của chúng tôi. Tìm hiểu những phong cách tươi mới và những ưu đãi độc quyền!',
          longText: `
             Cửa hàng thời trang của chúng tôi rất vui mừng thông báo sự ra mắt của những bộ sưu tập mới ngay trong mùa này! 
             Khám phá một loạt các phong cách phù hợp với mọi sở thích và nhu cầu. Từ những chiếc váy thanh lịch cho đến những phụ kiện thời trang bắt mắt, 
             chúng tôi có mọi thứ dành cho tất cả mọi người, bất kể độ tuổi hay phong cách cá nhân.
      
             Hãy đến với chúng tôi tại cửa hàng hoặc trực tuyến để là người đầu tiên sở hữu những sản phẩm mới này. 
             Hơn nữa, hãy tận hưởng những ưu đãi độc quyền trên các mặt hàng chọn lọc mà bạn không thể tìm thấy ở nơi khác. 
             Đừng bỏ lỡ cơ hội này để làm mới tủ quần áo của bạn với những xu hướng thời trang mới nhất và nổi bật giữa đám đông!
           `,
          imageUrl: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
      },
      
      {
          id: 2,
          title: 'Giảm Giá Mùa Lễ',
          date: 'Ngày 18 tháng 10, 2024',
          excerpt: 'Chuẩn bị cho đợt giảm giá lớn nhất trong năm. Giảm giá mạnh trên điện tử, quần áo, và nhiều hơn nữa!',
          longText: `
             Mùa lễ hội sắp đến, và chúng tôi đang chuẩn bị cho đợt giảm giá lớn nhất trong năm! 
             Hãy sẵn sàng để tiết kiệm lớn trên một loạt sản phẩm. Từ những sản phẩm điện tử mới nhất đến quần áo thời trang, 
             sẽ có thứ gì đó dành cho tất cả mọi người trong danh sách quà tặng của bạn.
      
             Hãy tận hưởng mức giảm giá lên đến 70% cho các mặt hàng chọn lọc. Hãy đánh dấu lịch của bạn và chuẩn bị để mua sắm! 
             Đợt giảm giá bắt đầu vào ngày 1 tháng 11 và kéo dài trong suốt mùa lễ hội. 
             Đừng bỏ lỡ cơ hội tiết kiệm này và hãy cùng chúng tôi trải nghiệm những món hời tuyệt vời mà bạn không thể tìm thấy ở đâu khác!
           `,
          imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      },
      
      {
          id: 3,
          title: 'Ưu Đãi Độc Quyền Trên Đồ Dùng Nhà Bếp',
          date: 'Ngày 15 tháng 10, 2024',
          excerpt: 'Khám phá bộ sưu tập đồ dùng nhà bếp cao cấp của chúng tôi và nhận ưu đãi độc quyền trong tháng này.',
          longText: `
             Gửi tới những người yêu thích nấu ăn! Tháng này, chúng tôi rất vui mừng giới thiệu bộ sưu tập đồ dùng nhà bếp cao cấp của chúng tôi. 
             Dù bạn là đầu bếp nghiệp dư hay chuyên gia ẩm thực, đồ dùng nhà bếp của chúng tôi được thiết kế để làm cho trải nghiệm nấu ăn của bạn trở nên dễ dàng và thú vị hơn.
      
             Từ chảo và nồi chất lượng cao đến các dụng cụ sáng tạo, chúng tôi có mọi thứ bạn cần để nâng cao không gian bếp của mình. 
             Hơn nữa, hãy tận hưởng những ưu đãi độc quyền trên các mặt hàng chọn lọc trong thời gian có hạn. 
             Hãy ghé thăm chúng tôi tại cửa hàng hoặc trực tuyến để khám phá bộ sưu tập của chúng tôi và tận dụng những ưu đãi đặc biệt này để làm phong phú thêm không gian bếp của bạn!
           `,
          imageUrl: 'https://images.pexels.com/photos/7651828/pexels-photo-7651828.jpeg',
      },
      
      {
          id: 4,
          title: 'Ra Mắt Bộ Sưu Tập Mùa Đông',
          date: 'Ngày 12 tháng 10, 2024',
          excerpt: 'Khám phá bộ sưu tập mùa đông mới của chúng tôi với những trang phục ấm áp, phong cách và thoải mái cho mùa lạnh.',
          longText: `
             Khi nhiệt độ giảm xuống, đã đến lúc làm mới tủ quần áo của bạn với bộ sưu tập mùa đông mới của chúng tôi! 
             Chúng tôi đã chọn lọc một loạt trang phục phong cách và ấm áp giúp bạn giữ ấm và thời trang trong suốt mùa lạnh.
      
             Từ áo len dệt kim cho đến áo khoác thời trang, bộ sưu tập của chúng tôi được thiết kế để đáp ứng tất cả nhu cầu mùa đông của bạn. 
             Hãy truy cập trang web của chúng tôi hoặc ghé thăm chúng tôi tại cửa hàng để xem bộ sưu tập đầy đủ. 
             Hãy giữ ấm và phong cách trong mùa đông này với những sản phẩm mới nhất của chúng tôi, giúp bạn tự tin hơn trong từng bước đi!
           `,
          imageUrl: 'https://images.pexels.com/photos/4440153/pexels-photo-4440153.jpeg',
      },
      
      {
          id: 5,
          title: 'Hé Lộ Những Ưu Đãi Ngày Black Friday',
          date: 'Ngày 8 tháng 10, 2024',
          excerpt: 'Nhận cái nhìn thoáng qua về những ưu đãi Black Friday sắp tới của chúng tôi trên điện tử, thời trang và đồ gia dụng.',
          longText: `
             Đếm ngược đến Black Friday đã bắt đầu! Chúng tôi rất hào hứng được mang đến cho bạn cái nhìn độc quyền về những ưu đãi tuyệt vời 
             mà chúng tôi đã chuẩn bị cho sự kiện mua sắm năm nay.
      
             Từ giá không thể tin nổi trên các sản phẩm điện tử mới nhất cho đến những giảm giá tuyệt vời trên thời trang và đồ gia dụng, 
             đây là thời điểm hoàn hảo để bạn hoàn thành việc mua sắm lễ hội của mình sớm. 
             Hãy theo dõi trang web của chúng tôi để biết thêm thông tin khi chúng tôi tiến gần đến Black Friday. 
             Bạn sẽ không muốn bỏ lỡ những ưu đãi này và hãy sẵn sàng để tận hưởng những món hời hấp dẫn nhất trong năm!
           `,
          imageUrl: 'https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg',
      },
      
      {
          id: 6,
          title: 'Sản Phẩm Bán Chạy Nhất Trong Điện Tử',
          date: 'Ngày 5 tháng 10, 2024',
          excerpt: 'Khám phá những sản phẩm điện tử bán chạy nhất trong năm và sở hữu chúng với giá không thể tin được.',
          longText: `
             Năm nay, chúng tôi đã chứng kiến một số đổi mới tuyệt vời trong lĩnh vực điện tử, và chúng tôi rất hào hứng được giới thiệu 
             những sản phẩm bán chạy nhất của chúng tôi!
      
             Từ điện thoại thông minh đến thiết bị thông minh trong nhà, những sản phẩm bán chạy này đang được bán rất chạy. 
             Hãy tham gia cùng chúng tôi để làm nổi bật những mặt hàng phổ biến nhất của chúng tôi và cung cấp chúng với mức giá không thể tin được trong thời gian có hạn. 
             Dù bạn đang tìm kiếm để nâng cấp thiết bị của mình hay tìm món quà hoàn hảo cho ai đó đặc biệt, 
             những sản phẩm bán chạy của chúng tôi chắc chắn sẽ gây ấn tượng và đáp ứng mọi nhu cầu của bạn trong năm nay!
           `,
          imageUrl: 'https://images.pexels.com/photos/5723377/pexels-photo-5723377.jpeg',
      }
      
        // Thêm nhiều bài viết nếu cần
    ];

    // Tìm bài viết theo ID
    const article = newsArticles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <div>Bài viết không tồn tại!</div>;
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
