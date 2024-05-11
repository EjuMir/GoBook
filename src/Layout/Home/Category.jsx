import { Link } from "react-router-dom";

const Category = () => {

    return (
        <div className="my-14">
            <div>
                <h2 className="text-3xl font-bold text-center mb-5">Select Your Category</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 place-items-center">
                <div>
                    <Link to='http://localhost:5173/allBooks/Romance'><img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to='http://localhost:5173/allBooks/Fiction'><img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to='http://localhost:5173/allBooks/Comedy'><img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to='http://localhost:5173/allBooks/Mystery'><img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to='http://localhost:5173/allBooks/Classic'><img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" /></Link>
                </div>
                <div>
                    <Link to='http://localhost:5173/allBooks/Fantasy'><img src="https://www.creativindiecovers.com/wp-content/uploads/2012/02/9780718155209.jpg" alt="" /></Link>
                </div>

            </div>
        </div>
    );
};

export default Category;