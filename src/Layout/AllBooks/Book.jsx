import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom";

const Book = ({ data }) => {
    const {_id, image, name, rating, author, category } = data

    const rate = {
        size: 30,
        value: parseInt(rating),
        edit: false,
        activeColor: 'orange'
    };

    return (
        <Link to={`/details/${_id}`}>
        <div className='p-4'>
            <div className="card lg:w-72 bg-cyan-200 border-2 border-opacity-50 border-cyan-700">
                <figure><img className='h-56 lg:h-72 w-full rounded-md' src={`${image}`} alt={`${name}`} /></figure>
                <div className="card-body h-72">

                    <h2 className="card-title font-bold">{name}</h2>
                    <p><span className='font-bold'>By: </span>{author}</p>
                    <p><span className='font-bold'>Category: </span>{category}</p>
                    <p><ReactStars {...rate}></ReactStars></p>

                    <div className="card-actions justify-end">
                        <Link to={`/updatePage/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;