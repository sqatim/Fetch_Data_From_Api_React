import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { CardStyle } from "./Card.style";
import { CardGrid } from "./Card.style";

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
        .then((info) => {
          console.log(info.data.data);
          setData(info.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <CardStyle>
      {data.map((element, i) => {
        return (
          <CardGrid picture={element.anime_img} key={i}>
            <h2>{element.anime_name}</h2>
            <div className="image"></div>
          </CardGrid>
        );
      })}
    </CardStyle>
  );
}
