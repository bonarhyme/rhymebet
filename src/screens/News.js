import React from "react";
import { FaPlus } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const CreateNews = () => {
  return (
    <main className="container">
      <LinkContainer to="/admin/news/create">
        <button className="mx-2 mt-5 button-block wide-block bg-blue color-white">
          <FaPlus size={30} /> CREATE NEW GAMES
        </button>
      </LinkContainer>
    </main>
  );
};

export default CreateNews;
