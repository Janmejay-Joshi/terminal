import React from "react";
import Head from "next/head";

type Props = { title: string };

const _Head = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} key="title" />
      <meta property="og:site_name" content="Janmejay's Terminal" />
      <meta property="og:url" content="https://jj-terminal.vercel.app/" />
      <meta
        property="og:description"
        content="The Interactive Terminal Portfolio by Janmejay Joshi."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://jj-terminal.vercel.app/terminal-icon.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="title" content="Janmejay's Terminal" />
      <meta
        name="description"
        content="  The Interactive Terminal Portfolio by Janmejay Joshi."
      />
      <meta
        name="keywords"
        content="Janmejay Joshi, Janmejay, Terminal, Developer, Portfolio, Personal, JJ Codes, JJ"
      />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Janmejay Joshi" />
    </Head>
  );
};

export default _Head;
