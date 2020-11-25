import React, { useState } from "react";
import Input from "./Input";
import Post from "./Post";

let id = 1;

const Home = () => {
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    const updatePost = posts.filter((post) => post.id !== id);
    setPosts(updatePost);
  };

  const addPost = (title) => {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id++;
  };

  return (
    <div className="App">
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default Home;