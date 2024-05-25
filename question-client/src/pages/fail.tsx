import Head from "next/head";

type PropsType = {
  [key: string]: any;
};

export default function Success(props: PropsType) {
  console.log(props);

  return (
    <>
      <Head>
        <title>提交失败</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>提交失败</h1>
        <p>请重新提交</p>
      </main>
    </>
  );
}
