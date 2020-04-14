import React from 'react';

import cupcakes from './assets/cupcakes.jpeg';
import doctor from './assets/doctor.jpeg';
import elf from './assets/elf.jpeg';

import BlogCard from './components/BlogCard/BlogCard';
import BlogPost from './components/BlogPost/BlogPost';

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
          id: posts[10].id,
          author: authors[1],
          title: posts[10].title.substring(0, 12),
          body: posts[10].body.substring(0, 100) + '...',
          src: cupcakes,
          category: 'Literature',
        },
        {
          id: posts[20].id,
          author: authors[2],
          title: posts[20].title.substring(0, 5),
          body: posts[20].body.substring(0, 100) + '...',
          src: elf,
          category: 'Health',
        },
      ]
    });
  };

  handleLoadPost = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => this.setState({ post: this.formatPost(post) }))
      .catch(console.error);
  };

  formatPost = post => {
    return {
      title: post.title.substring(0, Math.floor(Math.random() * 10 + 10)),
      author: authors[post.userId - 1],
      category: 'Fitness',
      date: 'October 27, 2012',
      authorImg: 'https://randomuser.me/api/portraits/men/42.jpg',
      postImg: doctor,
    };
  };

  render() {

    const posts = this.state.posts.map(post => (
      <BlogCard key={post.id} {...post} onClick={() => this.handleLoadPost(post.id)} />
    ));
    
    return (
      <main className="app">
        <div className="app__blog-card-container">
          { posts.length ? posts : null }
        </div>
        <div className="app__blog-post-container">
          { this.state.post ? <BlogPost {...this.state.post} /> : null }
        </div>
      </main>
    );  
  }
  
}

export default App;
