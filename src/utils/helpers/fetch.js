import axios from "axios";
import { useState } from "react";

export const anime = (currentPage) => {
  return axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}`);
};
export const animeAll = () => {
  return axios.get(`https://api.jikan.moe/v4/anime`);
};
export const SelectedCards = async (currentPage) => {
  let data;
  const requestPage = (((currentPage * 3) / 25) | 0) + 1;
  console.log("requestPage ==> " + requestPage);
  const firstCard = currentPage * 3;
  console.log("first card ==> " + firstCard);
  const endOfPage = 25 * requestPage;
  console.log("fendOfPage ==> " + endOfPage);
  let i = 0;
  let tmp = [];
  const va = await anime(requestPage).then((response) => {
    console.log("----------------");
    console.log(response);
    console.log("----------------");
    data = response;
  });
  console.log(data);
  for (i = 0; i < 3 && firstCard + i < endOfPage; i++) {
    tmp[i] = data.data.data[firstCard + i];
    // console.log(tmp[i])
  }
  if (i < 3) {
    console.log("dkhalt");
    const va = await anime(requestPage + 1).then((response) => {
      console.log(response);
      data = response;
    });
    // setTimeout(() => {
    for (let j = 0; i < 3; i++, j++) {
      console.log("mara");
      tmp[i] = data.data.data[j];
    }
    // }, 3000);
  }
  console.log("tmp => ", tmp);
  return tmp;
};
