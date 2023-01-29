import React from "react";
import { VscBug } from "react-icons/vsc";

const handlerOnClick = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const Post = () => {
  return (
    <button onClick={handlerOnClick}>
      {" "}
      <VscBug /> Recuperar datos
    </button>
  );
};

export default Post;
