import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as MoreIcon } from "../../../assets/icons/more.svg";

import "./Pagination.scss";

type PaginationProps = {
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const { pathname, search } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchPagination = search.match(/(\d+)(?!.*\d)/);
    if (searchPagination !== null) {
      setCurrentPage(+searchPagination[0]);
    }
  }, [pathname, search]);

  const buttonClassNames = (id: number) =>
    `btn pagination-link ${
      currentPage === id ? " pagination-link-active" : ""
    } `;

  const buttons = Array.from(Array(totalPages).keys()).map((index) => {
    return (
      <Link
        to={`${pathname}?p=${index + 1}`}
        className={buttonClassNames(index + 1)}
        key={index}
      >
        {index + 1}
      </Link>
    );
  });

  const addDotToPagination = () => {
    if (buttons.length < 9) {
      return buttons;
    }

    const end = buttons.length - 1;
    const sliceStart =
      currentPage <= 2 ? 1 : currentPage + 3 > end ? end - 4 : currentPage - 2;
    const sliceEnd = currentPage + 2 >= end ? end : currentPage + 2;

    const slicededButtons = [
      buttons[0],
      currentPage > 3 && (
        <span className="pagination-dot" key={sliceStart}>
          <MoreIcon />
        </span>
      ),
      buttons.slice(sliceStart, sliceEnd),
      currentPage < buttons.length - 3 && (
        <span className="pagination-dot" key={sliceEnd}>
          <MoreIcon />
        </span>
      ),
      buttons[end],
    ];

    return slicededButtons;
  };

  return <div className="pagination">{addDotToPagination()}</div>;
};

export default Pagination;
