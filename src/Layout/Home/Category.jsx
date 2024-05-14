
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import axios from "axios";


const Category = () => {
    
   const [book, setBook] = useState([])

   useEffect(()=>{
    axios.get('http://localhost:5000/category')
    .then((response)=>{
        setBook(response.data)
    })
   },[])

   return (
        <div className="my-14 bg-green-300 p-4">
            <div>
                <h2 className="text-3xl font-bold text-center mb-5 bg-gradient-to-br from-green-400 to-white">Select Your Category</h2>
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