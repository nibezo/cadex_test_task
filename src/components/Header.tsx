"use client";
import React from "react";
import { HeaderWrapper } from "./Header.styles";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <Link href="/" className="root-link" scroll={false}>
          Some Company
        </Link>
        <Link href="/contact" className="contact-button" scroll={false}>
          Contact us
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
