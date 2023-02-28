import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/swiper-bundle.min.css"
import {SwiperButtonNext} from "./ButtonNext/SwiperButtonNext";
import {SwiperButtonPrev} from "./ButtonPrev/SwiperButtonPrev";
import { EffectFade } from 'swiper';
import img1 from "../image1.jpeg";
import img2 from "../image2.png";
import {Navigation} from "swiper";
import 'swiper/css/navigation';
export default function Slider(props){
    console.log(props.props[0])
    return(
    <Swiper
        loop={true}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        spaceBetween={10}

    >
        {/*<p>{`"${props.props[0]}"`}</p>*/}
        {/*<SwiperSlide ><img src={props.props[0]} alt=""/></SwiperSlide>*/}

    </Swiper>)

}