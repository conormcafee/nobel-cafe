import Head from "next/head";
import { CallToAction, Header, Footer } from "@components/layout";

// TODO: Pass Head Props

export const Layout = ({ children }) => {
  return (
    <div className="font-serif text-gray-600 bg-gray-50 antialiased">
      <div className="min-h-screen">
        <Head>
          <title>Create Next App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main>{children}</main>

        <Footer />
        <CallToAction />
      </div>
    </div>
  );
};
