import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 lg:px-8 bg-gray-100 py-16">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact with us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect with us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input
                                className="w-full border border-gray-300 rounded-md p-2"
                                type="text"
                                id="name"
                                placeholder="Tên của bạn"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input
                                className="w-full border border-gray-300 rounded-md p-2"
                                type="email"
                                id="email"
                                placeholder="Email của bạn"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="message">Message</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md p-2"
                                id="message"
                                rows={4}
                                placeholder="Tin nhắn của bạn"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Gửi Tin Nhắn
                        </button>
                    </form>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center p-4">Our location</h2>
                    <iframe
                        title="Map"
                        className="w-full h-[86%] rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.991214004264!2d105.84389361444557!3d21.042723485990356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8f4d2e192d%3A0xf6d164f7a631c202!2zRE3DqyBnaOG7h3UgdGnDqyBLaW5oIHRlIFF1b3N0IG5kIE5FVSBNQVBHT1JUIE5E!5e0!3m2!1svi!2s!4v1690561395961!5m2!1svi!2s"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="mt-12 text-center bg-white w-full py-4">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Follow us</h2>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                        <FaFacebookF size={30} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                        <FaLinkedinIn size={30} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
     