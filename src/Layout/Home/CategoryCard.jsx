import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
    
    const {category, image} = data;
    console.log(category);

    const [isHovered, setIsHovered] = useState(false);
    
    const textColor = isHovered ? 'black' : 'red';
    const opacity = isHovered ? '40%':'100%';
    const transition = isHovered ? '0.5s':'0.5s'

    return (
        <div onMouseOver={()=>setIsHovered(true)}
                onMouseOut={()=>setIsHovered(false)}>
                    <Link to={`http://localhost:5173/allBooks/${category}`}>
                        <div className="relative">
                        <div className="border-2">
                        <img style={{opacity:opacity, transition:transition}} className="opacity-40 h-96 w-full" src={image} alt="" />
                        </div>
                        <div className="w-full h-28 content-center bg-white bg-opacity-80 absolute top-0">
                           <h2 style={{color:textColor}} className="text-3xl font-bold text-center">{category}</h2>
                        </div>
                        <div>
                            {
                                isHovered && <div className="w-full h-32 bg-white bg-opacity-60 absolute top-1/2 content-center">
                                <h2 style={{color:textColor}} className="text-xl font-bold text-center my-auto">Click to visit this category</h2>
                             </div>
                            }
                        </div>
                        </div>
                     </Link>
                </div>
  );
};

export default CategoryCard;