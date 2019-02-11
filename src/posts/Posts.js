import React, {Component} from 'react';
import {Query} from "react-apollo";
import {Link} from "react-router-dom";
import gql from "graphql-tag";

class Posts extends Component {
    render() {
        return (
            <div className="postList">
                <ul>
                    <Query query={POST_QUERY}>
                        {({loading, data}) => {
                            if (loading) return 'loading...';
                            const {posts} = data;
                            return posts.map(post => (
                                <li key={post.id}>
                                    <Link to={`/post/${post.id}`}>
                                        <h1 key={post.id}>{post.title}</h1>
                                    </Link>
                                </li>
                            ));
                        }}
                    </Query>
                </ul>
            </div>
        );
    }
}

const POST_QUERY = gql`
    query getAllPosts{
        posts {
            id
            title
            body
            createdAt
        }
    }
`

export default Posts;