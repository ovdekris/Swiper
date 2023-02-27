import {Swiper, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import './App.css';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import Slider from "./Slider/Slider";
function App() {
  return (
    <div className="App">
      <Slider/>
    </div>
  );
}

export default App;
