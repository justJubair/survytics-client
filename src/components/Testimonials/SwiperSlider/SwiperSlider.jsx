import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

const SwiperSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <div className="bg-base-200 h-full rounded-lg">
          {/* avatar */}
          <div className="flex justify-center pt-4">
            <div className="w-32">
              <img
                className=" h-32 object-cover rounded-full"
                src="https://i.ibb.co/yQ2CB6r/pexels-vazhnik-7562313.jpg"
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <div className="text-center px-4 mt-4">
            <h3 className="font-medium">James Rodriguez</h3>
            <p className="text-gray-500">CEO</p>
            <p className="text-sm text-gray-500 mt-2">
              I can confidently say that your survey website has been a
              game-changer for our company. The customizable survey options and
              detailed reporting have given us unparalleled insights into our
              customer base.{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-base-200 h-full rounded-lg">
          {/* avatar */}
          <div className="flex justify-center pt-4">
            <div className="w-32">
              <img
                className=" h-32 object-cover rounded-full"
                src="https://i.ibb.co/HB8GHMW/pexels-ketut-subiyanto-4350178.jpg"
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <div className="text-center px-4 mt-4">
            <h3 className="font-medium">Sarah Thompson</h3>
            <p className="text-gray-500">Marketing Manager</p>
            <p className="text-sm text-gray-500 mt-2">
              As a Marketing Manager, I've used several survey platforms, but
              yours stands out for its user-friendly interface and powerful
              analytics.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-base-200 h-full rounded-lg">
          {/* avatar */}
          <div className="flex justify-center pt-4">
            <div className="w-32">
              <img
                className=" h-32 object-cover rounded-full"
                src="https://i.ibb.co/BVYhYv6/pexels-anastasia-shuraeva-6608313.jpg"
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <div className="text-center px-4 mt-4">
            <h3 className="font-medium">Emily Parker</h3>
            <p className="text-gray-500">Small Business Owner</p>
            <p className="text-sm text-gray-500 mt-2">
              Running a small business comes with its challenges, and gathering
              customer feedback used to be a daunting task. Your survey website
              changed that for us.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-base-200 h-full rounded-lg">
          {/* avatar */}
          <div className="flex justify-center pt-4">
            <div className="w-32">
              <img
                className=" h-32 object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OIHckcpNeno7oFx_pw0izU0o2hQs50p4jw&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <div className="text-center px-4 mt-4">
            <h3 className="font-medium">Alex Johnson</h3>
            <p className="text-gray-500">Human Resources Director</p>
            <p className="text-sm text-gray-500 mt-2">
              n the HR field, understanding employee satisfaction is crucial.
              Your survey platform has revolutionized our approach to employee
              engagement.{" "}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperSlider;
