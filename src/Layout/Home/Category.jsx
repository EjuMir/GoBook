
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";


const Category = () => {
    
   const [book, setBook] = useState([])

   useEffect(()=>{
    axios.get('https://gobook-server.vercel.app/category')
    .then((response)=>{
        setBook(response.data)
    })
   },[])

   return (
        <div className="my-14 bg-cyan-800 p-4">
            <div>
                <h2 className="text-3xl font-bold text-center mb-5 bg-gradient-to-br from-cyan-700 to-gray-500">Select Your Category</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 place-items-center">
                {
                   book.map(data=> <CategoryCard key={data._id} data={data}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;