import React, { Suspense, lazy } from "react";
import Helmet from "react-helmet";
import MyHeader from "../components/MyHeader";
// import MyHero from "../components/Hero";
// import News from "../components/news/News";

const MyHero = lazy(() => import("../components/Hero"));
const News = lazy(() => import("../components/news/News"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Rhymebet</title>
        <meta name="description" content="Rhymebet Home Page" />
      </Helmet>
      <MyHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <MyHero />
          <News />
        </main>
      </Suspense>
    </>
  );
};

export default Home;
