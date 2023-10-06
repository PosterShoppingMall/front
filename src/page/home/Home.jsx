import React from "react";
import MainBn from "./component/MainBn";
import MainBestItem from "./component/MainBestItem";
import AllProductItem from "./component/AllProductItem";
import IllustrationItem from "./component/IllustrationItem";
import FamousPaintItem from "./component/FamousPaintItem";
import PhotoGraphyItem from "./component/PhotoGraphyItem";
import TypoGraphyItem from "./component/TypoGraphyItem";

const Home = () => {
  return (
    <>
      <MainBn />
      <MainBestItem />
      <AllProductItem />
      <IllustrationItem />
      <FamousPaintItem />
      <PhotoGraphyItem />
      <TypoGraphyItem />
    </>
  );
};

export default Home;
