import { Link } from "react-router";

export default function GamesProducts({ _id, title, imageUrl, price, category, description }) {
    return (
        <div className="col-md-4 product_box">
            <Link to={`/products/${_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="product_card">
                    <img src={imageUrl} alt={title} className="product_image" />
                    <h4 className="product_title">{title}</h4>
                    <p className="product_price">${price}</p>
                    <p className="product_category">{category}</p>
                    <p className="product_description">{description}</p>
                </div>
            </Link>
        </div>
    );
}
