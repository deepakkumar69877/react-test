import React, { useState, useEffect } from 'react';
import {Card} from './Card';
export const UserCard = (props)=>{
    const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1)
  useEffect(() => {
    getUsersFromApiAsync();
  },[])
const getUsersFromApiAsync = async () => {
  let result = await fetch(props.url+page);
  result.json().then((responseJson) => {
      console.log('responseJson: ', responseJson);
      setUsers([...users, ...responseJson.data]);
      setPage(responseJson.meta.pagination.page+1);
  })
  .catch((error) => {
    console.error(error);
  });
}
    return (
        <div>
            <h3 className="headerDesign">User Card</h3>
        <div className="userCard">
        {users.map((item,index) => <Card key={index} user={item}/>)}
        </div>
        <div className="centerAlingment">
        <button className="btnAlignment" onClick={getUsersFromApiAsync}>Load More</button>
        </div>
        </div>
        
    )
}
