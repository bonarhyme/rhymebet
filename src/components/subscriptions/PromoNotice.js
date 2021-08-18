import React, { useEffect, useState } from "react";
import { FcInfo } from "react-icons/fc";
import { useSelector } from "react-redux";
import { HashLink } from "react-router-hash-link";

import Message from "../Message";
import AppOffCanvas from "./AppOffCanvas";

const PromoNotice = () => {
  const [active, setActive] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { success, profile } = useSelector((state) => state.userProfile);

  useEffect(() => {
    if (success) {
      const { active } = profile.activePromo;

      setActive(active);
    } else {
      setActive(false);
    }
  }, [success, profile]);

  return (
    <>
      {active && (
        <>
          <Message variant="success" className="relative">
            <FcInfo size={35} color="#3498db" /> You have an active promo which
            gives you access to 1 day{" "}
            <HashLink to="/#premium">premium games.</HashLink>
            <button className="btn btn-info" onClick={handleShow}>
              Find out why!!!
            </button>
          </Message>
        </>
      )}
      <AppOffCanvas handleClose={handleClose} show={show} />
    </>
  );
};

export default PromoNotice;
