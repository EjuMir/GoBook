import { useLoaderData } from "react-router-dom";

const BestSelling = () => {

     const bestBook = useLoaderData()

    return (
        <div className="my-14 bg-cyan-800 p-4">
            <div>
                 <h2 className="text-3xl font-bold text-center mb-5 bg-gradient-to-br from-cyan-700 to-gray-500">Best Selling Books : </h2>
            </div>
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default BestSelling;