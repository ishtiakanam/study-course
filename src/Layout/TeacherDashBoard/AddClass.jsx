import Swal from "sweetalert2";
import Navbar from "../Navbar";
import Footer from './../../Pages/Footer/Footer';
import { useLocation, useNavigate } from "react-router-dom";

const AddClass = () => {
    // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const navigate = useNavigate()
    const location = useLocation()
    const handleInputs = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const title = form.title.value
        const email = form.email.value
        const price = form.price.value
        const description = form.description.value
        const photo = form.photo.value
        const user = { name, title, email, price, description, photo }
        console.log(user);

        fetch('http://localhost:5000/class', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ user })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Successfully inserted',
                        icon: 'success',
                        confirmButtonText: 'Added Class successfully'
                    })
                    navigate('/dashBoard/myClass', { state: { from: location } })
                }
            })

    }
    return (
        <div>
            <Navbar />
            <div className=" px-24 ">
                <h2 className="text-5xl  text-center my-10 font-bold text-sky-600 ">Add Class</h2>
                <form onSubmit={handleInputs}>
                    {/* title and name */}
                    <div className="md:flex gap-5 mb-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">TItle</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Class Name" className="input input-bordered w-full rounded" />
                            </label>
                        </div>
                    </div>
                    {/* email and price */}
                    <div className="md:flex gap-5 mb-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="Enter the email" className="input input-bordered w-full rounded" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* description and photo */}
                    <div className="md:flex gap-5 mb-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo file</span>
                            </label>
                            <label className="input-group">
                                {/* <input type="file" name="photo" placeholder="Photo photo" className="file-input file-input-bordered  w-full max-w-xs" /> */}
                                <input type="text" name="photo" placeholder="Photo File" className="input input-bordered w-full rounded" />
                                {/* <input type="file"  className="file-input file-input-bordered file-input-accent w-full max-w-xs" /> */}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input className=" btn btn-block" type="submit" value="Add" />

                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddClass;