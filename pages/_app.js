import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/mainpage.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Kitchen Connect</title>
        <meta property="og:title" content="Kitchen Connect" />
        <meta
          property="og:description"
          content="A full-stack recipe-sharing and culinary community web application."
        />
        <meta
          property="og:image"
          content="https://kitchen-connect-client.vercel.app/thumbnail.png"
        />
        <meta
          property="og:url"
          content="https://kitchen-connect-client.vercel.app"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}