import React, { useState } from 'react';

// Example data (in a real app, this would come from a server)
const commentsData = [
    { id: 1, user: 'User1', comment: 'Great post!' },
    { id: 2, user: 'User2', comment: 'Thanks for sharing!' },
];

export default function BlogComp() {
    const [comments, setComments] = useState(commentsData);
    const [newComment, setNewComment] = useState('');
    const user = { username: 'User3' }; // Replace with actual user state management

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (user && newComment.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                user: user.username,
                comment: newComment,
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    };

    return (
        <div className="blog-post">
            <h1 className='blogTitle'>GamesWorl Blog</h1>
            <p className='blogP'>This is the content section for the blog post's.</p>

            <h2 className='blogTitle'>Comments from the users</h2>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.user}</strong>: {comment.comment}
                    </li>
                ))}
            </ul>

            {user ? (
                <form className="comment-form" onSubmit={handleCommentSubmit}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Leave a comment..."
                        required
                    />
                    <button type="submit">Submit Comment</button>
                </form>
            ) : (
                <p className="logged-out-message">You must be logged in to leave a comment.</p>
            )}
        </div>
    );
}