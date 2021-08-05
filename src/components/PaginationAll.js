import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllSub } from "../actions/subscriptionActions";

const PaginateAll = ({ pages, page }) => {
  const dispatch = useDispatch();

  const handlePagination = (e) => {
    dispatch(getAllSub(e.target.innerText));
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

export default PaginateAll;
