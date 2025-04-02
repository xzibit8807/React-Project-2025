import { useState, useContext } from "react";
import { UserContext } from "../../../hooks/context";
import "./profile.css";

export default function ProfileModule() {
    const { email } = useContext(UserContext);
    const [description, setDescription] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match!");
            return;
        }
        setMessage("Password updated successfully!");
        setNewPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="profile-container">
            <section className="admin-section">
                <h2>Hello {email}</h2>
            </section>

            <label>Description:</label>
            <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Write something about yourself..."
            />

            <div className="profile-section">
                <h3>Change Password</h3>
                <form onSubmit={handlePasswordChange}>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Update Password</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}
