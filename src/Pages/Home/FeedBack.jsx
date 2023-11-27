import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import feedback1 from '../../assets/images/feedback1.jpeg'
import feedback2 from '../../assets/images/feedback2.jpeg'
import feedback3 from '../../assets/images/feedback3.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const FeedBack = () => {
    return (
        <div>
            <div className="text-center my-10">

                <h1 className="text-3xl font-bold text-sky-500">FeedBack</h1>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20">
                <SwiperSlide className='text-center  '>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                        <div className='space-y-5'>
                            <h2 className='font-bold'>Title:Accounting</h2>
                            <h2 className='font-bold'>Name:Ifteker Ahamed</h2>
                            <h2 className='font-bold'>Feedback:Assalamualikum.This is one of the best coaching. <br /> I have learn many things from here.The basic of Accounting and so on.</h2>
                        </div>
                        <div className=''>
                            <img className='text-center justify-center rounded-lg h-[50vh]' src={feedback1} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-center  '>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                        <div className='space-y-5'>
                            <h2 className='font-bold'>Title:Finance</h2>
                            <h2 className='font-bold'>Name:Atikur Rahman</h2>
                            <h2 className='font-bold'>Feedback:Assalamualikum.This is one of the best coaching. <br /> I have learn many things from here.The basic of Accounting and so on.</h2>
                        </div>
                        <div className=''>
                            <img className='text-center justify-center rounded-lg h-[50vh]' src={feedback2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='text-center  '>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
                        <div className='space-y-5'>
                            <h2 className='font-bold'>Title:Marketing</h2>
                            <h2 className='font-bold'>Name:Nayem Uddin</h2>
                            <h2 className='font-bold'>Feedback:Assalamualikum.This is one of the best coaching. <br /> I have learn many things from here.The basic of Accounting and so on.</h2>
                        </div>
                        <div className=''>
                            <img className='text-center justify-center rounded-lg h-[50vh]' src={feedback3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default FeedBack;