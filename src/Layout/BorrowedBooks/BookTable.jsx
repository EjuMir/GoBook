import axios from "axios";
import Swal from "sweetalert2";

const BookTable = ({ element }) => {
    const {_id, image, name, borrowDate, returnDate, category } = element;
   

    const handleReturn = (id) =>{
        axios.put('https://gobook-server.vercel.app/allBooks', element)
        .then(
            // res=>console.log(res.data)
        )

        axios.delete(`https://gobook-server.vercel.app/borrowedBooks/${id}`, element)
        .then(res=>{
            if(res.data.deletedCount >= 1){
                Swal.fire({
                    icon: "success",
                    title: "Your Book has been returned Successfully",
                    text: "Come Back Soon",
                  })
                  .then((result)=>{
                    if(result.isConfirmed){
                        window.location.reload();
                    }
                  })
                 
            }
            
        })
    }

    return (
            <tr>
                <td className="w-32 h-36"><img src={image} alt="" /></td>
                <td>{name}</td>
                <td>{category}</td>
                <td className="text-cyan-500 font-bold">{borrowDate}</td>
                <td className="text-red-500 font-bold">{returnDate}</td>
                <td><button onClick={()=>handleReturn(_id)} className="btn btn-secondary font-bold text-md">Return</button></td>
            </tr>
    );
};

export default BookTable;