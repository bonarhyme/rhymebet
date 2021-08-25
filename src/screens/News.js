import React from "react";
import { Helmet } from "react-helmet";

import FirstNews from "../components/news/News";

const News = () => {
  return (
    <main>
      <Helmet>
        <title>Sportsnews - Rhymebet</title>
        <meta name="description" content="rhymebet sportsnews" />
      </Helmet>
      <FirstNews showPaging showButton={false} />
    </main>
  );
};

export default News;
