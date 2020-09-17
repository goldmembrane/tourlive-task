import React from "react";
import SearchBar from "./SearchBar";

const LabelBar = (props) => {
  return (
    <div className="total-list-box">
      <label className="total-list">
        총 {props.total.length}건의 게시물이 조회되었습니다.
      </label>
      <div className="search-bar-box">
        <SearchBar />
      </div>
    </div>
  );
};

export default LabelBar;
