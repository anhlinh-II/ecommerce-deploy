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
                    {/* Giới thiệu */}
                    <section className="text-center mb-16">
                         <h1 className="text-3xl font-bold text-gray-800 mb-4">Khám Phá Cửa Hàng Của Chúng Tôi</h1>
                         <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                              Chào mừng bạn đến với cửa hàng trực tuyến của chúng tôi! Chúng tôi cung cấp nhiều sản phẩm cao cấp phù hợp với phong cách,
                              ngôi nhà và ngân sách của bạn. Hãy để chúng tôi hướng dẫn bạn trải nghiệm mua sắm tuyệt vời nơi
                              chất lượng gặp gỡ giá cả hợp lý.
                         </p>
                    </section>

                    {/* Các Tính Năng */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                         {/* Tính Năng 1 */}
                         <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
                              <img
                                   className="w-20 h-20 mb-6"
                                   src="https://cdn-icons-png.flaticon.com/512/3068/3068326.png"
                                   alt="Sản phẩm chất lượng cao"
                              />
                              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sản Phẩm Chất Lượng Cao</h3>
                              <p className="text-gray-600 text-center">
                                   Chúng tôi chỉ cung cấp những sản phẩm tốt nhất để đảm bảo bạn nhận được giá trị tốt nhất và chất lượng hàng đầu.
                              </p>
                         </div>

                         {/* Tính Năng 2 */}
                         <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
                              <img
                                   className="w-20 h-20 mb-6"
                                   src="https://cdn-icons-png.flaticon.com/512/2213/2213688.png"
                                   alt="Giao hàng nhanh chóng"
                              />
                              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Giao Hàng Nhanh Chóng và Đáng Tin Cậy</h3>
                              <p className="text-gray-600 text-center">
                                   Tận hưởng dịch vụ giao hàng nhanh chóng, đưa sản phẩm đến tay bạn đúng thời gian, mọi lúc.
                              </p>
                         </div>

                         {/* Tính Năng 3 */}
                         <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8">
                              <img
                                   className="w-20 h-20 mb-6"
                                   src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                                   alt="Sự hài lòng của khách hàng"
                              />
                              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sự Hài Lòng Của Khách Hàng</h3>
                              <p className="text-gray-600 text-center">
                                   Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng để đảm bảo trải nghiệm của bạn suôn sẻ và thú vị. Sự hài lòng của bạn là ưu tiên hàng đầu của chúng tôi.
                              </p>
                         </div>
                    </section>

                    <section className="py-16 bg-gray-100">
                         <div className="container mx-auto px-4 lg:px-8">
                              {/* Tiêu đề phần */}
                              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Về Chúng Tôi</h2>

                              {/* Nội dung Về Chúng Tôi */}
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                                   {/* Chúng Tôi Là Ai */}
                                   <div
                                        onClick={() => handleOnclickAbout(1)}
                                        className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6"
                                   >
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Chúng Tôi Là Ai</h3>
                                        <p className="text-base text-gray-600 mb-4">
                                             Chúng tôi là một đội ngũ chuyên nghiệp, cam kết mang đến trải nghiệm mua sắm đơn giản và thú vị cho khách hàng.
                                        </p>
                                        <img
                                             className="rounded-md w-full h-auto object-fit mb-4"
                                             src="https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                             alt="Chúng Tôi Là Ai"
                                        />
                                   </div>

                                   {/* Sứ Mệnh Của Chúng Tôi */}
                                   <div
                                        onClick={() => handleOnclickAbout(2)}
                                        className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6"
                                   >
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sứ Mệnh Của Chúng Tôi</h3>
                                        <p className="text-base text-gray-600 mb-4">
                                             Sứ mệnh của chúng tôi là trao quyền cho bạn bằng cách cung cấp sản phẩm chất lượng hàng đầu và dịch vụ xuất sắc.
                                        </p>
                                        <img
                                             className="rounded-md w-full h-auto object-fit mb-4"
                                             src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                             alt="Sứ Mệnh Của Chúng Tôi"
                                        />
                                   </div>

                                   {/* Sản Phẩm Chất Lượng */}
                                   <div
                                        onClick={() => handleOnclickAbout(3)}
                                        className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-6"
                                   >
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sản Phẩm Chất Lượng</h3>
                                        <p className="text-base text-gray-600 mb-4">
                                             Chúng tôi cẩn thận lựa chọn sản phẩm từ các nhà cung cấp đáng tin cậy, đảm bảo mọi sản phẩm đều đạt tiêu chuẩn cao của chúng tôi.
                                        </p>
                                        <img
                                             className="rounded-md w-full h-auto object-fit mb-4"
                                             src="https://images.pexels.com/photos/3738081/pexels-photo-3738081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                             alt="Sản Phẩm Chất Lượng"
                                        />
                                   </div>
                              </div>
                         </div>
                    </section>

                    {/* Kêu gọi hành động */}
                    <section className="text-center">
                         <h2 className="text-3xl font-bold text-gray-800 mb-6">Tham Gia Cộng Đồng Của Chúng Tôi Ngày Hôm Nay!</h2>
                         <p className="text-base text-gray-600 mb-8">
                              Đăng ký để nhận quyền truy cập độc quyền vào các bộ sưu tập mới nhất, ưu đãi và nhiều hơn nữa.
                         </p>
                         <div
                              onClick={() => handleBuyBtn()}
                              className="inline-block cursor-pointer bg-blue-600 text-white font-semibold px-10 py-4 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
                         >
                              Mua ngay bây giờ!
                         </div>
                    </section>
               </div>
          </div>
     );
};

export default About;
