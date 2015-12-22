import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const Comments = ({productName, comments, addComment}) => {
    return (
        <div>
            <h3>Comments for {productName}</h3>
            <AddComment productName={productName} addComment={addComment}/>
            <CommentsList comments={comments}/>
        </div>
    )
}

Comments.propTypes = {
    productName: React.PropTypes.string.isRequired,
    comments: React.PropTypes.array.isRequired,
    addComment: React.PropTypes.func.isRequired
}

export default Comments
