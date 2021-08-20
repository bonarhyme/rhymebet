import React from "react";

import FirstNews from "../components/news/News";

const News = () => {
  return (
    <main>
      <FirstNews showPaging showButton={false} />
    </main>
  );
};

export default News;
