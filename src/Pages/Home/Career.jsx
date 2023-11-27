import career1 from '../../assets/images/career1.jpg'
import career2 from '../../assets/images/career2.jpg'
const Career = () => {
    return (
        <div>
            <div className="text-center my-10">
                <h1>Choose Your Career</h1>
                <h1 className="text-3xl font-bold text-sky-500">Discover Your Gain</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row ">
                        <div className='w-1/2'>
                            <img src={career1} className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className=" font-bold">Start from today.</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn bg-sky-500 text-white">Join now</button>
                        </div>
                    </div>
                </div>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row ">
                        <div className='w-1/2'>
                            <img src={career2} className=" rounded-lg shadow-2xl" />
                        </div>
                        <div className='w-1/2'>
                            <h1 className=" font-bold">Build your career</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn bg-sky-500 text-white">Join now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;