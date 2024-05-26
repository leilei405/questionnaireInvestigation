import React, { FC } from "react";
import styles from "./index.module.scss";
import { PropsType } from "./types";

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, isVertical, list = [] } = props;

  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {list.map((item) => {
          const { value, text, checked } = item;

          // 判断横向竖向样式
          let lisClassName;
          if (isVertical) {
            lisClassName = styles.verticalItem;
          } else {
            lisClassName = styles.horizontalItem;
          }

          return (
            <li key={value} className={lisClassName}>
              <label>
                <input name={fe_id} type="checkbox" checked={checked} />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionCheckbox;
