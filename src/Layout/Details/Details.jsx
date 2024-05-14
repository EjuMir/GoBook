import { useLoaderData } from "react-router-dom";
import Modal from 'react-modal';
import { useContext, useState } from "react";
import { AuthFirebase } from "../../Firebase/Firebase";
import axios from "axios";
import Swal from "sweetalert2";


const Details = () => {
    const detailofBook = useLoaderData();
    const { name, image, category, description, quantity } = detailofBook;
    const { user } = useContext(AuthFirebase);
    // console.log(quantity);

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
        //  console.log(borrowBook);

         axios.post('https://gobook-server.vercel.app/borrowedBooks', borrowBook)
         .then (res => {
            if(res.data.insertedId){
                {Swal.fire({
                    icon: "success",
                    title: "You have borrowed this book",
                    text: `You must return it in ${returnDate}`,
                  })
                .then((result)=>{
                    if(result.isConfirmed){
                        window.location.reload();
                    }
                })
                }
                
                
            }
           })
           
                // form.reset();

           axios.put('https://gobook-server.vercel.app/borrowedBooks', borrowBook)
           .then(
            // res=>console.log(res)
        )
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-72" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    {
                        quantity > 0 ? <h2 className="text-cyan-600 text-lg font-bold">Available Books : {quantity}</h2> : <h2 className="text-red-500 text-lg font-bold">Out Of Stock</h2>
                    }
                </div>
                <div className="card-actions justify-end">
                    <div>
                        {
                            quantity > 0 ? <button className="btn btn-accent font-bold text-xl text-white" onClick={openModal}>Borrow</button> : <button className="btn btn-accent font-bold text-xl text-white btn-disabled" onClick={openModal}>Borrow</button>
                        }
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 className="text-lg font-bold text-cyan-700 mb-3">Do You Want To Borrow This Book?</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <h1 className="font-bold">Borrow Date:</h1>
                                    <input type="date" name="borrowDate" placeholder="Return Date" className="input input-bordered input-md w-full max-w-xs" required/>
                                </div>
                                <div className="mb-3">
                                    <h1 className="font-bold">Return Date:</h1>
                                    <input type="date" name="returnDate" placeholder="Return Date" className="input input-bordered input-md w-full max-w-xs" required/>
                                </div>
                                <div className="mb-3">
                                    <h1>Your Name:</h1>
                                    <input type="text" placeholder="Your Name" className="input input-bordered input-md" defaultValue={user?.displayName} disabled required />
                                </div>
                                <div className="mb-3">
                                    <h1>Your Email:</h1>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered input-md" defaultValue={user?.email} disabled required />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" value="Submit" className="btn btn-success text-white w-full font-bold"/>
                                </div>
                            </form>
                            <button className="btn btn-secondary w-full text-lg font-bold" onClick={closeModal}>Close</button>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

