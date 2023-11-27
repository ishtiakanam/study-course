import slide from '../../assets/images/slide1.jpg'
const VisitedUser = () => {
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-3xl font-bold text-sky-600">Total User</h1>
            </div>
            <div>
                <div className="hero my-10">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={slide} className=" w-full md:max-w-sm rounded-lg shadow-2xl mr-10" />
                        <div className='space-y-5 mr-5'>
                            <h1 className='text-3xl font-bold'>Total User Card:10</h1>
                            <h1 className='text-3xl font-bold'>Total Classes: 90</h1>
                            <h1 className='text-3xl font-bold'>Total Enrollment:1000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitedUser;