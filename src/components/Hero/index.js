import React from 'react';
import heroImg from '../../assets/heroImg.jpg';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Set autoplay speed
  };

  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Get the product before
            <br className="hidden lg:inline-block" />it runs out
          </h1>
          <p className="mb-8 leading-relaxed">
            Handcrafted copper cups, custom beverages with a unique and free-spirited style, herbal products, tote bags,
            tacos, beard boxes. Natural products that are neat and fit your modern lifestyle.
          </p>
          <div className="flex justify-center">
            <Link to={`/products`}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View All Products
              </button>
            </Link>
            <Link to={`/contact`}>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Slider {...settings}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImg}
            />
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={`https://i.pinimg.com/control/564x/d4/8f/26/d48f26b004133abb8dd6e2c4efa2ceb6.jpg`}
            />
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={`https://i.pinimg.com/736x/89/84/94/898494f16ce87cf5c7c9cbb84c0b9bea.jpg`}
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;