import React from "react";
import Moviecard from "../Moviecard/Moviecard";

const Movielist = ({ data, deleteMovie }) => {
  return (
    <div>
      {data.map((el) => (
        <Moviecard key={el.id} el={el} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};

export default Movielist;
