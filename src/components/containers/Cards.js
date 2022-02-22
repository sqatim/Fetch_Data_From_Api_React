import React, { useEffect, useState } from "react";
import { CardsStyle } from "./Cards.style";
import Card from "../Card/Card";
import ReactPaginate from "react-paginate";
import { anime, animeAll, SelectedCards } from "../../utils/helpers/fetch";

export default function Cards() {
  const [cards, setCards] = useState([]);
  const arr = [1, 2, 3];
  // setData(va);
  useEffect(() => {
    animeAll().then((data) => console.log(data));
    const samir = async () => {
      const sasa = await SelectedCards(0);
      console.log(sasa);
      setCards(sasa);
    };
    samir();
  }, []);
  const handlePageClick = async (currentPage) => {
    // console.log("amine sba3");
    console.log(currentPage.selected);
    const tmp = await SelectedCards(currentPage.selected);
    setCards(tmp);
    console.log(tmp);
  };
  return (
    <CardsStyle className="car">
      {cards.map((element, i) => (
        <Card title={element.title} url={element.images.jpg.image_url} key={i} />
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={10}
        onPageChange={handlePageClick}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination "}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </CardsStyle>
  );
}
