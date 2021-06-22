import React from "react";
import MyHeader from "../components/MyHeader";
import MyHero from "../components/Hero";
import News from "../components/news/News";

const Home = () => {
  return (
    <>
      <MyHeader />
      <main>
        <MyHero />
        <News />
      </main>
    </>
  );
};

export default Home;
