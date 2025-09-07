import { useState, useContext } from "react";
import { UserContext } from "./../../../../hooks/context";
import { Link } from "react-router";
import "./editProfile.css";

export default function EditProfile() {
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
            setMessage("❌ Passwords do not match!");
            return;
        }
        setMessage("✅ Password updated successfully!");
        setNewPassword("");
        setConfirmPassword("");
    };

    return (
        <div className="profile-container">
                <Link to="/profile" type="Link" className="back-btn">...Back</Link>
            <div className="profile-header">
                <img
                    src="https://via.placeholder.com/120"
                    alt="User Avatar"
                    className="profile-avatar"
                />
                <h2>Edit Profile</h2>
                <p className="profile-email">{email}</p>
            </div>

            <div className="profile-section">
                <h3 className="section-title">Update Description</h3>
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Write something about yourself..."
                />
                <Link type="Link" className="action-btn">
                    Save Description
                </Link>
            </div>

            <div className="profile-section">
                <h3 className="section-title">Change Password</h3>
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
                    <Link type="submit" className="action-btn">
                        Update Password
                    </Link>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}
