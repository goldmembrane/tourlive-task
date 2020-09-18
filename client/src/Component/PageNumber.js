import React from "react";
import _ from "lodash";
import "../css/PageNumber.css";

const PageNumber = (props) => {
  const { list, pageSize, change, current } = props;
  const pageCount = Math.ceil(list.length / pageSize);

  if (pageCount === 1) {
    return null;
  }

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === current ? "page-number-li-activate" : "page-number-li"
            }
            style={{ cursor: "pointer" }}
          >
            <a className="page-nember" onClick={() => change(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNumber;
