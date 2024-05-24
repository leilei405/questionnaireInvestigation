type TestProps = {
  info: string;
};

export default function Test(props: TestProps) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <h2>{props.info}</h2>
    </div>
  );
}

// 动态
// getServerSideProps  异步函数，可以获取到服务器端的数据
// 只在请求时运行时执行，build阶段不会执行
// export async function getServerSideProps() {
//   return {
//     props: {
//       info: "Hello, Next.js!11111111111111111",
//     },
//   };
// }

// 静态
// getStaticProps  异步函数，可以获取到静态数据
// 只在build阶段执行，运行时不会执行
export async function getStaticProps() {
  return {
    props: {
      info: "Hello, Next.js!22222222222222222test",
    },
  };
}
