import { Link } from 'react-router-dom';
import instructor from '../../assets/images/instructor3.jpg'
const BecomeInstructor = () => {
    return (
        <div>
            <div className="hero my-10">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src={instructor} className="max-w-sm rounded-lg h-[350px] shadow-2xl mr-10" />
                    <div>
                        <h1 className="text-5xl font-bold text-sky-500">Become an instructor</h1>
                        <p className="py-6">Instructors from around the world teach <br /> millions of learners on Synergy.We provide <br /> the tools and skills to teach what you love.</p>
                        <Link to="/teachOnline">
                            <button className="btn btn-ghost bg-sky-500 text-white">Start teaching today</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;