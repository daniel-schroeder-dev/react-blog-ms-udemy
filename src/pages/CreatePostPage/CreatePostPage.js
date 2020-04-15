import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './CreatePostPage.css';

function CreatePostPage(props) {

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [post, setPost] = useState({});

  const handleFormSubmit = e => {
    e.preventDefault();
    fetch('https://ds-jsonplaceholder-api.herokuapp.com/posts/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, title, body }),
    })
      .then(response => response.json())
      .then(post => {
        setUserId('');
        setTitle('');
        setBody('');
        setPost(post);
      })
      .catch(console.error);
  };

  if (post._id) return <Redirect to={`/posts/${post._id}`} />;

  return (
    <div className="create-post-page">
      <form onSubmit={handleFormSubmit} > 
        <label htmlFor="userId">
          UserId
          <input 
            type="number"
            name="userId" 
            id="userId"  
            value={userId}
            onChange={e => setUserId(e.target.value)}
            />
        </label>
        <label htmlFor="title">
          Title
          <input 
            type="text" 
            name="title" 
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="body">
          Body
          <input 
            type="text" 
            name="body" 
            id="body"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>    
  );
}

export default CreatePostPage;
