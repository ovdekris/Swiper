import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/swiper-bundle.min.css"
import {Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import style from "./Slide.module.css";


export default function Slider(props){
    const data=props.data;
    return(
    <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Navigation,Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
            delay:3000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
        }}
        spaceBetween={10}
        className={style.container}

    >

        {data.map((item,index)=>{
           return( <SwiperSlide className={style.slider} key={index}>
                <div className={style.slider__container}>
                    <div className={style.slider__container__info}>
                        <div className={style.slider__info__title}>{item.title1}</div>
                        <div className={style.slider__info__title}>{item.title2}</div>
                        <div className={style.slider__info__email}>{item.email}</div>
                        <div className={style.slider__info__description}>{item.description}</div>
                        <div className={style.slider__info__button}>
                            <button>Shop the collection</button>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className={style.slider__container__image}><img src={item.img} alt="foto" className={style.image}/></div>
                </div>
            </SwiperSlide>)
        })}
    </Swiper>)

}