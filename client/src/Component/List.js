import React from "react";
import ListContext from "./ListContext";

const List = (props) => {
  const lists = props.lists;

  return (
    <table>
      <thead>
        <tr>
          <td>번호</td>
          <td>제목</td>
          <td>평점</td>
          <td>가격</td>
          <td>생성일</td>
        </tr>
      </thead>
      <tbody>
        {lists.map((data, i) => (
          <tr>
            <ListContext key={i} {...data} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
