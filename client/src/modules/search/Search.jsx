import React, { useState } from 'react';
import './search.css'; // Import the CSS file

// Sample data for games (replace with your actual data source)
const games = [
    'The Legend of Zelda',
    'Super Mario Odyssey',
    'Minecraft',
    'Fortnite',
    'League of Legends',
    'Call of Duty',
    'Overwatch',
    'Apex Legends',
];

export default function SearchComp() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setMessage('Please enter a search term.');
            setResults([]);
            return;
        }

        const filteredResults = games.filter(game =>
            game.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setResults(filteredResults);
        setMessage(filteredResults.length === 0 ? 'No Results Found, please try again.' : '');
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
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
            <p>Search for posable results:</p>
            {message && <div className="no-results-message">{message}</div>}
            {results.length > 0 && (
                <ul className="results-list">
                    {results.map((game, index) => (
                        <li key={index} className="result-item">{game}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}