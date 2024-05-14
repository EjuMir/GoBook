import { useContext, useEffect, useState } from "react";
import { AuthFirebase } from "../../Firebase/Firebase";
import BookTable from "./BookTable";


const BorrowedBooks = () => {
    const [borrow, setBorrow] = useState([]);
    const { user } = useContext(AuthFirebase);
    
    const url = `https://gobook-server.vercel.app/borrowedBooks?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrow(data))
    }, [url])

    return (

        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <td></td>
                            <td>Name</td>
                            <th>Category</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tbody className="gap-5">
                        {
                            borrow.map(element => <BookTable key={element._id} element={element}></BookTable>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default BorrowedBooks;