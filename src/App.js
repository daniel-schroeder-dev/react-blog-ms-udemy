import React from 'react';
import { Switch, Route } from 'react-router-dom';

import cupcakes from './assets/cupcakes.jpeg';
import doctor from './assets/doctor.jpeg';
import elf from './assets/elf.jpeg';

import BlogSubLayout from './layouts/BlogSubLayout/BlogSubLayout'

import HomePage from './pages/HomePage/HomePage';

import NavBar from './components/NavBar/NavBar';

import './App.css';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
// eslint-disable-next-line
const imgAPIURL = 'https://source.unsplash.com/random/800x600';

const authors = [
  'Ada Lovelace',
  'Grace Hopper',
  'Leslie Knope',
];


class App extends React.Component {

  state = {
    posts: [],
    post: null,
  };

  componentDidMount() {
    fetch(postsUrl)
      .then(response => response.json())
      .then(posts => this.setupPosts(posts))
      .catch(console.error);
  }

  setupPosts = posts => {
    this.setState({ posts:
      [
        {
          id: posts[0].id,
          author: authors[0],
          title: posts[0].title.substring(0, 8),
          body: posts[0].body.substring(0, 100) + '...',
          src: doctor,
          category: 'Science',
        },
        {
          id: posts[1].id,
          author: authors[1],
          title: posts[1].title.substring(0, 12),
          body: posts[1].body.substring(0, 100) + '...',
          src: cupcakes,
          category: 'Literature',
        },
        {
          id: posts[2].id,
          author: authors[2],
          title: posts[2].title.substring(0, 5),
          body: posts[2].body.substring(0, 100) + '...',
          src: elf,
          category: 'Health',
        },
      ]
    });
  };

  render() {

    return (
      <main className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/posts">
            <BlogSubLayout 
              posts={this.state.posts} 
              post={this.state.post} 
              handleLoadPost={this.handleLoadPost}
              />
          </Route>
        </Switch>
      </main>
    );  
  }
  
}

export default App;
