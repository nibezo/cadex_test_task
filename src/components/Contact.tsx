"use client";
import React from "react";
import Link from "next/link";
import { Contact as ContactStyles } from "./Contact.styles";

const Contact: React.FC = () => {
  return (
    <ContactStyles>
      <div className="contact-wrapper">
        <h2>Less important title</h2>
        <Link href="/contact" className="contact-button" scroll={false}>
          Contact us
        </Link>
      </div>
    </ContactStyles>
  );
};

export default Contact;
