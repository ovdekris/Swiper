import { useSwiper } from "swiper/react";

export function SwiperButtonNext({ children }) {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>Next</button>;
}

