import type { Metadata } from "next";
import "../styles/globals.css";
import "@radix-ui/themes/styles.css";

export const metadata: Metadata = {
  title: "Cadex | Test task",
  description: "Form for a feedback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={"Cadex | Test task"} />
        <meta property="og:description" content={"Form for a feedback"} />
        <meta
          property="og:image"
          content="https://cadexchanger.com/static/key_feature_view_convert-1e823e37eb5e3bf55e9276de9bf3f08d.png"
        />
        <meta
          property="og:url"
          content="https://cadex-fullstack-3d6f08-8a2c56-147-45-154-76.traefik.me/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cadex" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Cadex | Test task"} />
        <meta name="twitter:description" content={"Form for a feedback"} />
        <meta
          name="twitter:image"
          content="https://cadexchanger.com/static/key_feature_view_convert-1e823e37eb5e3bf55e9276de9bf3f08d.png"
        />
        <meta
          name="twitter:url"
          content="https://cadex-fullstack-3d6f08-8a2c56-147-45-154-76.traefik.me/"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
