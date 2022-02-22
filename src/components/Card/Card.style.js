import styled from "styled-components";

export const CardStyle = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: white;

  /* gap: 5%; */
  h4 {
    margin: 0;
    background-color: red;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CardPicture = styled.div`
  background-image: url(${(props) => props.url});
  /* background-color: yellow; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: blue; */
  width: 100%;
  height: 90%;
`;
