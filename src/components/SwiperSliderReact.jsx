import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Slider1 from "../assets/slider1.webp"
import Slider2 from "../assets/slider2.webp"
import Slider3 from "../assets/slider3.webp"
import Slider4 from "../assets/slider4.webp"


const SwiperSliderReact = () => {
    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            effect={'coverflow'}
            grabCursor={true}
            // centeredSlides={true}
            slidesPerView={'3'}
            loop={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

            </SwiperSlide>
            <SwiperSlide>
                <img className='shadow-2xl rounded-xl' src={Slider2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slider3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Slider4} alt="" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSliderReact