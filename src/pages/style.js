import styled from "styled-components";

export const StyledPage = styled.div`
  height: 100%;
  display: flex;
  > img {
    width: 40%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
  }
  > div {
    padding: 30px;
    text-align: left;
    max-width: 700px;
    margin: auto;
    margin-left: 40%;
  }
  @media screen and (max-width: 700px) {
    flex-direction: row;
    > img {
      width: 100%;
      height: 200px;
      object-fit: center;
    }
    > div {
      margin-left: 0;
      margin-top: 180px;
    }
  }
`;

export const StyledHeader = styled.section`
  text-align: left;
  padding: 10px 0;
  h1 {
    color: #0b6bf2;
  }
`;
