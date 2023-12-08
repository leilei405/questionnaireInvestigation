const { Random } = require('mockjs')
const getStatList = require('./data/getStatList')

module.exports = [
    // 答卷列表
    {
        url: '/api/stat/:questionId',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    total: 100,
                    List: getStatList(),
                }
            }
        }
    }
]