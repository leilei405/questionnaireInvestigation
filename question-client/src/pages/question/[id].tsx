import QuestionInput from "@/components/questionComponents/questionInput";
import { JSX } from "react";

type PropsType = { id: string };

export default function Question(props: PropsType) {
  return (
    <div>
      <h1>Question</h1>
      <h2>id: {props.id}</h2>
      <form>
        <QuestionInput
          fe_id="张三"
          props={{ title: "职业", placeholder: "请输入职业名称" }}
        />
      </form>
    </div>
  );
}

// 获取路由参数 c1111
export async function getServerSideProps(context: any) {
  // 获取路由参数
  const { id = "" } = context.params;
  return {
    props: {
      id: `获取路由参数-${id}`,
    },
  };
}
