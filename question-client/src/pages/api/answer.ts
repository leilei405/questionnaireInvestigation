import type { NextApiRequest, NextApiResponse } from "next";

type PropsType = {
    [key: string]: any
}

/**
 * 获取答卷信息
 * @param reqBody 请求体参数，类型为PropsType
 * @returns 返回一个对象，包含questionId和answerList两个属性。
 *          questionId为请求体中的questionId字段，类型为string，默认为空字符串。
 *          answerList为根据请求体参数生成的答案列表，类型为PropsType数组。
 */
const getAnswerInfo = (reqBody: PropsType ) => {
    const answerList: PropsType[] = []
    Object.keys(reqBody).forEach((key) => {
        if (key === 'questionId') return;
        answerList.push({
            questionId: key,
            value: reqBody[key]
        })
    });

    return {
        questionId: reqBody.questionId || '',
        answerList,
    }
}


/**
 * API 请求处理函数
 * @param req NextApiRequest 请求对象
 * @param res NextApiResponse 响应对象
 * @returns Promise<void> 返回一个 Promise
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.redirect('/fail')
    res.status(200).json({ errCode: -1, errMsg: "请求方式错误" });
  }
  const answerInfo = getAnswerInfo(req.body);
  console.log(answerInfo)
  try {
    // 调用接口

    // 成功后跳转成功页面
    res.redirect('/success')
  }
  catch (error) {
    // 失败后跳转失败页面
    res.redirect('/fail')
    res.status(200).json({ errCode: -1, errMsg: "请求失败" });
  }
}
