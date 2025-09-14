import React, { useState } from "react";
import { Link } from "react-router";
import "./search.css";
import { searchGames } from "../../api/gamesApi";

export default function SearchComp() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState("");

    const handleSearch = async () => {
        if (searchTerm.trim() === "") {
            setMessage("Please enter a search term.");
            setResults([]);
            return;
        }

        try {
            const filteredResults = await searchGames(searchTerm);
            setResults(filteredResults);
            setMessage(filteredResults.length === 0 ? "No Results Found, please try again." : "");
        } catch (err) {
            console.error("Search error:", err);
            setMessage("Error fetching results.");
        }
    };


    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>

            {message && <div className="no-results-message">{message}</div>}

            {results.length > 0 && (
                <ul className="results-list">
                    {results.map((game) => (
                        <li key={game._id} className="result-item">
                            <Link to={`/details/${game._id}`}>
                                <strong>{game.title}</strong>
                            </Link>
                            <div>{game.price} лв</div>
                            <img src={game.imageUrl} alt={game.title} width="120" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
