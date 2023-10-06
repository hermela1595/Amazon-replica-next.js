import React from "react";
import Image from "next/image";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import Slider from 'react-slick'


function Banner() {
    var settings = {
        dots: false,
        autoplay: true,
        autoplayspeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    
      <div className="width-65">
        <div className=' hidden md:flex absolute w-full bg-gradient-to-t from-gray-50 to-transparent h-52 bottom-0 z-10'/>
      <Slider className="flex items-center justify-center" {...settings}>
          <div>
            <Image  priority className="w-full" src={slide1} alt="" />
          </div>
          <div>
            <Image className="w-full" src={slide2} alt="" />
          </div>
          <div>
            <Image className="w-full" src={slide3} alt="" />
          </div>
          <div>
            <Image className="w-full" src={slide4} alt="" />
          </div>
        </Slider>
        {/* <div className="w-full h-40 bg-gradient-to-t from-gray-50 to-transparent absolute bottom-0 z-20"></div> */}

    </div>
      
    
  );
}

export default Banner;
