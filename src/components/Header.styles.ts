import styled from "styled-components";
import { ButtonStyles } from "@/styles/mixins";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 96px;
  width: 100vw;
  border-bottom: 1px solid rgb(217, 217, 217);
  position: fixed;
  top: 0;
  & .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    .root-link {
      font-weight: 600;
      font-size: 24px;
      display: block;
      color: black;
    }
    .contact-button {
      ${ButtonStyles}
    }
  }
  /* Adaptive */
  @media screen and (max-width: 1250px) {
    & .header {
      width: 900px;
    }
  }
  @media screen and (max-width: 950px) {
    & .header {
      width: 680px;
    }
  }
  @media screen and (max-width: 715px) {
    & .header {
      width: 500px;
    }
  }
  @media screen and (max-width: 550px) {
    & .header {
      width: 380px;
    }
  }
  @media screen and (max-width: 550px) {
    & .header {
      .contact-button {
        width: 120px;
      }
    }
  }
  @media screen and (max-width: 420px) {
    & .header {
      width: 310px;
    }
  }
`;
