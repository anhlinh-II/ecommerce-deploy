import { useParams } from "react-router-dom";

const AboutDetails = () => {
    const { id } = useParams();
    const aboutSections = [
        {
            id: 1,
            title: 'Chúng Tôi Là Ai',
            shortText: `
                Chúng tôi là một đội ngũ chuyên nghiệp tận tâm, tin rằng việc mua sắm nên đơn giản và thú vị cho khách hàng của mình.
            `,
            longText: `
                Đội ngũ của chúng tôi bao gồm những cá nhân đầy nhiệt huyết, luôn cố gắng mang lại trải nghiệm mua sắm xuất sắc. Chúng tôi hiểu rằng việc mua sắm có thể khiến bạn cảm thấy quá tải, vì vậy chúng tôi cam kết đơn giản hóa quá trình và đảm bảo rằng bạn tìm thấy chính xác những gì bạn đang tìm kiếm.
                
                Chúng tôi tin vào việc xây dựng mối quan hệ bền chặt với khách hàng thông qua việc lắng nghe nhu cầu và phản hồi của họ. Mục tiêu của chúng tôi là tạo ra một môi trường thân thiện, nơi mỗi khách hàng đều cảm thấy được đánh giá và trân trọng. Hãy tham gia cùng chúng tôi trong hành trình này, và để chúng tôi giúp bạn tìm ra những sản phẩm hoàn hảo phù hợp với lối sống của bạn!
                
                Chúng tôi không chỉ là một cửa hàng trực tuyến; chúng tôi là một cộng đồng, và chúng tôi mời bạn trở thành một phần của nó!
            `,
            imageUrl: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: 2,
            title: 'Sứ Mệnh Của Chúng Tôi',
            shortText: `
                Sứ mệnh của chúng tôi là trao quyền cho bạn bằng cách cung cấp những sản phẩm chất lượng hàng đầu và dịch vụ xuất sắc.
            `,
            longText: `
                Tại tâm điểm của công ty chúng tôi là cam kết trao quyền cho khách hàng thông qua các sản phẩm chất lượng cao và dịch vụ xuất sắc. Chúng tôi tin rằng mua sắm nên là một trải nghiệm tích cực, đó là lý do tại sao chúng tôi luôn nỗ lực để đảm bảo rằng bạn hài lòng với mỗi lần mua hàng.
                
                Sứ mệnh của chúng tôi không chỉ dừng lại ở việc bán sản phẩm; chúng tôi mong muốn cung cấp cho bạn thông tin và hỗ trợ cần thiết để bạn có thể đưa ra quyết định đúng đắn. Chúng tôi cẩn thận chọn lọc sản phẩm của mình để đảm bảo rằng chúng tôi chỉ cung cấp những sản phẩm đáp ứng tiêu chuẩn khắt khe về chất lượng và giá trị.
                
                Sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi, và chúng tôi luôn sẵn sàng hỗ trợ bạn trong mọi bước đường, cho dù bạn có thắc mắc về sản phẩm hay cần trợ giúp với đơn hàng của mình.
            `,
            imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: 3,
            title: 'Sản Phẩm Chất Lượng',
            shortText: `
                Chúng tôi cẩn thận chọn lọc các sản phẩm từ những nhà cung cấp uy tín, đảm bảo mỗi mặt hàng đều đáp ứng tiêu chuẩn cao của chúng tôi.
            `,
            longText: `
                Chất lượng là yếu tố tối quan trọng trong mọi thứ mà chúng tôi làm. Chúng tôi tin rằng khách hàng của mình xứng đáng nhận được những điều tốt nhất, đó là lý do tại sao chúng tôi cẩn thận lựa chọn các sản phẩm từ những nhà cung cấp uy tín, những người chia sẻ cam kết của chúng tôi về sự xuất sắc.
                
                Mỗi mặt hàng trong cửa hàng của chúng tôi đều trải qua một quy trình chọn lọc nghiêm ngặt để đảm bảo rằng nó đáp ứng tiêu chuẩn cao về chất lượng, độ bền và hiệu suất. Chúng tôi không ngừng đánh giá các sản phẩm của mình để đảm bảo rằng chúng tôi đang cung cấp những tùy chọn tốt nhất có sẵn trên thị trường.
                
                Cam kết của chúng tôi đối với chất lượng có nghĩa là bạn có thể mua sắm với sự tự tin, biết rằng mỗi lần mua hàng đều được hỗ trợ bởi cam kết của chúng tôi đối với sự hài lòng của khách hàng. Hãy khám phá bộ sưu tập của chúng tôi và trải nghiệm sự khác biệt mà chúng tôi mang lại!
            `,
            imageUrl: 'https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
    ];
    
    // Tìm phần nội dung theo ID
    const section = aboutSections.find((section) => section.id === parseInt(id));

    if (!section) {
        return <div>Không tìm thấy phần nội dung!</div>;
    }

    return (
        <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{section.title}</h1>
            <img
                src={section.imageUrl}
                alt={section.title}
                className="w-1/2 h-auto rounded-lg mb-6"
            />
            <p className="text-gray-800 mb-4 italic text-base">{section.shortText}</p>
            <div className="prose lg:prose-xl text-gray-700">
                <p>{section.longText}</p>
            </div>
        </div>
    );
};

export default AboutDetails;
