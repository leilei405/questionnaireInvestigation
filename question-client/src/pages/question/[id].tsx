import React from "react";
import QuestionInput from "@/components/questionComponents/questionInput";
import QuestionRadio from "@/components/questionComponents/questionRadio";
import { PropsType } from "./types";
export default function Question(props: PropsType) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>问卷调查表单</h1>
      <form>
        <QuestionInput
          fe_id="c1"
          props={{ title: "职业", placeholder: "请输入职业名称" }}
        />
        <QuestionRadio
          fe_id="c2"
          props={{
            title: "性别",
            options: [
              { text: "男", value: "1" },
              { text: "女", value: "2" },
            ],
            isVertical: false,
            value: "1",
          }}
        />
      </form>
    </div>
  );
}

// 获取路由参数 c1111
export async function getServerSideProps(context: PropsType) {
  // 获取路由参数
  const { id = "" } = context.params;
  return {
    props: {
      id: `获取路由参数-${id}`,
    },
  };
}
