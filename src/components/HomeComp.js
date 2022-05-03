import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

import firstImg from "../images/1(1).png";
import secondImg from "../images/2(1).png";
import thirdImg from "../images/3(1).png";

function HomeSlide() {
  return (
    <div className="slider">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="slider_slide">
            <img alt="slide" src={firstImg} />
            <Link to="/list">
              <button className="slide_btn">EXPLORE NEW IMPRESSIONS</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_slide">
            <img alt="slide" src={secondImg} />
            <Link to="/list">
              <button className="slide_btn">MASTERPIECES...</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_slide">
            <img alt="slide" src={thirdImg} />
            <Link to="/list">
              <button className="slide_btn">MASTERY...</button>
            </Link>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default HomeSlide;
