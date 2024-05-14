import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom";

const BestSellingCard = ({el}) => {
    const {image, rating, _id} = el;
    const rate = {
        size: 30,
        value: parseInt(rating),
        edit: false,
        activeColor: 'orange'
    };
    return (
        
        <div>
           <div>
           <ReactStars {...rate}></ReactStars>
           <Link to={`/details/${_id}`}>
           <img className="w-36 h-48" src={image} alt="" />
           </Link>
           </div>
                
        </div>
    );
};

export default BestSellingCard;