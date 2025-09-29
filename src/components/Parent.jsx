import React, { useState } from 'react';
import Display from './Display';
import Form from './Post';

export default function Parent() {
  const [posts, setPosts] = useState([]);

  const addPost = (data) => {
    setPosts([...posts, data]);
  };

  return (
    <>
      <Form addPost={addPost} />

      <div className="container">
        {posts.map((post, index) => (
          <Display key={index}  title={post.title}  description={post.description} count={post.count} />
        ))}
      </div>
    </>
  );
}
