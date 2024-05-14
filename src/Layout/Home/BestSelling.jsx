
import BestSellingCard from "./BestSellingCard";
import axios from "axios";
import { useEffect, useState } from "react";

const BestSelling = () => {

    const [book, setBook] = useState([])
    
    useEffect(()=>{
     axios.get('https://gobook-server.vercel.app/allBooks')
     .then((response)=>{
         const filter = response.data.filter(elem=>elem.rating == 5)
         setBook(filter)
     })
    },[])

  

    return (
        <div className="mt-14 bg-cyan-800 p-4">
            <div>
                 <h2 className="text-3xl font-bold text-center mb-5 bg-gradient-to-br from-cyan-700 to-gray-500">Our Best Selling Books : </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 place-items-center">
                {
                    book.map(el => <BestSellingCard key={el._id} el={el}></BestSellingCard>)
                }
            </div>
        </div>
    );
};

export default BestSelling;