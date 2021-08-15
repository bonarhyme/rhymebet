import React, { useEffect, useState } from "react";

import { FcInfo } from "react-icons/fc";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Message from "../Message";

const Notice = ({ subScreen = false, show = true }) => {
  const [active, setActive] = useState(false);

  const { success, serverReply } = useSelector(
    (state) => state.singleSubActiveGet
  );

  useEffect(() => {
    if (success) {
      const { active } = serverReply.activeSub;

      setActive(active);
    } else {
      setActive(false);
    }
  }, [success, serverReply]);

  return (
    <>
      {!active && (
        <Message variant="info">
          <FcInfo size={35} color="#3498db" /> Buy a{" "}
          <Link to="/subscriptions">subscription plan</Link> to access our{" "}
          {subScreen ? (
            <>
              Premium Games List.
              {"  "}
              <HashLink to="/#premium">
                <button className="btn btn-primary">
                  Click Here View Premium Games Snippet Now
                </button>
              </HashLink>
            </>
          ) : (
            <>
              Premium Games.
              {"  "}
              {show && (
                <HashLink to="/#premium">
                  <button className="btn btn-primary">
                    Click Here View Premium Games Snippet Now
                  </button>
                </HashLink>
              )}
            </>
          )}
        </Message>
      )}
    </>
  );
};

export default Notice;
