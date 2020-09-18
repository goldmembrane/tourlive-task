import React from "react";
import ListContext from "./ListContext";
import PageNumber from "./PageNumber";
import { paginate } from "./Paginate";

const List = (props) => {
  const lists = props.lists;
  const tourLists = paginate(lists, props.current, props.size);

  return (
    <>
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
          {tourLists.map((data, i) => (
            <tr>
              <ListContext key={i} {...data} />
            </tr>
          ))}
        </tbody>
      </table>

      <PageNumber
        list={props.lists}
        pageSize={props.size}
        change={props.change}
      />
    </>
  );
};

export default List;
