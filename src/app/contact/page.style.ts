import { Theme, TextField, TextArea } from "@radix-ui/themes";
import styled from "styled-components";

export const MainStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  row-gap: 30px;
`;

export const HeadingStyles = styled.h1`
  font-size: 72px;
`;

export const FormStyles = styled.form`
  width: 320px;
  height: 410px;
  border-radius: 8px;
`;

export const StyledTheme = styled(Theme)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  min-height: 410px;
`;

export const LabelText = styled.label`
  font-size: 16px;
`;

export const InputTextField = styled(TextField.Root)`
  font-size: 16px;
  height: 40px;
  border-radius: 8px;
  outline-color: #2c2c2c;
`;

export const StyledTextArea = styled(TextArea)`
  font-size: 16px;
  height: 80px;
  border-radius: 8px;
  resize: vertical;
  outline-color: #2c2c2c;
  max-height: 120px;
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  height: 40px;
  cursor: pointer;
  border: none;
  background-color: #2c2c2c;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  transition: 0.4s all;
  &:hover {
    background-color: #676767;
  }
`;
