import React from "react";
import { Carousel } from "react-responsive-carousel";
import Img1 from '../../images/atlanta3.jpg';
import Img2 from '../../images/desk.jpg';
import Img3 from '../../images/atlanta1.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
  <Carousel 
    autoPlay
    infiniteLoop
    showIndicators={false}
    showStatus={false}
    showThumbs={false}
    swipeable
    transitionTime={1000}
    useKeyboardArrows
    width="100vw"
  >
    <div>
      <img src={Img1} alt="" />
    </div>
    <div>
      <img src={Img2} alt="" />
    </div>
    <div>
      <img src={Img3} alt="" />
    </div>
  </Carousel>
);