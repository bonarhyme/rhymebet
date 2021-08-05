import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getFreeGamesList, getPremiumGamesList } from "../actions/gamesActions";

const Paginate = ({ isFree, creator, pages, page }) => {
  const dispatch = useDispatch();

  const handlePagination = (e) => {
    if (isFree) {
      dispatch(getFreeGamesList(isFree, creator, e.target.innerText));
    } else {
      dispatch(getPremiumGamesList(isFree, creator, e.target.innerText));
    }
  };

  return (
    <div
      style={{
        width: "270px",
        overflowX: pages <= 8 ? "hidden" : "scroll",
      }}
      className="mx-auto my-4"
    >
      <div style={{ display: "inline-flex", height: "40px" }} className="mb-2">
        {pages > 1 && (
          <Pagination>
            {[...Array(pages).keys()].map((x) => {
              return (
                <Pagination.Item
                  key={x + 1}
                  active={x + 1 === page}
                  onClick={(e) => handlePagination(e)}
                >
                  {x + 1}
                </Pagination.Item>
              );
            })}
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Paginate;
