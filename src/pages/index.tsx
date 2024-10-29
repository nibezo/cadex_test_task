// src/pages/index.tsx
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        {" "}
        <title>My Next.js App</title>
        <meta
          name="description"
          content="This is a description of my Next.js application."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to Our Website</h1>
        <p>This is the main page.</p>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Link href="/contact">
          <button>Contact Us</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
