import React, { FC } from "react";
import styles from "./index.module.scss";
import { PropsType } from "./types";

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title = "", options = [], value, isVertical } = props;
  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map((item) => {
          const { value: val, text } = item;
          let lisClassName = isVertical
            ? styles.verticalItem
            : styles.horizontalItem;
          return (
            <li className={lisClassName} key={val}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={val}
                  defaultChecked={val === value}
                />
              </label>
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionRadio;
