import axios from "axios";
import { useEffect, useState } from "react";

function User() {
  //create User in mongodb and replace this ID
  const ID = localStorage.getItem("user_id") || "671a82189c31e959d750108f";
  //stores all user Data
  const [userData, setUserData] = useState({name:"", movies:[]});

  const [addtocart, setAddtocart] = useState("")

  function submit(){
    setAddtocart(current => current)
    setUserData({
      ...userData,
      movies: [...userData.movies, addtocart],
    });
    axios
      .put(
        "http://localhost:8000/api/updateUser/" + ID,
        userData
      )
      .then((response) => console.log(response));
  }

  function getUser(){
    axios
      .put("http://localhost:8000/api/getUser/" + ID)
      .then((response) => {
        setUserData(response.data);
        console.log(userData)
      });
  }
  useEffect(()=>{
    getUser()
  }, [])
  return (
    <>
      <h1>User</h1>
      <label>
        Movie ID:
        <input
          type="text"
          value={addtocart}
          onChange={(e) => setAddtocart(curr=>e.target.value)}
        />
        <button onClick={submit}>Add To Cart</button>
      </label>
      {userData.name}
      {userData.movies.map((movie, index) => <li key={index}>{movie}</li>)}
    </>
  );
}

export default User;