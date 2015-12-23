import React from 'react'

class AddComment extends React.Component {
    setRef(ref) {
        this.comment = ref
    }

    handleSubmit() {
        var newComment = this.comment.value
        if (newComment != null && newComment != '' && newComment != ' ')
        {
            this.comment.value = ''
            this.props.addComment(newComment)
        }
    }

    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add New Comment" ref={(ref) => this.setRef(ref)} />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={() => this.handleSubmit()}>Submit</button>
                </span>
            </div>
        )
    }
}

AddComment.propTypes = {
    productName: React.PropTypes.string.isRequired,
    addComment: React.PropTypes.func.isRequired
}

export default AddComment
