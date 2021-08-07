import React, { useEffect, useState } from "react";

import { FcInfo } from "react-icons/fc";
import { useSelector } from "react-redux";
import Message from "../Message";

const Notice = () => {
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
          <FcInfo size={35} color="#3498db" /> Buy a subscription plan to access
          our premium games.
        </Message>
      )}
    </>
  );
};

export default Notice;
