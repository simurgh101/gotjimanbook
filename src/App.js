import './App.css';
import React, { useState } from 'react'
import Navbars from './Navbars';
import Input from './Input';

let id = 1;

const  App = () =>  {
  const [posts, setPosts] = useState([])

  const addPost = (title) => {
    const newPost = {id,title}
    setPosts([newPost,...posts])
    id++
  }  

  return (
    <div className="App">
      <Navbars/>
      <Input addPost = {addPost}/>
    </div>
  );
}

export default App;
