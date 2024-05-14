
import { useState } from "react";
import Book from "./Book";
import { useLoaderData } from "react-router-dom";
import BookTable from "./BookTable";
import { CiGrid41 } from "react-icons/ci";
import { FaTableList } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";

const AllBooks = () => {
    
    const bookLoaded = useLoaderData();

    const [book, setBook] = useState(bookLoaded)
    const [table, setTable] = useState(false);

    const handleAvailable = () => {
        const available = bookLoaded.filter(e=> e.quantity > 0)
        setBook(available);
        console.log(available);
    }

    const handleTable = () => {
        setTable(true);
    }
    const handleGrid = () => {
        setTable(false);
    }
    

    return (
        <div className="bg-gradient-to-bl from-cyan-800 to-white">
            <div className="my-5 bg-gradient-to-tr from-cyan-600 to-gray-500">
                <h2 className="text-3xl font-bold text-center">All Books Section</h2>
            </div>
            <div className="mx-auto text-center mb-10">
                <button onClick={handleAvailable} className="btn btn-accent text-white font-bold bg-cyan-600">Show Available Books</button>
            </div>
            <div className="mx-auto text-right mr-16 mb-3">
            <button data-tooltip-content={'List view'} data-tooltip-id="list" onClick={handleTable} className="btn mr-5 bg-gray-500 border-none"><Tooltip id="list"></Tooltip><FaTableList className="text-2xl text-white"></FaTableList></button>
            <button data-tooltip-content={'Grid view'} data-tooltip-id="grid" onClick={handleGrid} className="btn bg-gray-500 border-none"><Tooltip id="grid"></Tooltip><CiGrid41 className="text-2xl text-white font-bold"></CiGrid41></button>
            </div>
            <div>
                {
                    table ? <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <th>Category</th>
                                <th>Author</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody className="gap-5">
                            {
                                book.map(data => <BookTable key={data._id} data={data}></BookTable>)
                            }
    
                        </tbody>
                    </table>
                </div> 
                
                :
                
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-5">
                    {
                        book.map(e => <Book key={e._id} e={e}></Book>)
                    }
                </div>
                     
                
                }
                 </div>
            </div>
     
    );
};

export default AllBooks;

// 