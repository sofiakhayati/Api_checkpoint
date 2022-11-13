import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios"
function UserListt() {
    const [data, setData] = useState();
    const [error, setError] = useState(null)
  const Data = async () => {
  axios(
      "https://jsonplaceholder.typicode.com/users"
    )
    .then((response) => setData(response.data))
    .catch((error) => setError(error));
  };
  useEffect(() => {
    Data();
    if (error) return "there is an error"
  }, []);


  return (
    <div className="UserList">
      {data &&
        data.map((elt) => (
          <div className="everyuser">
            Id:{elt.id} 
            <div className="title">
              Title:{elt.name}
            </div>
            <div>
               UserName:{elt.username}
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserListt