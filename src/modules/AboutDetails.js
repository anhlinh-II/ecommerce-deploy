import { useParams } from "react-router-dom";

const AboutDetails = () => {
    const { id } = useParams();
    const aboutSections = [
        {
            id: 1,
            slug: 'who-we-are',
            title: 'Who We Are',
            shortText: `
                We are a dedicated, professional team that believes shopping should be simple and enjoyable for our customers.
            `,
            longText: `
                We are a team of passionate professionals committed to revolutionizing your shopping experience. At our core, we value simplicity, trust, and an unwavering focus on customer satisfaction. Whether you're exploring for essentials or unique finds, our online store offers an exceptional range of products tailored to your lifestyle. From top-tier quality to personalized service, our mission is to connect with you on a deeper level. We're not just a business; we’re a community dedicated to enriching your life with products that truly matter. Experience the convenience and joy of shopping like never before.
            `,
            imageUrl: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: 2,
            title: 'Our Mission',
            slug: 'our-mission',
            shortText: `
                Our mission is to empower you by providing top-quality products and outstanding service.
            `,
            longText: `
                Our mission is straightforward: to deliver excellence in every aspect of your shopping journey. From carefully curated products to exceptional customer service, we strive to empower you to make informed choices with confidence.

At our store, quality isn't just a promise; it's our priority. Our team ensures every product meets high standards for durability, value, and relevance. We aim to create a seamless and positive shopping experience where your satisfaction is always at the forefront.
            `,
            imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
            id: 3,
            title: 'Quality Products',
            slug: 'quality-products',
            shortText: `
                We carefully select products from trusted suppliers, ensuring each item meets our high standards.
            `,
            longText: `
               Our commitment to quality is unwavering. Every product in our store is handpicked from trusted suppliers who share our dedication to excellence. We ensure that each item meets rigorous standards, offering only the best for our customers.

By choosing us, you're investing in products designed to provide long-term satisfaction and value. Discover the joy of shopping for items that exceed expectations, backed by our promise of quality assurance.
            `,
            imageUrl: 'https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
    ];

    // Find the content section by ID
    const section = aboutSections.find((section) => section.slug === id);

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
            <div className="prose lg:prose-xl text-gray-700 flex">
                <p className="max-w-[800px]">{section.longText}</p>
            </div>
        </div>
    );
};

export default AboutDetails;
