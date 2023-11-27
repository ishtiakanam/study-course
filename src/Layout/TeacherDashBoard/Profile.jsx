import { useContext } from "react";
import Navbar from "../Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
            <Navbar />
            <h1 className="">{user.name}</h1>
            <h1 className="text-3xl font-bold text-center">Email:{user.email}</h1>
        </div>
    );
};

export default Profile;