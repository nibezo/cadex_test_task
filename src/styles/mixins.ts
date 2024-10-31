import { css } from "styled-components";

export const ButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(44, 44, 44);
  color: white;
  border: none;
  width: 177px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgb(66, 66, 66);
  }
`;
