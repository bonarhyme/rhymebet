import React from "react";
import { FaPlus } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import News from "../components/news/News";

const CreateNews = () => {
  return (
    <main className="container">
      <LinkContainer to="/admin/news/create">
        <button className="mx-2 mt-5 button-block wide-block bg-blue color-white">
          <FaPlus size={30} /> CREATE NEWS
        </button>
      </LinkContainer>
      <News showPaging showButton={false} />
    </main>
  );
};

export default CreateNews;
