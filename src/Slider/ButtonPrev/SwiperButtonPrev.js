import {useSwiper} from "swiper/react";

export function SwiperButtonPrev({props}){
    const swiper=useSwiper();
    return(
        <button onClick={()=>swiper.slidePrev()}>Prev</button>
    )
}
