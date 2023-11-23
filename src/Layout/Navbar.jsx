// import { Link } from "react-router-dom";
// import MenuDropdown from "./MenuDropdown";
// import logo from '../assets/logo.jpg'
// const Navbar = () => {
//     return (
//         <div className='flex flex-row  items-center justify-between gap-3 md:gap-0 mt-5'>
//             <div className="flex items-center gap-2">
//                 <h2 className="text-2xl font-extrabold">Synergy</h2>
//                 <img className=' w-10 rounded-full' src={logo} alt="" />
//                 {/* <Link to='/'>
//                     <img
//                         // className='hidden md:block w-10 rounded-full'
//                         className=' w-10 rounded-full'
//                         src={logo}
//                         alt='logo'
//                         width='100'
//                         height='100'
//                     />
//                 </Link> */}
//             </div>
//             {/* <MenuDropdown /> */}
//         </div>
//     );
// };

// export default Navbar;
// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'
// import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext)
    // const logout = () => {
    //     logOut()
    //         .then(result => {
    //             console.log(result);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    const links = <div className="flex gap-5">
        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-yellow-500" : ""}>Home</NavLink>
        <NavLink to="/allClasses" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-yellow-500" : ""}>All Classes</NavLink>
        <NavLink to="/teachOnline" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-yellow-500" : ""}>Online Class</NavLink>

        {/* main */}
        {/* {user?.email ? <button onClick={logout}>LogOut</button> : <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-yellow-500" : ""}>Login</NavLink>} */}

        {/* <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active text-green-500" : ""}>Login</NavLink> */}
    </div>

    // const handleLogin = () => {
    //     console.log("hi");
    // }
    return (
        <div className="navbar bg-base-100 flex items-center">
            <div className="max-w-7xl p-2 flex justify-between  mx-auto w-full">
                <div className="">
                    <div className="dropdown flex items-center">
                        <label tabIndex={0} className="btn btn-ghost flex flex-col lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content flex-col mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                            {links}
                        </ul>
                    </div>
                    <div className=" items-center gap-2 flex">
                        <img className="rounded-full w-10 hidden lg:block" src={logo} alt="" />
                        <h2 className="hidden lg:block">Shared Food</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {links}
                    </ul>
                </div>
                <div >
                    <Link to='/login'>
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;