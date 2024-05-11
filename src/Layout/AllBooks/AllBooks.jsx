import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const AllBooks = () => {
    const bookLoaded = useLoaderData();

    return (
        <div>
            <h1>book loaded : {bookLoaded.length}</h1>
            <div className="grid grid-cols-3 place-items-center gap-5">
                {
                    bookLoaded.map(data=><Book key={data._id} data={data}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;