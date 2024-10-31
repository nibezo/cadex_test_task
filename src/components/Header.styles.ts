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
`;
