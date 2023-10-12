import React, { useEffect, useState } from "react";
import MainBn from "./component/MainBn";
import MainBestItem from "./component/MainBestItem";
import AllProductItem from "./component/AllProductItem";
import IllustrationItem from "./component/IllustrationItem";
import FamousPaintItem from "./component/FamousPaintItem";
import PhotoGraphyItem from "./component/PhotoGraphyItem";
import TypoGraphyItem from "./component/TypoGraphyItem";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("http://52.78.184.121:8080/369/").then((r) => console.log(r));
  }, []);
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
