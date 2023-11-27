// import Footer from "../../Pages/Footer/Footer";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import MySingleClass from "./MySingleClass";

const MyClass = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <Navbar />
            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                <h2 className="text-4xl text-sky-600 text-center font-bold">Total Class:{users.length}</h2>
                <div className="grid grid-cols-1 max-w-6xl my-10 mx-auto  md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {
                        users.map(user => <MySingleClass key={user._id} user={user}></MySingleClass>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyClass;