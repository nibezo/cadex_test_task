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
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, text }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Header />
      {submitted ? (
        <MainStyles>
          <HeadingStyles>Message generated on the server</HeadingStyles>
        </MainStyles>
      ) : (
        <MainStyles>
          <HeadingStyles>Only CTA on the page</HeadingStyles>
          <StyledTheme>
            <FormStyles onSubmit={handleSubmit}>
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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Flex>
                <SubmitButton type="submit">Submit</SubmitButton>
              </Flex>
            </FormStyles>
          </StyledTheme>
        </MainStyles>
      )}
      <Footer />
    </>
  );
}
