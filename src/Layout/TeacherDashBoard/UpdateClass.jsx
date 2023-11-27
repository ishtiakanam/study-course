import { useLoaderData } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import Navbar from "../Navbar";
import Swal from "sweetalert2";

const UpdateClass = () => {
    const update = useLoaderData()
    console.log(update);
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

        fetch(`http://localhost:5000/class/${update._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your class has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div>
            <Navbar />
            <div className=" px-24 ">
                <h2 className="text-5xl  text-center my-10 font-bold text-sky-600 ">Update Class</h2>
                <form onSubmit={handleInputs}>
                    {/* title and name */}
                    <div className="md:flex gap-5 mb-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">TItle</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={update?.user?.title} name="title" placeholder="Title" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={update?.user?.name} name="name" placeholder="Class Name" className="input input-bordered w-full rounded" />
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
                                <input type="email" defaultValue={update?.user?.email} name="email" placeholder="Enter the email" className="input input-bordered w-full rounded" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={update?.user?.price} name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* description and photo */}
                    <div className="md:flex gap-5 mb-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={update?.user?.description} name="photo" placeholder="Photo Url" className="input input-bordered w-full rounded" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={update?.user?.photo} name="description" placeholder="Description" className="input input-bordered w-full" />
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

export default UpdateClass;