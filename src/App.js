import "./App.css";
import React, { useState } from "react";
import Navbars from "./Navbars";
import Input from "./Input";
import Post from "./Post";

let id = 1;

const App = () => {
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
      <Navbars />
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

export default App;
