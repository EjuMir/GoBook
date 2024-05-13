import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";



const UpdatePage = () => {

    const info = useLoaderData();
    const { _id, name, image, author, rating, category } = info

    const handleSubmit = e => {


        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const category = form.category.value;


        if (rating > 5) {
            toast.error('Rating must be between 1-5');
            return;
        }

        const updateBook = { name, image, author, rating, category };

        console.log(updateBook);

        axios.put(`http://localhost:5000/allBooks/${_id}`, updateBook)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Book has been updated successfully",
                    });
                }
            });

    }

    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="card lg:card-center text-center bg-base-100 shadow-xl bg-gradient-to-tr from-green-300 to-white">
                <h2 className="text-xl font-bold">Update</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <div>
                                <input type="text" name="name" placeholder="Book Name" className="input input-bordered input-md w-full max-w-xs" defaultValue={name} required />
                            </div>
                            <div>
                                <input type="url" name="image" placeholder="Put Your Image URL" className="input input-bordered input-md w-full max-w-xs" defaultValue={image} />
                            </div>
                            <div>
                                <input type="text" name="author" placeholder="Author" className="input input-bordered input-md w-full max-w-xs" defaultValue={author} />
                            </div>
                            <div>
                                <select name="category" className="select select-bordered w-full max-w-xs" defaultValue={category}>
                                    <option disabled selected>Select Category </option>
                                    <option>Sci-Fi</option>
                                    <option>Romance</option>
                                    <option>Mystery</option>
                                    <option>Adventure</option>
                                    <option>Fiction</option>
                                    <option>Fantasy</option>
                                    <option>Comedy</option>
                                </select>

                            </div>
                            <div>
                                <input type="number" name="rating" placeholder="Rating" className="input input-bordered input-md w-full max-w-xs" defaultValue={rating} />
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className="btn btn-accent bg-green-900 text-white text-xl font-bold w-3/4 mt-5" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;