import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

class Post extends Component {
    render() {
        // about match: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/match.md
        const {match} = this.props;
        return (
            <div>
                {/*pass url param in via variables*/}
                <Query query={POST_QUERY} variables={{id : match.params.id}}>
                    {({data, loading}) => {
                        if (loading) return 'loading...';
                        const {post} = data;
                        return <div><h1 key={post.id}>{post.title}</h1><p>{post.body}</p></div>
                    }}
                </Query>
            </div>
        );
    }
}

const POST_QUERY = gql`
    query post($id: ID!) {
        post(where: {id: $id}) {
            id
            title
            body
        }
    }
`

export default Post;