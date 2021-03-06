import React, {Component} from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Post from './posts/Post'
import Posts from './posts/Posts'
import './App.css';
import NewPost from "./posts/NewPost";

const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjricnlbfbesf01ht5rum6fhb/master"
})

// client.query({
//     query: testQuery
// }).then(res => console.log(res))

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div className="App">
                        <header className="App-header">
                            <Link to={"/"}>
                                <img src={logo} className="App-logo" alt="logo"/>
                            </Link>
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>

                        <Link to={"/post/new"}>New Post!</Link>

                        <Switch>
                            <Route exact path="/" component={Posts}/>
                            <Route exact path="/post/new" component={NewPost}/>
                            <Route path="/post/:id" component={Post}/>
                        </Switch>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
