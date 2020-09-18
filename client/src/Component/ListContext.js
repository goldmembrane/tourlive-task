import React from "react";
import "../css/ListContext.css";

const ListContext = (props) => {
  return (
    <>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.rate}</td>
      <td>{props.price}</td>
      <td>{props.created_at}</td>
    </>
  );
};

export default ListContext;
