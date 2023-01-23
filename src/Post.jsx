import React from "react";

const handlerOnClick = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const Post = () => {
  return <button onClick={handlerOnClick}>Recuperar datos</button>;
};

export default Post;
