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
    }
  }
`;

export const WelcomeBlockText = styled.div``;

export const WelcomeBlockVideo = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-left: 240px;
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
`;
