"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MainStyles,
  HeadingStyles,
  FormStyles,
  StyledTheme,
  LabelText,
  InputTextField,
  SubmitButton,
  StyledTextArea,
} from "./page.style";

import { Flex } from "@radix-ui/themes";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Header />
      <MainStyles>
        <HeadingStyles>Only CTA on the page</HeadingStyles>
        <StyledTheme>
          <FormStyles>
            <Flex direction="column" gap="5">
              <Flex direction="column" gap="2">
                <LabelText htmlFor="name">Name</LabelText>
                <InputTextField
                  id="name"
                  placeholder="Value"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Flex>

              <Flex direction="column" gap="2">
                <LabelText htmlFor="email">Email</LabelText>
                <InputTextField
                  id="email"
                  placeholder="Value"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Flex>

              <Flex direction="column" gap="2">
                <LabelText htmlFor="message">Message</LabelText>
                <StyledTextArea
                  id="message"
                  placeholder="Value"
                  required
                  value={email}
                  onChange={(e) => setText(e.target.value)}
                />
              </Flex>
              <SubmitButton type="submit">Submit</SubmitButton>
            </Flex>
          </FormStyles>
        </StyledTheme>
      </MainStyles>
      <Footer />
    </>
  );
}
