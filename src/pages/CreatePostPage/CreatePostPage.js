import React from 'react';
import './CreatePostPage.css';

function CreatePostPage(props) {
  return (
    <div className="create-post-page">
      <form> 
        <label>
          UserId
          <input type="number" />
        </label>
        <label>
          Title
          <input type="text" />
        </label>
        <label>
          Body
          <input type="number" />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>    
  );
}

export default CreatePostPage;
