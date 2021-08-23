import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Question = ({ id, title, info }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article key={id} className="article">
      <div>
        <h4
          className="discover-paragraph h4"
          onClick={() => setReadMore(!readMore)}
          style={{ color: readMore ? "#3498db" : "black" }}
        >
          {title}
        </h4>
        {readMore ? (
          <FaChevronUp
            color="#3498db"
            size={30}
            onClick={() => setReadMore(!readMore)}
          />
        ) : (
          <FaChevronDown size={30} onClick={() => setReadMore(!readMore)} />
        )}
      </div>
      <div>
        <p className="discover-paragraph">{readMore && info}</p>
      </div>
    </article>
  );
};

export default Question;
