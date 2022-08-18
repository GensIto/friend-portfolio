import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// カルーセルにする画像のソースをリストにします
const images = [
  "/images/swiper/001.png",
  "/images/swiper/002.jpg",
  "/images/swiper/003.jpg",
  "/images/swiper/004.jpg",
];

const MySwiper = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      modules={[Autoplay, EffectFade]}>
      {images.map((src, index) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              className='mx-auto w-full '
              src={src}
              alt='test_image'
              width='1440'
              height='890'
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
