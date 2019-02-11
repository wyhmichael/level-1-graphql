import React, {Component} from 'react';

class PostForm extends Component {

    render() {
        const {title, body, onSubmit, onChange} = this.props
        return (
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' onChange={onChange} placeholder="title" value={title}/>
                <label htmlFor='body'>Body</label>
                <textarea type='text' name='body' onChange={onChange} placeholder="body" value={body}/>
                <button>Submit</button>
            </form>
        );
    }
}

export default PostForm;