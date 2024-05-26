import React from "react";
import QuestionInput from "@/components/questionComponents/questionInput";
import QuestionRadio from "@/components/questionComponents/questionRadio";
import PageWrapper from "@/components/pageWrapper";
import { PropsType } from "./types";
import styles from "./index.module.scss";

export default function Question(props: PropsType) {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <PageWrapper title="问卷调查表单">
      <form method="post" action="/api/answer" onSubmit={handleSubmit}>
        <input type="hidden" name="questionId" value={props.id} />
        <div className={styles.componentWrapper}>
          <QuestionInput
            fe_id="c1"
            props={{ title: "职业", placeholder: "请输入职业名称" }}
          />
        </div>
        <div className={styles.componentWrapper}>
          <QuestionRadio
            fe_id="c2"
            props={{
              title: "性别",
              options: [
                { text: "男", value: "1" },
                { text: "女", value: "2" },
              ],
              isVertical: false,
              value: "",
            }}
          />
        </div>

        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWrapper>
  );
}

/**
 * 获取服务端渲染页面的属性
 * @param context 页面上下文对象
 * @returns 返回包含页面属性的对象
 */
export async function getServerSideProps(context: PropsType) {
  // 获取路由参数
  const { id = "" } = context.params;
  return {
    props: {
      id: `获取路由参数-${id}`,
    },
  };
}
