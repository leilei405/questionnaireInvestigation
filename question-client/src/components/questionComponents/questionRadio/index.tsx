import React, { FC } from "react";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};

const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {
  const { title = "", placeholder = "" } = props;
  return (
    <>
      <p>{title}</p>
      <div>
        <input placeholder={placeholder} />
      </div>
    </>
  );
};

export default QuestionInput;
