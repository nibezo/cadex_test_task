import styled from "styled-components";
import { ButtonStyles } from "@/styles/mixins";

export const WelcomeBlock = styled.section`
  height: 351px;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-top: 96px;
  & .main-wrapper {
    display: flex;
    width: 1200px;
    & h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    & p {
      font-size: 16px;
      line-height: 1.4;
    }
    & h1,
    p {
      width: 390px;
      /* Adaptive */
      @media screen and (max-width: 423px) {
        width: 321px;
      }
    }
  }
  /* Adaptive */
  @media screen and (max-width: 1250px) {
    .main-wrapper {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  }
  @media screen and (max-width: 1000px) {
    .main-wrapper {
      flex-direction: column;
      align-items: center;
      row-gap: 60px;
    }
    height: 650px;
    margin-top: 45px;
  }
`;

export const WelcomeBlockText = styled.div`
  /* Adaptive */
  @media screen and (max-width: 571px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WelcomeBlockVideo = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 240px;
  /* Adaptive */
  @media screen and (max-width: 1250px) {
    padding-left: 0px;
    flex: 0;
  }
  @media screen and (max-width: 1250px) {
    .video > iframe {
      width: 400px;
    }
  }
  @media screen and (max-width: 445px) {
    .video > iframe {
      width: 310px;
      height: 200px;
    }
  }
`;

export const ContentBlock = styled.section`
  display: flex;
  justify-content: center;
  .contact-link {
    ${ButtonStyles}
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    width: 1200px;
    flex-direction: column;
    padding: 45px 0 43px 0;
    align-items: center;
  }
  & h2 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 100px;
  }
  & .content-blocks {
    display: flex;
    flex-wrap: wrap;
    column-gap: 74px;
    row-gap: 100px;
    justify-content: center;
    margin-bottom: 68px;
    & .content-blocks__block {
      width: 300px;
      height: 100px;
      & h3 {
        font-size: 24px;
        margin-bottom: 10px;
      }
      & p {
        color: #757575;
        line-height: 1.3;
      }
    }
  }
  /* Adaptive */
  @media screen and (max-width: 1250px) {
    & .content-blocks {
      width: 90%;
    }
  }
  @media screen and (max-width: 1250px) {
    & .content-blocks {
      row-gap: 44px;
    }
  }
`;
