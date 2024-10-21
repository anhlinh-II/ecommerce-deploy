import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {

     const navigate = useNavigate();

     const handleBuyBtn = () => {
          navigate("/products");
     }

     const handleOnclickAbout = (id) => {
          navigate(`/about/${id}`)
     }

     return (
          <div className="bg-gray-50 py-16">
               <div className="container mx-auto px-4 lg:px-8">
                    {/* Introduction Section */}
                    <section className="text-center mb-16">
                         <h1 className="text-5xl font-bold text-gray-800 mb-4">Discover Our Store</h1>
                         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                              Welcome to our online shop! We offer a wide range of premium products that fit your style,
                              home, and budget. Let us guide you through an exceptional shopping experience where
                              quality meets affordability.
                         </p>
                    </section>

                    {/* Features Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                         {/* Feature 1 */}
                         <div
                              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8"
                         >
                              <img
                                   className="w-20 h-20 mb-6"
                                   src="https://cdn-icons-png.flaticon.com/512/3068/3068326.png"
                                   alt="High Quality Products"
                              />
                              <h3 className="text-2xl font-semibold text-gray-800 mb-4">High Quality Products</h3>
                              <p className="text-gray-600 text-center">
                                   We source only the finest products to ensure that you receive the best value and top-notch quality.
                              </p>
                         </div>

                         {/* Feature 2 */}
                         <div
                              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8"
                         >
                              <img
                                   className="w-20 h-20 mb-6"
                                   src="https://cdn-icons-png.flaticon.com/512/2213/2213688.png"
                                   alt="Fast Delivery"
                              />
                              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fast and Reliable Delivery</h3>
                              <p className="text-gray-600 text-center">
                                   Enjoy swift delivery services that get your products to you on time, every time.
                              </p>
                         </div>

                         {/* Feature 3 */}
                         <div
                              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8"
                         >
                              <img
                                   className="w-20 h-20 mb-6"
                                   src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                   alt="Customer Satisfaction"
                              />
                              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Satisfaction</h3>
                              <p className="text-gray-600 text-center">
                                   Our support team is here to ensure your experience is seamless and enjoyable. Your satisfaction is our priority.
                              </p>
                         </div>
                    </section>

                    <section className="py-16 bg-gray-100">
                         <div className="container mx-auto px-4 lg:px-8">
                              {/* Section Header */}
                              <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">About Us</h2>

                              {/* About Us Content */}
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                   {/* Who We Are */}
                                   <div
                                        onClick={() => handleOnclickAbout(1)}
                                        className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6"
                                   >
                                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h3>
                                        <p className="text-lg text-gray-600 mb-4">
                                             We are a dedicated team of professionals who believe in making shopping simple and enjoyable
                                             for our customers.
                                        </p>
                                        <img
                                             className="rounded-md w-full h-auto object-fit mb-4"
                                             src="https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                             alt="Who We Are"
                                        />
                                   </div>

                                   {/* Our Mission */}
                                   <div
                                        onClick={() => handleOnclickAbout(2)}
                                        className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6"
                                   >
                                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                                        <p className="text-lg text-gray-600 mb-4">
                                             Our mission is to empower you by providing top-quality products and exceptional service.
                                        </p>
                                        <img
                                             className="rounded-md w-full h-auto object-fit mb-4"
                                             src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                             alt="Our Mission"
                                        />
                                   </div>

                                   {/* Quality Products */}
                                   <div
                                        onClick={() => handleOnclickAbout(3)}
                                        className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6"
                                   >
                                        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Quality Products</h3>
                                        <p className="text-lg text-gray-600 mb-4">
                                             We carefully source products from trusted suppliers, ensuring every item meets our high standards.
                                        </p>
                                        <img
                                             className="rounded-md w-full h-auto object-fit mb-4"
                                             src="https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                             alt="Quality Products"
                                        />
                                   </div>
                              </div>
                         </div>
                    </section>



                    {/* Call to Action */}
                    <section className="text-center">
                         <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Community Today!</h2>
                         <p className="text-lg text-gray-600 mb-8">
                              Sign up for exclusive access to our latest collections, deals, and much more.
                         </p>
                         <div
                              onClick={() => handleBuyBtn()}
                              className="inline-block cursor-pointer bg-blue-600 text-white font-semibold px-10 py-4 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
                         >
                              Buy something now!
                         </div>
                    </section>
               </div>
          </div>
     );
};

export default About;
