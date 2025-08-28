import { useEffect, useState } from "react";
import { showGames } from "../../api/gamesApi";
import GamesProducts from "./gameProducts/gamesProducts";

import "./products.css";

export default function ProductsComp() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadGames() {
            try {
                const gameData = await showGames();
                setGames(gameData);
            } catch (error) {
                console.error("Failed to load games:", error);
            } finally {
                setLoading(false);
            }
        }
        loadGames();
    }, []);

    return (
        <div className="product_section layout_padding">
            <div className="container">
                <h1 className="product_text">Our <span>products</span></h1>
                <div className="product_section_2 row">
                    {loading ? (
                        <h3 className="product_text">Loading games...</h3>
                    ) : games.length > 0 ? (
                        games.map(game => <GamesProducts key={game._id} {...game} />)
                    ) : (
                        <h3 className="product_text">No games available.</h3>
                    )}
                </div>
            </div>
        </div>
    );
}
