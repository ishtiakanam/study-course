import Banner from "./Banner";
import Navbar from "../../Layout/Navbar";
import Footer from "../Footer/Footer";
import Career from "./Career";
import Instructor from "./Instructor";
import BecomeInstructor from "./BecomeInstructor";
import Category from "./Category";
import Partners from "./Partners";
import FeedBack from "./FeedBack";
import VisitedUser from "./VisitedUser";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                <Banner />
                <Category />
                <Partners />
                <Instructor />
                <Career />
                <BecomeInstructor />
                <VisitedUser />
                <FeedBack />
            </div>
            <Footer />
        </div>
    );
};

export default Home;