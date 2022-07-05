import Image from "next/image";
import YellowBg from "../../static/images/shape/yellow-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Back_1 from "../../static/images/background/back-1.jpg";
import Back_2 from "../../static/images/background/back-2.jpg";
import Back_3 from "../../static/images/background/back-3.jpg";

const Slider_nav = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      className="swiper-container slider__nav d-none d-md-block"
    >
      <SwiperSlide>
        <div
          className="slider__nav-item swiper-slide orange-bg"
          data-background=""
        >
          <div className="slider__nav-content">
            <span>6 Courses</span>
            <h4>Programming Languages</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider__nav-item swiper-slide blue-bg"
          data-background=""
        >
          <div className="slider__nav-content">
            <span>4 Courses</span>
            <h4>Idea Discussion</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider__nav-item swiper-slide pink-bg"
          data-background=""
        >
          <div className="slider__nav-content">
            <span>8 Courses</span>
            <h4>Web Development</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="slider__nav-item swiper-slide green-bg"
          data-background=""
        >
          <div className="slider__nav-content">
            <span>8 Courses</span>
            <h4>System Administration</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const Slider__height = () => {
  return (
    <Swiper spaceBetween={0}>
      <SwiperSlide>
        <div
          className="single-slider slider__height slider__overlay d-flex align-items-center"
          style={{
            backgroundImage: `url(${Back_1.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                <div className="slider__content">
                  <span>Learn</span>
                  <h3 className="slider__title">Just to it</h3>
                  <p>Learn to code and get a job in the tech industry.</p>
                  <a href="about.html" className="e-btn slider__btn">
                    Go to About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="single-slider slider__height slider__overlay d-flex align-items-center"
          style={{
            backgroundImage: `url(${Back_2.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                <div className="slider__content">
                  <span>Learn & Achieve</span>
                  <h3 className="slider__title">
                    Find the right Online{" "}
                    <span className="yellow-bg">
                      tutor <Image src={YellowBg} alt="" />
                    </span>{" "}
                    for you.
                  </h3>
                  <p>
                    Meet university,and cultural institutions, who'll share
                    their experience.
                  </p>
                  <a href="about.html" className="e-btn slider__btn">
                    Ready to get Started?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="single-slider slider__height slider__overlay d-flex align-items-center"
          style={{
            backgroundImage: `url(${Back_3.src})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-9 col-sm-10">
                <div className="slider__content">
                  <span>Learn & Achieve</span>
                  <h3 className="slider__title">
                    Find the right Online{" "}
                    <span className="yellow-bg">
                      tutor <Image src={YellowBg} alt="" />
                    </span>{" "}
                    for you.
                  </h3>
                  <p>
                    Meet university,and cultural institutions, who'll share
                    their experience.
                  </p>
                  <a href="about.html" className="e-btn slider__btn">
                    Ready to get Started?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const SectionSlider = () => {
  return (
    <section className="slider__area p-relative">
      <div className="slider__wrapper swiper-container">
        <Slider__height />
      </div>
      <Slider_nav />
    </section>
  );
};
export default SectionSlider;
