import './App.css';
import React, { useState, useEffect } from 'react';
import { UserCard } from "./UserCard";
import { PostCard } from './PostCard';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <PostCard url="https://gorest.co.in/public-api/posts?page="/>
      <UserCard url="https://gorest.co.in/public-api/users?page="/>)
      </header>
    </div>
  );
}

export default App;
