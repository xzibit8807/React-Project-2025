import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../../hooks/context";
import "./profile.css";

export default function ProfileModule() {
    const { email } = useContext(UserContext);

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img
                    src="https://via.placeholder.com/120"
                    alt="User Avatar"
                    className="profile-avatar"
                />
                <h2 className="name-container">Welcome, {email}</h2>
            </div>

            <div className="profile-section">
                <h3 className="section-title">About Me</h3>
                <p className="description">
                    This is your personal space. Add a short description about yourself in the edit section.
                </p>
            </div>

            <div className="profile-actions">
                <Link to="/profile/edit" className="action-btn">
                    Edit Profile
                </Link>
            </div>
        </div>
    );
}
