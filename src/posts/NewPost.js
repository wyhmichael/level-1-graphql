import React, {Component} from 'react';
import gql from 'graphql-tag';
import PostForm from './PostForm';
import {Mutation} from "react-apollo";

class NewPost extends Component {

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
        createPost().then(() => {
            this.setState({title: '', body: '', message: "Successfully Submitted!"});
        }).catch(e => console.log(e))
    }

    render() {

        return (
            <div>
                <div className="resultMsg">{this.state.message}</div>
                <Mutation mutation={CREATE_POST} variables={{...this.state}}>
                    {createPost => ( // differ from query component, directly referred as simple arrow function, no need to
                        // pull data out of data comes back

                        <PostForm
                            title={this.state.title}
                            body={this.state.body}
                            onSubmit={e => this.handleSubmit(e, createPost)}
                            onChange={this.handleInput}
                        />
                    )}
                </Mutation>
            </div>
        );
    }
}

const CREATE_POST = gql`
    mutation createPost($title: String!, $body: String!) {
        createPost(data: {title: $title, body: $body, status: PUBLISHED}) {
            id
            title
            body
            status
        }
    }
`

export default NewPost;