// import { Link } from 'react-router'

export default function GamesProducts({
    title,
    category,
    imageUrl,
    price,
    description,
    _id,
}) {
    return (
        <div className="col-md-6">
            <div className="image_2"><img src={imageUrl} /></div>
            <div className="game_text">{title}</div>
            <div className="price_text">Price $ <span>{price}</span></div>
            <h1 className="game_text">{category}</h1>Q
            <p className="long_text">{description}</p>
            {/* <Link to={`/games/${_id}/details`} className="details-button">Details</Link> */}
        </div>
    );
}