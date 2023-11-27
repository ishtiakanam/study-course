// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

// import "swiper/css";
// import "swiper/css/pagination";


// const Category = () => {
//     return (
//         <section>

//             <Swiper
//                 slidesPerView={4}
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper mb-24">
//                 <SwiperSlide>
//                     <img src={slide1} alt="" />
//                     <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide2} alt="" />
//                     <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide3} alt="" />
//                     <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide4} alt="" />
//                     <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
//                 </SwiperSlide>
//             </Swiper>
//         </section>
//     );
// };

// export default Category;



import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/images/course1.jpg'
import slide2 from '../../assets/images/career2.jpg'
import slide3 from '../../assets/images/course3.jpg'
import slide4 from '../../assets/images/course4.jpg'

const Category = () => {
    return (
        <div className='my-10'>
            <h2 className='text-5xl font-bold text-center my-10 text-sky-500'>Courses</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img className='h-[300px]' src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px]' src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px]' src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[300px]' src={slide4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;