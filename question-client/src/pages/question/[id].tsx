import React from "react";
import PageWrapper from "@/components/pageWrapper";
import { getQuestionById } from "@/services/question";
import { getComponent } from "@/components";
import { PropsType } from "./types";
import styles from "./index.module.scss";

export default function Question(props: PropsType) {
  const { errno, data, msg = "" } = props;
  const {
    id,
    title = "",
    isDeleted,
    desc = "",
    isPublished,
    componentList = [],
  } = data || {};

  // 数据错误
  if (errno !== 0) {
    return (
      <PageWrapper title="错误">
        <h3>错误</h3>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  // 已经被删除的
  if (isDeleted) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h3>问卷标题：{title}</h3>
        <p>该问卷已经被删除了</p>
      </PageWrapper>
    );
  }

  // 尚未发布的
  if (!isPublished) {
    return (
      <PageWrapper title={title} desc={desc}>
        <h3>问卷标题：{title}</h3>
        <p>该问卷还没有发布</p>
      </PageWrapper>
    );
  }

  // 遍历 动态渲染组件
  const ComponentListDom = (
    <>
      {componentList.map((item) => {
        // 获取组件
        const ComponentElem = getComponent(item);
        return (
          <div key={item.fe_id} className={styles.componentWrapper}>
            {ComponentElem}
          </div>
        );
      })}
    </>
  );

  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <PageWrapper title={title} desc={desc}>
      <form method="post" action="/api/answer" onSubmit={handleSubmit}>
        <input type="hidden" name="questionId" value={id} />
        {ComponentListDom}
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
export async function getServerSideProps(context: any) {
  const data = await getQuestionById(context.params.id);

  return {
    props: {
      ...data,
    },
  };
}
