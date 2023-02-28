import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import './App.css';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import Slider from "./Slider/Slider";
import Title from "./Slider/Title/Title";
const name=[
    {title:"This is React slider"},
    {title:"This is React slider"},
    {title:"This is React slider"}
]
function App() {
  return (
    <div className="App">
        <Title props={name}/>
      <Slider/>
    </div>
  );
}

export default App;
