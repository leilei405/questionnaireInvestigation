const Mock = require('mockjs')
const getList = require('./data/getQuestionList')
const getComponentList = require('./data/getComponentList')
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
                    title: Random.ctitle(),
                    desc: '问卷描述',
                    js: '',
                    css: '',
                    isPublished: true,
                    componentList: getComponentList(),
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
        response(ctx) {
            console.log('ctx', ctx.query);
            console.log('ctx', ctx.url);
            // ctx /api/question?keyword=&isDeleted=true
            // ctx /api/question?keyword=&isDeleted=true
            const { url = '', query = {} } = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            const pageSize = parseInt(query.pageSize) || 10
            return {
                errno: 0,
                data: {
                    list: getList({len: pageSize,isDeleted, isStar}),
                    total: 100,
                }
            }
        }
    },

    // 更新问卷 标星
    {
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },

    // 复制问卷
    {
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    
    // 批量彻底删除问卷
    {
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]