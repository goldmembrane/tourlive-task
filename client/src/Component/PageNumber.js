import React from "react";
import _ from "lodash";

const PageNumber = (props) => {
  const { list, pageSize, change } = props;
  const pageCount = Math.ceil(list.length / pageSize);

  if (pageCount === 1) {
    return null;
  }

  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page} style={{ cursor: "pointer" }}>
            <a onClick={() => change(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNumber;
