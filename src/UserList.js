import React, { useEffect, useState } from "react";
import './UserList.css'
function UserList() {
  const [user, setUser] = useState();
  const [error, setError] = useState(null)
  const Data = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
    .then((response) => response.json())
    .catch((error) => setError(error));
    // update the state
    setUser(response);
  };
  useEffect(() => {
    Data();
    if (error) return "there is an error"
  }, []);
  return (
    <div className="UserList">
      {user &&
        user.map((elt) => (
          <div className="everyuser">
            Id:{elt.id} 
            <div className="title">
              <p> Title:  {elt.name} </p>
            </div>
            <div>
               <p>UserName:  {elt.username}</p>
            </div>
            <div>
              <p>Email:  {elt.email}</p>
            </div>
            <div>
              <p>Adress:  {elt.address.street}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserList;
