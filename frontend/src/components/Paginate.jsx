import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from 'react'

// TODO: fix pagination so only pages returning keyword are shown, if user enters a keyword

const Paginate = ({ pages, page, keyword = '' }) => {
  const pageNumbersToShow = 3;
  let startPage, endPage;

  if (pages <= pageNumbersToShow) {
    startPage = 1;
    endPage = pages;
  } else {
    const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1;
    if (page <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = pageNumbersToShow;
    } else if (page + maxPagesAfterCurrentPage >= pages) {
      startPage = pages - pageNumbersToShow + 1;
      endPage = pages;
    } else {
      startPage = page - maxPagesBeforeCurrentPage;
      endPage = page + maxPagesAfterCurrentPage;
    }
  }

  return (
    pages > 1 && (
      <Pagination>
        <LinkContainer to={`/page/1`}>
          <Pagination.First disabled={page === 1} />
        </LinkContainer>
        <LinkContainer to={`/page/${page - 1}`}>
          <Pagination.Prev disabled={page === 1} />
        </LinkContainer>
        {startPage > 1 && <Pagination.Ellipsis disabled />}
        {[...Array((endPage + 1) - startPage).keys()].map(x => (
          <LinkContainer key={x + startPage} to={ keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + startPage}`}>
            <Pagination.Item active={x + startPage === page}>
              {x + startPage}
            </Pagination.Item>
          </LinkContainer>
        ))}
        {endPage < pages && <Pagination.Ellipsis disabled />}
        <LinkContainer to={`/page/${page + 1}`}>
          <Pagination.Next disabled={page === pages} />
        </LinkContainer>
        <LinkContainer to={`/page/${pages}`}>
          <Pagination.Last disabled={page === pages} />
        </LinkContainer>
      </Pagination>
    )
  )
}

export default Paginate;
