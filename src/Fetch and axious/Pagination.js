/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({ edits, itemsperpages, paginatings }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(edits / itemsperpages); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => (
        <li key={page}>
          <a onClick={() => paginatings(page)} href="#">
            {page}
          </a>
        </li>
      ))}
    </div>
  );
};
export default Pagination;
