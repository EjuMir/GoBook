
const BookTable = ({ element }) => {
    const { image, name, borrowDate, returnDate, category } = element;

    return (
            <tr className="bg-base-200">
                <td className="w-32 h-36"><img src={image} alt="" /></td>
                <td>{name}</td>
                <td>{category}</td>
                <td className="text-green-500 font-bold">{borrowDate}</td>
                <td className="text-red-500 font-bold">{returnDate}</td>
            </tr>
    );
};

export default BookTable;