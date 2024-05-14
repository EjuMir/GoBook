import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
    
    const {category, image} = data;
    
    const [isHovered, setIsHovered] = useState(false);
    
    const textColor = isHovered ? 'cyan' : 'red';
    const opacity = isHovered ? '40%':'100%';
    const transition = isHovered ? '0.5s':'0.5s'

    return (
        <div onMouseOver={()=>setIsHovered(true)}
                onMouseOut={()=>setIsHovered(false)}>
                    <Link to={`/allBooks/${category}`}>
                        <div className="relative">
                        <div className="border-2">
                        <img style={{opacity:opacity, transition:transition}} className="bg-black bg-opacity-40 h-96 w-72" src={image} alt="" />
                        </div>
                        <div className="w-full h-28 content-center bg-black bg-opacity-70 absolute top-0">
                           <h2 style={{color:textColor}} className="text-3xl font-bold text-center">{category}</h2>
                        </div>
                        <div>
                            {
                                isHovered && <div className="w-full h-32 bg-black bg-opacity-60 absolute top-1/2 content-center">
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