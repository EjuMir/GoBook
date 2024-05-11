import React from 'react';
import ReactStars from "react-rating-stars-component"

const Book = ({ data }) => {
    const { image, name, rating, author, category } = data

    const rate = {
        size: 30,
        value: rating,
        edit: false,
        activeColor:'orange'
      };

    return (
        <div className='p-4'>
            <div className="card lg:w-72 bg-cyan-200 border-2 border-opacity-50 border-cyan-700">
                <figure><img className='h-56 lg:h-72 w-full rounded-md' src={`${image}`} alt={`${name}`} /></figure>
                <div className="card-body h-72">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p><span className='font-bold'>By: </span>{author}</p>
                    <p><span className='font-bold'>Category: </span>{category}</p>
                    <p><ReactStars {...rate}></ReactStars></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;