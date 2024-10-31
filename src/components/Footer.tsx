import React from "react";
import { Footer as FooterBlock } from "./Footer.styles";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <FooterBlock>
      <Link href={"/"}>Some Company 2024</Link>
    </FooterBlock>
  );
};
export default Footer;
