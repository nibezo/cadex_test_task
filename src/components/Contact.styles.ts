import styled from "styled-components";
import { ButtonStyles } from "@/styles/mixins";

export const Contact = styled.section`
  height: 351px;
  background-color: rgb(245, 245, 245);
  display: flex;
  justify-content: center;
  padding-bottom: 96px;
  & .contact-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 40px;
  }
  & a {
    ${ButtonStyles}
  }
`;
