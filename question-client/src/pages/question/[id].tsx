import React from "react";
import QuestionInput from "@/components/questionComponents/questionInput";
import QuestionRadio from "@/components/questionComponents/questionRadio";
import styles from "./index.module.scss";
import { PropsType } from "./types";
export default function Question(props: PropsType) {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>问卷调查表单</h1>
      <form onSubmit={handleSubmit}>
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
              value: "1",
            }}
          />
        </div>

        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
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
