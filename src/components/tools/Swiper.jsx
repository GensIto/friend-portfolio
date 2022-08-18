import { Swiper, SwiperSlide } from "swiper/react"; //カルーセルに必要なタグをインポート
import SwiperCore, { Autoplay, EffectFade } from "swiper"; //欲しい機能をインポート
import Image from "next/image";

SwiperCore.use([Autoplay, EffectFade]);

// カルーセルにする画像のソースをリストにします
// const images = [
//   "./images/swiper/dummy01.jpg",
//   "./images/swiper/dummy02.jpg",
//   "./images/swiper/dummy03.jpg",
// ];

const MySwiper = () => {
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{ delay: 1000, disableOnInteraction: true }}
      speed={500}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      loop={true}>
      {images.map((src, index) => {
        return (
          <SwiperSlide key={`${index}`}>
            <Image
              className='mx-auto w-full '
              src={src}
              alt='test_image'
              width={100}
              height={100}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MySwiper;
