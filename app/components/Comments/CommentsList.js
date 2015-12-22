import React from 'react'

const CommentsList = ({comments}) => {
    return (
        <ul className="list-group">
            {comments.map((comment, index) => (
                <li className="list-group-item" key={index}>{comment}</li>
            ))}
        </ul>
    )
}

export default CommentsList
