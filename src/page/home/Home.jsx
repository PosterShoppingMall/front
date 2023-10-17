import React from "react";
import MainBn from "./component/MainBn";
import MainBestItem from "./component/MainBestItem";
import AllProductItem from "./component/AllProductItem";
import IllustrationItem from "./component/IllustrationItem";
import FamousPaintItem from "./component/FamousPaintItem";
import PhotoGraphyItem from "./component/PhotoGraphyItem";
import TypoGraphyItem from "./component/TypoGraphyItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [Bestitems, BestsetItems] = useState(null);
  const [Allitems, AllsetItems] = useState(null);
  const [Illustratitems, IllustratsetItems] = useState(null);
  const [FamousPaintitems, FamousPaintsetItems] = useState(null);
  const [PhotoGraphyitems, PhotoGraphysetItems] = useState(null);
  const [TypoGraphyitems, TypoGraphysetItems] = useState(null);

  useEffect(() => {
    // Axios를 사용하여 데이터를 가져옵니다.
    axios
      .get("http://52.78.184.121:8080/369/")
      .then((response) => {
        // API에서 받아온 데이터를 객체에서 배열로 변환
        const data = response.data;

        const bestData = data.best;
        const allData = data.all;
        const illustratData = data.illustration;
        const FamousPaintData = data.painting;
        const PhotoGraphyData = data.photography;
        const TypoGraphyData = data.typography;

        // 변환한 데이터를 상태(state)에 저장
        BestsetItems(bestData);
        AllsetItems(allData);
        IllustratsetItems(illustratData);
        FamousPaintsetItems(FamousPaintData);
        PhotoGraphysetItems(PhotoGraphyData);
        TypoGraphysetItems(TypoGraphyData);

        console.log("매핑된 데이터", data);
      })
      .catch((error) => {
        console.error("데이터를 가져오는데 실패했습니다.", error);
      });
  }, []);

  return (
    <>
      <MainBn />
      <MainBestItem Bestitems={Bestitems} />
      <AllProductItem Allitems={Allitems} />
      <IllustrationItem Illustratitems={Illustratitems} />
      <FamousPaintItem FamousPaintitems={FamousPaintitems} />
      <PhotoGraphyItem PhotoGraphyitems={PhotoGraphyitems} />
      <TypoGraphyItem TypoGraphyitems={TypoGraphyitems} />
    </>
  );
};

export default Home;
