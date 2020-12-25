

import React, { useState, useEffect } from 'react';
import {Card} from './Card';
export const PostCard = (props)=>{
    const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    getPostFromApiAsync();
  },[])
const getPostFromApiAsync = async () => {
  let result = await fetch(props.url+page);
  result.json().then((responseJson) => {
      console.log('responseJson: ', responseJson);
    setPosts([...posts, ...responseJson.data]);
    setPage(responseJson.meta.pagination.page+1);
  })
  .catch((error) => {
    console.error(error);
  });
}
    return (
        <div>
            <h3 className="headerDesign">Posts Card</h3>
        <div className="userCard">
        {posts.map((item, index) => (
        <div key={index} className="card">
            <h4>{item.title}</h4>
            <p className="noPadding"> {item.body} </p>
        </div>
        ))}
        </div>
        <div className="centerAlingment">
        <button className="btnAlignment" onClick={getPostFromApiAsync}>Load More</button>
        </div>
        </div>
        
    )
}
