const { Random } = require('mockjs')
const getStatList = require('./data/getStatList')

module.exports = [
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