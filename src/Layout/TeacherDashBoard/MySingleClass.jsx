import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MySingleClass = ({ user }) => {

    const { _id } = user
    const { name, title, email, price, description, photo } = user.user
    console.log(user);
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/class/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            <div className="card h-[500px] w-full bg-sky-200 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Title:{title}</h2>
                    <p>Name:{name}</p>
                    <p>Email:{email}</p>
                    <p>Price:{price}</p>
                    <p>Description:{description}</p>
                    {/* <p>{photo}</p> */}
                    <img src={photo} alt="" />
                    <div className="card-actions justify-end">
                        <Link to={`/dashBoard/updateClass/${user._id}`}>
                            <button className="btn btn-primary">Update</button>
                        </Link>
                        <button type="submit" onClick={() => handleDelete(_id)} className="btn btn-outline bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySingleClass;