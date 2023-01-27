import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const users = [{
  id: 1,
  name: 'Ryan Ray',
  image: 'https://robohash.org/user 1'
},
{
  id: 2,
  name: 'Joe Wan',
  image: 'https://robohash.org/user 2'
}]

root.render(
  <>
    {users.map((user, index) => {
      return <h1 key={index}>{user.name}</h1>
    })}
  </>
);
