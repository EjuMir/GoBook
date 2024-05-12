import { useLoaderData } from "react-router-dom";


const Details = () => {
    const detailofBook = useLoaderData();
    const {name, image, description} = detailofBook;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="h-72" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent font-bold">Borrow</button>
                </div>
            </div>
        </div>
    );
};

export default Details;