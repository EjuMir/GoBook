import React from 'react';
import ReactStars from "react-rating-stars-component"

const Book = ({ data }) => {
    const { image, name, rating, author, category } = data

    const rate = {
        size: 30,
        value: rating,
        edit: false,
        color:'red',
        activeColor:'green'
      };

    return (
        <div>
            <div className="card w-72 bg-slate-200">
                <figure><img className='h-72 w-full rounded-md' src={`${image}`} alt={`${name}`} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{author}</p>
                    <p>{category}</p>
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