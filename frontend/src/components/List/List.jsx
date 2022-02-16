
import React, { useState, useEffect } from "react";

const List = () => {
  const [hasError, setErrors] = useState(false);
  const [rests, setRests] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/rests");
      res
        .json()
        .then(res => setRests(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });
  return (<div>
    <table>
      <tr><h1>{rests[0].RestaurantName}</h1></tr>
      <tr><h1>{rests[1].RestaurantName}</h1></tr>
      <tr><h1>{rests[2].RestaurantName}</h1></tr>
      <tr><h1>{rests[3].RestaurantName}</h1></tr>
      <tr><h1>{rests[4].RestaurantName}</h1></tr>
      <tr><h1>{rests[5].RestaurantName}</h1></tr>
      <tr><h1>{rests[6].RestaurantName}</h1></tr>
      <tr><h1>{rests[7].RestaurantName}</h1></tr> 
     </table>
     </div>
  );    
};
export default List;
