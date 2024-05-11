import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const AllBooks = () => {
    const bookLoaded = useLoaderData();

    return (
        <div className="bg-gradient-to-bl from-green-300 to-white">
            <div className="my-5 bg-green-300">
                <h2 className="text-3xl font-bold text-center">All Books Section</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5">
                {
                    bookLoaded.map(data=><Book key={data._id} data={data}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;