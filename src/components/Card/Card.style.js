import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5%
`;

export const CardGrid = styled.div`
  width: 400px;
  height: 500px;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 10%;
    width: 100%;
  }
  .image {
    margin: 0;
    height: 90%;
    width: 100%;
    background-image: url(${(props) => props.picture});
    background-position: center;
    background-size: cover;
  }
`;

