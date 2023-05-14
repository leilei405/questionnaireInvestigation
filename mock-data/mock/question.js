const Mock = require('mockjs')
const getList = require('./data/getQuestionList')
const Random = Mock.Random

module.exports = [
    // 获取单个问卷信息
    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle()
                }
            }
        }
    },
    // 创建问卷调查
    {
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                }
            }
        }
    },
    // 获取问卷列表 (全部)
    {
        url: '/api/question',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    list: getList(),
                    total: 100,
                }
            }
        }
    }
]