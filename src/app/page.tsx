"use client";
import Header from "@/components/Header";
import YouTube from "react-youtube";
import {
  WelcomeBlock,
  WelcomeBlockText,
  WelcomeBlockVideo,
  ContentBlock,
} from "./page.styles";
import Link from "next/link";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const VideoComponent = () => {
  const opts = {
    height: "235",
    width: "530",
    playerVars: {
      autoplay: 1,
      controls: 0,
      mute: 1,
    },
  };

  return <YouTube videoId="dQw4w9WgXcQ" opts={opts} />;
};

interface IData {
  title: String;
  text: String;
}
const data: IData = {
  title: "Title",
  text: `Lorem ipsum dolor sit amet, consectetur 
  adipiscing elit. Aliquam mattis, leo et condimentum`,
};

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <WelcomeBlock>
          <div className="main-wrapper">
            <WelcomeBlockText>
              <h1>Most important title on the page</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum ultricies, sem urna convallis metus,
                vel suscipit nibh lacus tincidunt ante
              </p>
            </WelcomeBlockText>
            <WelcomeBlockVideo>
              <VideoComponent></VideoComponent>
            </WelcomeBlockVideo>
          </div>
        </WelcomeBlock>
        <ContentBlock>
          <div className="content-wrapper">
            <h2>Also very important title</h2>
            <div className="content-blocks">
              {Array.from({ length: 6 }).map((_, index: number) => {
                return (
                  <div key={index} className="content-blocks__block">
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                  </div>
                );
              })}
            </div>
            <Link href="/contact" className="contact-link" scroll={false}>
              Contact us
            </Link>
          </div>
        </ContentBlock>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}
