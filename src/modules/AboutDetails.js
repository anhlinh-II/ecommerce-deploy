import { useParams } from "react-router-dom";

const AboutDetails = () => {
    const { id } = useParams();
    const aboutSections = [
        {
            id: 1,
            title: 'Who We Are',
            shortText: `
                We are a dedicated, professional team that believes shopping should be simple and enjoyable for our customers.
            `,
            longText: `
                Our team consists of passionate individuals who strive to provide an excellent shopping experience. We understand that shopping can sometimes feel overwhelming, so we are committed to simplifying the process and ensuring you find exactly what you are looking for.
                
                We believe in building strong relationships with our customers by listening to their needs and feedback. Our goal is to create a welcoming environment where every customer feels valued and appreciated. Join us on this journey, and let us help you discover the perfect products to match your lifestyle!
                
                We are more than just an online store; we are a community, and we invite you to be a part of it!
            `,
            imageUrl: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: 2,
            title: 'Our Mission',
            shortText: `
                Our mission is to empower you by providing top-quality products and outstanding service.
            `,
            longText: `
                At the heart of our company is a commitment to empower our customers through high-quality products and exceptional service. We believe shopping should be a positive experience, which is why we work hard to ensure you are satisfied with every purchase.
                
                Our mission goes beyond selling products; we want to provide you with the information and support you need to make informed decisions. We carefully select our products to ensure that we offer only those that meet our high standards of quality and value.
                
                Your satisfaction is our top priority, and we are always ready to assist you at every step, whether you have questions about products or need help with your order.
            `,
            imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: 3,
            title: 'Quality Products',
            shortText: `
                We carefully select products from trusted suppliers, ensuring each item meets our high standards.
            `,
            longText: `
                Quality is the key factor in everything we do. We believe our customers deserve the best, which is why we carefully choose products from trusted suppliers who share our commitment to excellence.
                
                Every item in our store undergoes a rigorous selection process to ensure it meets high standards for quality, durability, and performance. We continually assess our products to ensure we are offering the best options available in the market.
                
                Our commitment to quality means you can shop with confidence, knowing that every purchase is backed by our dedication to customer satisfaction. Explore our collection and experience the difference we bring!
            `,
            imageUrl: 'https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
    ];
    
    // Find the content section by ID
    const section = aboutSections.find((section) => section.id === parseInt(id));

    if (!section) {
        return <div>Content not found!</div>;
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
