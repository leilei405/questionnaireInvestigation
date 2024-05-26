import QuestionInput from "./questionComponents/questionInput";
import QuestionRadio from "./questionComponents/questionRadio";
import QuestionTitle from "./questionComponents/questionTitle";
import QuestionParagraph from "./questionComponents/questionParagraph";
import QuestionInfo from "./questionComponents/questionInfo";

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
    case "questionInput":
      return <QuestionInput fe_id={fe_id} props={props} />;
    case "questionRadio":
      return <QuestionRadio fe_id={fe_id} props={props} />;
    case "questionTitle":
      return <QuestionTitle {...props} />;
    case "questionParagraph":
      return <QuestionParagraph {...props} />;
    case "questionInfo":
      return <QuestionInfo {...props} />;
    default:
      return null;
  }
};
