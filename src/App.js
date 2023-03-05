import './App.css';
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import Slider from "./Slider/Slider";


const data=[
    {   title1:"KIDS",
        title2:"COLLECTION",
        email: "carousel@gmail.com",
        description: "A collection of clothes for kids is a set of clothing items that have been" +
            " specifically designed and curated for children of different ages, sizes, and genders." +
            " The collection typically includes a range of clothing styles, such as casual wear, formal" +
            " wear, sportswear, and seasonal wear",
        img: require("../src/Slider/img1.jpg")
    },
    {   title1:"FAMILY",
        title2:"COLLECTION",
        email: "carousel@gmail.com",
        description: "Fashion family collections can be a reflection of a family's unique style and fashion sense, " +
            "and can offer insights into the changing trends and styles of different time periods. They can also " +
            "serve as a source of inspiration for individuals interested in fashion, design, and history",
        img: require("../src/Slider/img2.jpg")
    },
    {   title1:"WOMAN",
        title2:"COLLECTION",
        email: "carousel@gmail.com",
        description: "A woman's fashion collection can reflect her personal style, taste, and preferences. It may include both classic and trendy pieces, as well as items that hold sentimental value or have a special significance in her life."+
       " A fashion woman collection may be built over years or even decade",
        img: require("../src/Slider/img5.jpg")
    },
    {   title1:"MAN",
        title2:"COLLECTION",
        email: "carousel@gmail.com",
        description: "A man's fashion collection can reflect his personal style, taste, and preferences. It may include both classic and trendy pieces," +
            " as well as items that hold sentimental value or have a special significance in his life."+
        "A fashion man collection may be built over years or even decades.",
        img: require("../src/Slider/img4.jpg")
    },

]

function App() {
  return (
    <div className="App">
        <h1>Carousel</h1>
      <Slider data={data}/>
    </div>
  );
}

export default App;
