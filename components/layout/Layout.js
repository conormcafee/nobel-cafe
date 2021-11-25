import Head from "next/head";
import { CallToAction, Header, Footer } from "@components/layout";
import { Snow } from "@components/misc";

// TODO: Pass Head Props

export const Layout = ({ children, hasSnowFall = false }) => {
  const backgroundColour = hasSnowFall ? "bg-gray-700" : "bg-gray-50";
  const textColour = hasSnowFall ? "text-white" : "text-gray-600";

  return (
    <div className={`font-serif antialiased ${backgroundColour} ${textColour}`}>
      {hasSnowFall && <Snow />}
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

        <Header hasSnowFall={hasSnowFall} />

        <main>{children}</main>

        <Footer />
        <CallToAction />
      </div>
    </div>
  );
};
