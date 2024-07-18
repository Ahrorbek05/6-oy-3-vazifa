import React, { useState } from 'react';
import './index.css';

function Post() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className='post'>
      <h2>Social Media Post </h2>
      <p>Like, Dislike.</p>
      <div className='buttons'>
        <button onClick={handleLike}>Like {likes}</button>
        <button onClick={handleDislike}>Dislike {dislikes}</button>
      </div>
    </div>
  );
}

export default Post;
