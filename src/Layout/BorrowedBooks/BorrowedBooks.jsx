import { useContext, useEffect, useState } from "react";
import { AuthFirebase } from "../../Firebase/Firebase";
import BookTable from "./BookTable";


const BorrowedBooks = () => {
    const [borrow, setBorrow] = useState([]);
    const {user} = useContext(AuthFirebase);


    const url = `http://localhost:5000/borrowedBooks?email=${user.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBorrow(data))
    },[])
    
    return (
        <div>
            {
                borrow.map(element => <BookTable key={element._id} element={element}></BookTable>)
            }
        </div>
    );
};

export default BorrowedBooks;