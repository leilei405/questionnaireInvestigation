import { postAnswer } from "../..//services/answer";

type PropsType = { [key: string]: any };

/**
 * 获取答卷信息
 * @param reqBody 请求体参数，类型为PropsType
 * @returns 返回一个对象，包含questionId和answerList两个属性。
 *          questionId为请求体中的questionId字段，类型为string，默认为空字符串。
 *          answerList为根据请求体参数生成的答案列表，类型为PropsType数组。
 */
const getAnswerInfo = (reqBody: PropsType) => {
  const answerList: PropsType[] = [];
  // console.log(reqBody);

  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      questionId: key,
      value: reqBody[key],
    });
  });

  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
};

/**
 * API 请求处理函数
 * @param req NextApiRequest 请求对象
 * @param res NextApiResponse 响应对象
 * @returns Promise<void> 返回一个 Promise
 */
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.redirect("/subInfo/fail");
    res.status(200).json({ errno: -1, errMsg: "请求方式错误" });
  }

  const answerInfo = getAnswerInfo(req.body);

  console.log(answerInfo, "=-====");
  try {
    // 调用接口
    const data = await postAnswer(answerInfo);
    if (data.errno === 0) {
      res.redirect("/subInfo/success");
    } else {
      res.redirect("/subInfo/fail");
    }
  } catch (error) {
    res.redirect("/subInfo/fail");
  }
}
