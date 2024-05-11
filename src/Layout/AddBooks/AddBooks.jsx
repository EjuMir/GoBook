
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
       const description = form.shortDes.value;
       
       const addBook = {name, image, quantity, author, rating, contents, description};
       console.log(addBook);
    }


    return (
        <div>
            <div className="card lg:card-center text-center bg-base-100 shadow-xl bg-gradient-to-tr from-green-300 to-white">
                <figure><img className="lg:mt-5" src="https://www.comprehensionconnection.net/wp-content/uploads/2014/07/level-your-library-4963667.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div>
                            <input type="text" name="name" placeholder="Book Name" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="url" name="image" placeholder="Put Your Image URL" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="author" placeholder="Author" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="context" placeholder="Context" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="shortDes" placeholder="Short Description" className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className="btn btn-accent bg-green-900 text-white text-xl font-bold w-3/4 mt-5"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooks;

// className='grid grid-cols-1 gap-5 place-items-center'

