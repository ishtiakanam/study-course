import { useForm } from "react-hook-form";
import Navbar from "../../Layout/Navbar";
import info from '../../assets/images/personal.png'

const TeachOnSynergy = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    // console.log(watch("example"))
    return (
        <div>
            <Navbar />
            <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                {/*  */}
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row ">
                        <div className="text-center lg:text-left">
                            <img src={info} alt="" />
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                {/* name */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register('name')} placeholder="Name" className="input input-bordered" required />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                                {/* image */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" {...register('photo')} placeholder="Photo" className="input input-bordered" required />
                                    {errors.photo && <span>This field is required</span>}
                                </div>
                                {/* experience */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Experience</span>
                                    </label>
                                    <select defaultValue={''} type='text' name="experience" {...register('experience')} className="select w-full max-w-xs">
                                        <option disabled selected>Experience</option>
                                        <option>Beginner</option>
                                        <option>Experienced</option>
                                        <option>Some Idea</option>
                                    </select>
                                    {errors.experience && <span>This field is required</span>}
                                </div>
                                {/* title */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input name="title" type="text" {...register('title')} placeholder="Title" className="input input-bordered" required />
                                </div>
                                {errors.title && <span>This field is required</span>}

                                {/* category */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <select defaultValue={''} type='text' name="category" {...register('category')} className="select w-full max-w-xs">
                                        <option disabled selected>Category</option>
                                        <option>Web development</option>
                                        <option>Digital marketing</option>
                                        <option>Graphics</option>
                                        <option>Frelenching</option>
                                        <option>Designing</option>
                                    </select>
                                    {errors.category && <span>This field is required</span>}
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn bg-sky-500 text-white" type="submit" value="Submit" />
                                    {/* <button className="btn btn-primary">Login</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachOnSynergy;