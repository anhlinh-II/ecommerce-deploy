import { useParams } from "react-router-dom";

const AboutDetails = () => {
     const { id } = useParams();
     const aboutSections = [
          {
              id: 1,
              title: 'Who We Are',
              shortText: `
                  We are a dedicated team of professionals who believe in making shopping simple and enjoyable
                  for our customers.
              `,
              longText: `
                  Our team consists of passionate individuals who strive to provide an exceptional shopping experience.
                  We understand that shopping can often be overwhelming, which is why we are committed to simplifying
                  the process and ensuring that you find exactly what you are looking for. 
      
                  We believe in building strong relationships with our customers by listening to their needs and feedback.
                  Our goal is to create a welcoming environment where every shopper feels valued and appreciated.
                  Join us on this journey, and let us help you find the perfect products that suit your lifestyle!
              `,
              imageUrl: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
              id: 2,
              title: 'Our Mission',
              shortText: `
                  Our mission is to empower you by providing top-quality products and exceptional service.
              `,
              longText: `
                  At the heart of our company is a commitment to empower our customers through high-quality products and
                  exceptional service. We believe that shopping should be a positive experience, which is why we go
                  above and beyond to ensure that you are satisfied with every purchase.
      
                  Our mission extends beyond simply selling products; we aim to provide you with the information and
                  support you need to make informed decisions. We carefully curate our selection to ensure that we
                  only offer products that meet our rigorous standards for quality and value.
      
                  Your satisfaction is our priority, and we are here to support you every step of the way, whether you
                  have questions about a product or need assistance with your order.
              `,
              imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
          {
              id: 3,
              title: 'Quality Products',
              shortText: `
                  We carefully source products from trusted suppliers, ensuring every item meets our high standards.
              `,
              longText: `
                  Quality is paramount in everything we do. We believe that our customers deserve the best, which is why
                  we carefully source our products from trusted suppliers who share our commitment to excellence.
      
                  Each item in our store undergoes a rigorous selection process to ensure that it meets our high
                  standards for quality, durability, and performance. We are constantly evaluating our product offerings
                  to ensure that we are providing the best options available in the market.
      
                  Our dedication to quality means that you can shop with confidence, knowing that every purchase is
                  backed by our commitment to customer satisfaction. Explore our collection and experience the difference
                  for yourself!
              `,
              imageUrl: 'https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          },
      ];
      

     // Find the section by ID
     const section = aboutSections.find((section) => section.id === parseInt(id));

     if (!section) {
          return <div>section not found!</div>;
     }

     return (
          <div className="container mx-auto px-4 lg:px-8 py-16 flex flex-col items-center">
               <h1 className="text-4xl font-bold text-gray-800 mb-4">{section.title}</h1>
               <p className="text-gray-600 mb-2">{section.date}</p>
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
