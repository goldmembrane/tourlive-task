import React from "react";
import SearchBar from "./SearchBar";
import "../css/LabelBar.css";

const LabelBar = (props) => {
  return (
    <div className="total-list-box">
      <label className="total-list">
        총 {props.total.length}건의 게시물이 조회되었습니다.
      </label>
      <SearchBar search={props.search} />
    </div>
  );
};

export default LabelBar;
