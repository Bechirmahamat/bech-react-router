import { Link } from "react-router-dom";

const SingleCockTail = ({ img, id, category, name, alcohol }) => {
    return (
        <article className="item">
            <div className="img-container">
                <img src={img} alt="" />
            </div>

            <div className="info">
                <h4>{category}</h4>
                <h5>{name}</h5>
                <p>{alcohol}</p>
                <Link to={`cocktail/${id}`}>Details</Link>
            </div>
        </article>
    );
};
export default SingleCockTail;
