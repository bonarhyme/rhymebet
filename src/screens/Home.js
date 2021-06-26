import React from "react";
import Helmet from "react-helmet";
import MyHeader from "../components/MyHeader";
import MyHero from "../components/Hero";
import News from "../components/news/News";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Rhymebet</title>
        <meta name="description" content="Rhymebet Home Page" />
      </Helmet>
      <MyHeader />
      <main>
        <MyHero />
        <News />
      </main>
    </>
  );
};

export default Home;
