import React, { useState, useEffect, useContext } from "react";
import { getComments, addComment } from "../../api/commentApi";
import { UserContext } from "../../hooks/context";

export default function BlogComp() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function fetchComments() {
            try {
                const data = await getComments();
                setComments(data);
            } catch (err) {
                console.error("Error loading comments:", err);
            }
        }
        fetchComments();
    }, []);

    const { email, _id, accessToken } = useUserContext();

    const handleCommentSubmit = async () => {
        if (!email) {
            console.error("❌ No user in context");
            return;
        }

        await commentApi.addComment({
            blogId,
            text: newComment,
            authorEmail: email,
        });
    };




    return (
        <div className="blog-post">
            <h1 className="blogTitle">GamesWorld Blog</h1>
            <p className="blogP">This is the content section for the blog post's.</p>

            <h2 className="blogTitle">Comments from the users</h2>
            <p className="blogP">Here you can write comments for the web page or your experience.</p>

            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment._id}>
                        <strong>{comment.user}</strong>: {comment.comment}
                    </li>
                ))}
            </ul>

            <form className="comment-form" onSubmit={handleCommentSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Leave a comment..."
                    required
                />
                <button type="submit">Submit Comment</button>
            </form>

        </div>
    );
}
