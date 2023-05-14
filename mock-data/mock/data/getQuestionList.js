/**
 * @description  MOCK 列表数据
 * @author 雷雷
 */

const Mock = require('mockjs')
const Random = Mock.Random

const getQuestionList = (option = {}) => {
  const {len = 10, isDeleted = false, isStar = false} = option
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            _id: Random.id(),
            title: Random.ctitle(),
            isPublished: Random.boolean(),
            isStar,
            answerCount: Random.natural(50, 100),  // 自然数
            createdAt: Random.datetime(),
            isDeleted,  // 删除
        })
    }
    return list
}

module.exports = getQuestionList

const dataList = [
    {
      _id: 'w1',
      title: '问卷1',
      isPublished: true,
      isStar: false,
      answerCount: 5,
      createdAt: '4月15日 23:56',
    },
    {
      _id: 'w2',
      title: '问卷2',
      isPublished: false,
      isStar: true,
      answerCount: 3,
      createdAt: '4月16日 22:56',
    },
    {
      _id: 'w3',
      title: '问卷3',
      isPublished: true,
      isStar: false,
      answerCount: 7,
      createdAt: '4月17日 21:56',
    },
    {
      _id: 'w4',
      title: '问卷4',
      isPublished: false,
      isStar: true,
      answerCount: 1,
      createdAt: '4月18日 20:56',
    },
  ]