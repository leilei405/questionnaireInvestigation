const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
    {
        url: '/api/user',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    name: Random.cname(),
                    name: Random.id(),
                }
            }
        }
    }
]