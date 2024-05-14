import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"

const BookTable = ({data}) => {
    const {_id, image, name, category, author, rating} = data;

    const rate = {
        size: 30,
        value: parseInt(rating),
        edit: false,
        activeColor: 'orange'
    };
    
    return (
        
             <tr>
               <Link to={`/details/${_id}`}><td className="w-28 h-28"><img src={image} alt="" /></td></Link>
                <td>{name}</td>
                <td>{category}</td>
                <td className="text-red-500 font-bold">{author}</td>
                <td><ReactStars {...rate}></ReactStars></td>
            </tr>
       
    );
};

export default BookTable;