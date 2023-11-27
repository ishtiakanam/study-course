import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import loginImage from '../../assets/images/login.png'
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../Layout/Navbar';
import Swal from 'sweetalert2';

// import axios from 'axios';
const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { login, googleLogIn } = useContext(AuthContext)
    const googleLog = () => {
        googleLogIn()
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);

        login(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err);
            })

        // signIn(email, password)
        //     .then(result => {
        //         // const loggedInUser = result.user
        //         const user = { email }
        //         // console.log(user);
        //         navigate(location?.state ? location?.state : '/')
        //         axios.post('https://bangla-sheba-server.vercel.app/jwt', user, { withCredentials: true })
        //             .then(res => {
        //                 console.log(res.data)
        //                 if (res.data.success) {
        //                     navigate(location?.state ? location?.state : '/')
        //                 }
        //             })
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Sign In</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-sky-500 text-white" value="login" />
                                </div>
                            </form>

                            <hr className='my-5' />
                            <button onClick={googleLog} className='btn  text-white'><FcGoogle></FcGoogle> google</button>
                            <p className='my-4 text-center'>New to Synergy please,<Link className='text-sky-500 font-bold' to='/signUp'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;