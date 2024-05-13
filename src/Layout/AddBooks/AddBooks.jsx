import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'


// or via CommonJS

const AddBooks = () => {
    

    const handleSubmit = e =>{
        

       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const image = form.image.value;
       const quantity = form.quantity.value;
       const author = form.author.value;
       const rating = form.rating.value;
       const contents = form.context.value;
       const category = form.category.value;
       const description = form.shortDes.value;
       const quantityNum = parseInt(quantity);
       

       if(rating>5){
        toast.error('Rating must be between 1-5');
        return ;
       }
       if(!/[A-Z]/.test(category)){
        toast.error('Please put the first alphabet to capital in Category');
        return;
       }
       
       const addBook = {name, image, quantityNum, author, rating, contents, description, category};
       console.log(addBook);

       axios.post('http://localhost:5000/allBooks', addBook)
       .then (res => {
        if(res.data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Hooray! Your Book has been added",
                text: "Go to All book section to find your copy",
              });
            form.reset();
        }
       })

       
    }


    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className="card lg:card-center text-center bg-base-100 shadow-xl bg-gradient-to-tr from-green-300 to-white">
                <figure><img className="lg:mt-5" src="https://www.comprehensionconnection.net/wp-content/uploads/2014/07/level-your-library-4963667.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div>
                            <input type="text" name="name" placeholder="Book Name" className="input input-bordered input-md w-full max-w-xs" required/>
                        </div>
                        <div>
                            <input type="url" name="image" placeholder="Put Your Image URL" className="input input-bordered input-md w-full max-w-xs"/>
                        </div>
                        <div>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="author" placeholder="Author" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered input-md w-full max-w-xs" required/>
                        </div>
                        <div>
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="context" placeholder="Context" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="shortDes" placeholder="Short Description" className="input input-bordered input-md w-full max-w-xs"/>
                        </div>
                        </div>
                        <div>
                            <input type="submit" value="ADD BOOK" className="btn btn-accent bg-green-900 text-white text-xl font-bold w-3/4 mt-5"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;

// className='grid grid-cols-1 gap-5 place-items-center'

