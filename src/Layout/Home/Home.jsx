import Accordion from "./Accordion";
import Banner from "./Banner";
import BestSelling from "./BestSelling";

import Category from "./Category";


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BestSelling></BestSelling>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;