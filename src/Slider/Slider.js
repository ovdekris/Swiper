import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/swiper-bundle.min.css"
import {Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from "./Slide.module.css";
import img from "./img1.jpg"

export default function Slider(props){

    return(
    <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Navigation,Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={10}
        className={style.container}

    >

        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}>
      fff
                </div>
                <div className={style.slider__container__image}><img src={img} alt="" className={style.image}/></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}></div>
                <div className={style.slider__container__image}></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}></div>
                <div className={style.slider__container__image}></div>
            </div>
        </SwiperSlide>


    </Swiper>)

}