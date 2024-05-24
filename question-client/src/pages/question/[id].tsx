type TestProps = {
  id: string;
};

export default function Question(props: TestProps) {
  return (
    <div>
      <h1>Question</h1>
      <h2>{props.id}</h2>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // 获取路由参数
  const { id = "" } = context.params;
  return {
    props: {
      id: `获取路由参数-${id}`,
    },
  };
}
