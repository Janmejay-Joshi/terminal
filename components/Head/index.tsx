import React from "react";
import Head from "next/head";

type Props = { title: string };

const _Head = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta property="og:title" content={props.title} key="title" />
    </Head>
  );
};

export default _Head;
