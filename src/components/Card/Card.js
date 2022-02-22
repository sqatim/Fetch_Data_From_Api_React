import React from "react";
import { CardStyle, CardPicture } from "./Card.style";

export default function Card({title,url}) {
  return (<CardStyle>
    <h4>{title}</h4>
    <CardPicture url={url}></CardPicture>
    </CardStyle>);
  // return <CardStyle>{title}</CardStyle>;
}
