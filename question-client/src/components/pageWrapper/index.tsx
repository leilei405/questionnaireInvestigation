import React, { FC } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "@/styles/common.module.scss";

type PropsType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;

  children: JSX.Element | JSX.Element[];
};

const PageWrapper: FC<PropsType> = (props) => {
  const { title, desc = "", css = "", js, children } = props;
  return (
    <>
      <h1 className={styles.pageTitle}>{title}</h1>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <style>{css}</style>
      </Head>
      <main className={styles.container}>{children}</main>
      <Script src={js} id="page-js" />
    </>
  );
};

export default PageWrapper;
