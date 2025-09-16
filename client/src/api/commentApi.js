import axios from "axios";

const API_URL = `${import.meta.env.VITE_APP_SERVER_URL}/comments`; 

export async function getComments() {
    try {
        const res = await axios.get(API_URL, {
            headers: { "Content-Type": "application/json" },
        });
        return res.data;
    } catch (err) {
        console.error("Error fetching comments:", err);
        throw err;
    }
}

export async function addComment(commentData) {
    try {
        const token = localStorage.getItem("token");

        const res = await axios.post(API_URL, commentData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (err) {
        console.error("Error adding comment:", err);
        throw err;
    }
}
