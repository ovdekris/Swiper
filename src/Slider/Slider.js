import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/swiper-bundle.min.css"
import {Navigation, Pagination} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import style from "./Slide.module.css";
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img5.jpg"
import img4 from "./img4.jpg"

export default function Slider(props){
    console.log(typeof(props.data[0].title))
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

        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}>
                    <div className={style.slider__info__title}>KIDS <br/>COLLECTION</div>
                    <div className={style.slider__info__email}>Email address: carousel@gmail.com</div>
                    <div className={style.slider__info__description}>A collection of clothes for kids is a set of clothing items that have been specifically designed and curated for children of different ages, sizes, and genders. The collection typically includes a range of clothing styles, such as casual wear, formal wear, sportswear, and seasonal wear.</div>
                    <div className={style.slider__info__button}>
                        <button>Shop the collection</button>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={style.slider__container__image}><img src={img1} alt="" className={style.image}/></div>
            </div>
        </SwiperSlide>

        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}>
                    <div className={style.slider__info__title}>FAMILY <br/>COLLECTION</div>
                    <div className={style.slider__info__email}>Email address: carousel@gmail.com</div>
                    <div className={style.slider__info__description}>Fashion family collections can be a reflection of a family's unique style and fashion sense, and can offer insights into the changing trends and styles of different time periods. They can also serve as a source of inspiration for individuals interested in fashion, design, and history.</div>
                    <div className={style.slider__info__button}>
                        <button>Shop the collection</button>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={style.slider__container__image}><img src={img2} alt="" className={style.image}/></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}>
                    <div className={style.slider__info__title}>WOMAN <br/>COLLECTION</div>
                    <div className={style.slider__info__email}>Email address: carousel@gmail.com</div>
                    <div className={style.slider__info__description}>A woman's fashion collection can reflect her personal style, taste, and preferences. It may include both classic and trendy pieces, as well as items that hold sentimental value or have a special significance in her life.
                        A fashion woman collection may be built over years or even decade</div>
                    <div className={style.slider__info__button}>
                        <button>Shop the collection</button>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={style.slider__container__image}><img src={img3} alt="" className={style.image}/></div>
            </div>
        </SwiperSlide>
        <SwiperSlide className={style.slider}>
            <div className={style.slider__container}>
                <div className={style.slider__container__info}>
                    <div className={style.slider__info__title}>KIDS <br/>COLLECTION</div>
                    <div className={style.slider__info__email}>Email address: carousel@gmail.com</div>
                    <div className={style.slider__info__description}>A man's fashion collection can reflect his personal style, taste, and preferences. It may include both classic and trendy pieces, as well as items that hold sentimental value or have a special significance in his life.
                        A fashion man collection may be built over years or even decades. </div>
                    <div className={style.slider__info__button}>
                        <button>Shop the collection</button>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={style.slider__container__image}><img src={img4} alt="" className={style.image}/></div>
            </div>
        </SwiperSlide>



    </Swiper>)

}