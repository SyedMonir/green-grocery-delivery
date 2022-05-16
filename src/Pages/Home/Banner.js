import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Styles.css';
import banner1 from '../../assets/image/banner-1.jpg';
import banner2 from '../../assets/image/banner-2.jpg';
import banner3 from '../../assets/image/banner-3.jpg';
import banner4 from '../../assets/image/banner-4.jpg';

const Banner = () => {
  const banners = [
    {
      descriptionSmall: 'Fresh and Healthy',
      description: 'Vegetable Basket Free',
      image: banner1,
    },
    {
      descriptionSmall: '100% Organic',
      description: 'Delicious Ingredients',
      image: banner2,
    },
    {
      descriptionSmall: 'Fresh meat',
      description: 'Spice for cooking',
      image: banner3,
    },
    {
      descriptionSmall: 'Fresh vegetables',
      description: 'Vegetable Basket Free',
      image: banner4,
    },
  ];
  return (
    <>
      <Swiper
        autoHeight={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        // loop={true}
        rewind={true}
        keyboard={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        {banners.map((slider, index) => (
          <SwiperSlide key={index}>
            <img
              className="relative"
              src={slider?.image}
              alt={slider?.description}
            />
            <div className="banner_fadeBottom absolute w-full bottom-0 pb-8 text-white">
              <div class="backdrop-blur-sm bg-white/30 p-6">
                <h3 className="text-xl">{slider?.descriptionSmall}</h3>
                <h2 className="text-3xl">{slider?.description}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
