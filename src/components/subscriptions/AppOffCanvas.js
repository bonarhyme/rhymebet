import React from "react";
import { FaTimes } from "react-icons/fa";

const AppOffCanvas = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <aside onClick={handleClose} className="aside">
          <p>
            You have an active promo because over 10 people have used your
            referral link. Enjoy!!! You have access to our premium games for a
            day.
          </p>
          <button className="btn btn-outline-danger mt-4 shift-right">
            <FaTimes />
          </button>
        </aside>
      )}
    </>
  );
};

export default AppOffCanvas;
