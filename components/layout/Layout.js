import Head from "next/head";
import { Header, Footer } from "@components/layout";
import { Snow } from "@components/misc";

// TODO: Pass Head Props

export const Layout = ({ children, meta, hasSnowFall = false }) => {
  const backgroundColour = hasSnowFall ? "bg-gray-700" : "bg-gray-50";
  const textColour = hasSnowFall ? "text-white" : "text-gray-600";

  if (!meta) return null;

  const { title: metaTitle, description } = meta;

  const title = metaTitle
    ? `${metaTitle} :: Nobel Cafe, Ballymena`
    : "Nobel Cafe";

  return (
    <div className={`font-serif antialiased ${backgroundColour} ${textColour}`}>
      {hasSnowFall && <Snow />}
      <div className="min-h-screen">
        <Head>
          <title>{title || "Nobel Cafe"}</title>
          <meta
            name="description"
            content={
              description ||
              "The best place to kick off your day or just take a break and enjoy a yummy breakfast in Ballymena.  For takeaway call 028 256 54302"
            }
          />

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

        <Footer hasSnowFall={hasSnowFall} />
      </div>
    </div>
  );
};
