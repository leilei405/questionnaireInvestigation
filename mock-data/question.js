const Mock = require('mockjs')

const Random = Mock.Random

module.export = [
    {
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    name: Random.id(),
                    title: Random.ctitle()
                }
            }
        }
    }
]