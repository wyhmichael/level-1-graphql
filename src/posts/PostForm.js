import React, {Component} from 'react';

class PostForm extends Component {
    state = {
        title: '',
        body: '',
        message: ''
    }

    handleInput = e => {
        const formData = {};
        formData[e.target.name] = e.target.value;
        formData['message'] = '';
        this.setState({...formData});
    }

    handleSubmit = (e, createPost) => {
        e.preventDefault(); // prevent submit from refreshing page
        createPost({variables: {...this.state}}).then(() => {
            this.setState({title: '', body: '', message: "Successfully Submitted!"});
        }).catch(e => console.log(e))
    }

    render() {
        const {title, body} = this.state
        const {onSubmit} = this.props;
        return (
            <div>
                <div className="resultMsg">{this.state.message}</div>
                <h1 className="formTitle">New Post Form</h1>
                <form onSubmit={e => this.handleSubmit(e, onSubmit)}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' onChange={this.handleInput} placeholder="title" value={title}/>
                    <label htmlFor='body'>Body</label>
                    <textarea type='text' name='body' onChange={this.handleInput} placeholder="body" value={body}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;