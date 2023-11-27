import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import signUpImage from '../../assets/images/signup.png'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../Layout/Navbar";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hook/useAxiosPublic";

const SignUp = () => {
    // const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, email, password, photo }
        console.log(user);

        createUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    // title: "successfully logged in",
                    title: `${user.name} successfully logged in`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
                // create user entry in database
                // const userInfo = {
                //     name: user.name,
                //     email: user.email,
                // }
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         if (res.user.insertedId) {
                //             console.log("user added to the database");
                //             Swal.fire({
                //                 position: "center",
                //                 icon: "success",
                //                 title: "successfully logged in",
                //                 showConfirmButton: false,
                //                 timer: 1500
                //             });
                //             navigate('/')
                //         }
                //     })

            })
            .catch(err => [
                console.log(err)
            ])
    }
    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={signUpImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">SignUp</h1>
                            <form onSubmit={handleSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="photo Url" name='photo' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-sky-500 text-white" value="Register" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>Already have account?Please <Link to='/login' className='text-sky-500 font-bold'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;