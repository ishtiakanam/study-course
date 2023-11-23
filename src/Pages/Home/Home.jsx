import Banner from "./Banner";
import Navbar from "../../Layout/Navbar";
// import Category from "./Category";

const Home = () => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <Navbar />
            <Banner />
            {/* <Category /> */}
        </div>
    );
};

export default Home;