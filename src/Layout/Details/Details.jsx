import { useLoaderData } from "react-router-dom";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useContext, useState } from "react";
import { AuthFirebase } from "../../Firebase/Firebase";
import axios from "axios";
import Swal from "sweetalert2";


const Details = () => {
    const detailofBook = useLoaderData();
    const { name, image, category, description, quantity } = detailofBook;
    const { user } = useContext(AuthFirebase);
    console.log(quantity);

    const [modalIsOpen, setIsOpen] = useState(false);

    //styles for modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    //form submission

    const handleSubmit = e =>{
         e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const borrowDate = form.borrowDate.value;
         const returnDate = form.returnDate.value;

         const borrowBook = {email, borrowDate, returnDate, image, category, name};
         console.log(borrowBook);

         axios.post('http://localhost:5000/borrowedBooks', borrowBook)
         .then (res => {
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "You have borrowed this book",
                    text: `You must return it in ${returnDate}`,
                  });
                form.reset();
                let newQuantity = (quantity-1) 
                axios.put('/allBooks', newQuantity)
                .then(res => console.log(res.data))
            }
           })
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-72" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div>
                        <button className="btn btn-accent font-bold text-xl text-white" onClick={openModal}>Borrow</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2>Do You Want To Borrow This Book?</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <h1>Borrow Date:</h1>
                                    <input type="date" name="borrowDate" placeholder="Return Date" className="input input-bordered input-md w-full max-w-xs" />
                                </div>
                                <div className="mb-3">
                                    <h1>Return Date:</h1>
                                    <input type="date" name="returnDate" placeholder="Return Date" className="input input-bordered input-md w-full max-w-xs" />
                                </div>
                                <div className="mb-3">
                                    <h1>Your Email:</h1>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered input-md" defaultValue={user?.email} disabled required />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" value="Submit" className="btn btn-success text-white font-bold"/>
                                </div>
                            </form>
                            <button className="btn btn-secondary text-lg font-bold" onClick={closeModal}>X</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

