
import "./addGame.css";

import { useNavigate } from "react-router";
import { actionCreateGame } from "../../api/gamesApi";

export default function AddGameComponent() {
    const navigate = useNavigate();
    const { create: createGame } = actionCreateGame();

    const newSubmit = async (formData) => {
        const newGame = Object.fromEntries(formData.entries());
    
        try {
            await createGame(newGame);
            navigate('/products');
        } catch (error) {
            console.error('Failed to create game:', error);
            alert('You must be logged in to add a game.');
        }
    }
    
    return (
        <section>
            <form id="create" action={newSubmit}>
                <div className="add-game-container">
                    <h1 className="firstLine">Welcome to the Add Game Page</h1>

                    <label className="label" htmlFor="title">Game Title (Name)</label>
                    <input type="text" id="title" name="title" className="input" placeholder="Game Title" />

                    <label className="label" htmlFor="imageUrl">Image URL</label>
                    <input type="text" id="imageUrl" name="imageUrl" className="input" placeholder="URL from the Game Image...https://..." />

                    <label className="label" htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" className="input" placeholder="$00.00" />

                    <label className="label" htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" className="input" placeholder="Action/Arcade/Strategy/FPS" />

                    <label className="label" htmlFor="description">Description</label>
                    <textarea id="description" name="description" className="textarea" placeholder="Write a short description..." />

                    <button className="submit-button" type="submit">Add Game</button>
                </div>
            </form>
        </section>
    );
}
