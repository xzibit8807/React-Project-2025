import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { showGames } from "../../api/gamesApi"; 
import "./productDetails.css"   

export default function ProductDetails() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGame() {
            try {
                const games = await showGames();
                const found = games.find(g => g._id === id);
                setGame(found);
            } catch (error) {
                console.error("Failed to load game:", error);
            } finally {
                setLoading(false);
            }
        }
        loadGame();
    }, [id]);

    if (loading) return <h3>Loading game details...</h3>;
    if (!game) return <h3>Game not found.</h3>;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="imgClass" src={game.imageUrl} alt={game.title}/>
                </div>
                <div className="col-md-6">
                    <h1 className="titleClass">{game.title}</h1>
                    <p className="category">{game.category}</p>
                    <h3 className="price">${game.price}</h3>
                    <p className="information">{game.description}</p>
                </div>
            </div>
        </div>
    );
}
