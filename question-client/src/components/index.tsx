import QuestionInput from "./questionComponents/questionInput";
import QuestionRadio from "./questionComponents/questionRadio";
import QuestionTitle from "./questionComponents/questionTitle";
import QuestionParagraph from "./questionComponents/questionParagraph";
import QuestionInfo from "./questionComponents/questionInfo";
import QuestionTextarea from "./questionComponents/questionTextarea";
import QuestionCheckbox from "./questionComponents/questionCheckbox";

type ComponentInfoProps = {
  fe_id: string;
  type: string;
  // title: string;
  isHidden: boolean;
  props: any;
  [key: string]: any;
};

export const getComponent = (com: ComponentInfoProps) => {
  const { type, fe_id, isHidden, props = {} } = com;

  if (isHidden) return null;

  switch (type) {
    case "questionInput": // 输入框
      return <QuestionInput fe_id={fe_id} props={props} />;
    case "questionRadio": // 单选框
      return <QuestionRadio fe_id={fe_id} props={props} />;
    case "questionTitle": // 标题
      return <QuestionTitle {...props} />;
    case "questionParagraph": // 多行段落
      return <QuestionParagraph {...props} />;
    case "questionInfo": // 提示
      return <QuestionInfo {...props} />;
    case "questionTextarea": // 多行文本
      return <QuestionTextarea fe_id={fe_id} props={props} />;
    case "questionCheckbox": // 多选框
      return <QuestionCheckbox fe_id={fe_id} props={props} />;
    default:
      return null;
  }
};
