import React, {Component} from 'react';
import gql from 'graphql-tag';
import PostForm from './PostForm';
import {Mutation} from "react-apollo";

class NewPost extends Component {

    render() {
        return (
            <Mutation mutation={CREATE_POST}>
                {createPost => ( // differ from query component, directly referred as simple arrow function, no need to
                    // pull data out of data comes back

                    <PostForm onSubmit={createPost}/>
                )}
            </Mutation>
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