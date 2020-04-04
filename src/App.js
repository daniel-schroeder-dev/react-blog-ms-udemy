import React from 'react';

import cupcakes from './assets/cupcakes.jpeg';
import doctor from './assets/doctor.jpeg';
import elf from './assets/elf.jpeg';

import BlogCard from './components/BlogCard/BlogCard';

import './App.css';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

const authors = [
  'Bob Worth',
  'Daniel Schroeder',
  'Ted Long',
];

class App extends React.Component {

  state = {
    posts: [],
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
        },
        {
          id: posts[10].id,
          author: authors[1],
          title: posts[10].title.substring(0, 12),
          body: posts[10].body.substring(0, 100) + '...',
          src: cupcakes,
        },
        {
          id: posts[20].id,
          author: authors[2],
          title: posts[20].title.substring(0, 5),
          body: posts[20].body.substring(0, 100) + '...',
          src: elf,
        },
      ]
    });
  };

  render() {

    const posts = this.state.posts.map(post => (
      <BlogCard key={post.id} {...post} />
    ));
    
    return (
      <main className="app">
        <div className="app__blog-card-container">
          { posts.length ? posts : null }
        </div>
      </main>
    );  
  }
  
}

export default App;
