import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getUserRefs } from "../actions/referralActions";
import { getUserAllSub } from "../actions/subscriptionActions";
import {
  getAdminUsers,
  getRegularUsers,
  getSuperAdminUsers,
} from "../actions/superAdminActions";

const PaginationDashboard = ({
  pages,
  page,
  referral = false,
  regular = false,
  admin = false,
  superAdmin = false,
}) => {
  const dispatch = useDispatch();

  const handlePagination = (e) => {
    if (superAdmin) {
      dispatch(getSuperAdminUsers(e.target.innerText));
    } else {
      if (admin) {
        dispatch(getAdminUsers(e.target.innerText));
      } else {
        if (regular) {
          dispatch(getRegularUsers(e.target.innerText));
        } else {
          if (referral) {
            dispatch(getUserRefs(e.target.innerText));
          } else {
            dispatch(getUserAllSub(e.target.innerText));
          }
        }
      }
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

export default PaginationDashboard;
