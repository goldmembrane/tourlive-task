import React from "react";
import ListContext from "./ListContext";

const List = (props) => {
  return (
    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>평점</td>
        <td>가격</td>
        <td>생성일</td>
      </tr>
      <tr>
        <ListContext />
      </tr>
    </table>
  );
};

export default List;
