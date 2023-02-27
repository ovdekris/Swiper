import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/swiper-bundle.min.css"
import {SwiperButtonNext} from "./ButtonNext/SwiperButtonNext";
import {SwiperButtonPrev} from "./ButtonPrev/SwiperButtonPrev";
export default function Slider(){
    return(
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperButtonNext/>
        <SwiperButtonPrev/>
    </Swiper>)
}