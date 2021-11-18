import Head from "next/head";
import { CallToAction, Header, Footer } from "@components/layout";

// TODO: Pass Head Props

export const Layout = ({ children }) => {
  return (
    <div className="font-serif border-t-8 border-purple-900 text-gray-700">
      <div className="min-h-screen max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <Head>
          <title>Create Next App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
