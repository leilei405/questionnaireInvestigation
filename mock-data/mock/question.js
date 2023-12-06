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
                    title: Random.ctitle(),
                    desc: '问卷描述',
                    js: '',
                    css: '',
                    isPublished: true,
                    componentList: [
                        // title
                        {
                            fe_id: Random.id(),
                            // 组件可惜需要前后端统一好
                            type: 'questionTitle',
                            title: '标题',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                text: '一行标题',
                                level: 1,
                                isCenter: false,
                            }
                        },
                        // Input
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框1',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '姓名',
                                placeholder: '请输入'
                            }
                        },
                        // Input
                        {
                            fe_id: Random.id(),
                            type: 'questionInput',
                            title: '输入框2',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '年龄',
                                placeholder: '请输入'
                            }
                        },
                        // Paragraph
                        {
                            fe_id: Random.id(),
                            type: 'questionParagraph',
                            title: '段落',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '一行段落',
                                idCenter: false
                            }
                        },
                        // Info
                        {
                            fe_id: Random.id(),
                            type: 'questionInfo',
                            title: '问卷信息',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '问卷标题',
                                desc: '问卷描述'
                            }
                        },
                        // TextArea
                        {
                            fe_id: Random.id(),
                            type: 'questionTextArea',
                            title: '多行输入',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '你的兴趣',
                                desc: '请输入...'
                            }
                        },
                        // radio
                        {
                            fe_id: Random.id(),
                            type: 'questionRadio',
                            title: '单选',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '单选标题',
                                isVertical: false,
                                options: [
                                    { value: 'item1', text: '选项1' },
                                    { value: 'item2', text: '选项2' },
                                    { value: 'item3', text: '选项3' },
                                ],
                                value: '', // 默认值
                            }
                        },
                        // checkbox
                        {
                            fe_id: Random.id(),
                            type: 'questionCheckBox',
                            title: '多选',
                            isHidden: false,
                            isLocked: false,
                            props: {
                                title: '多选标题',
                                isVertical: false,
                                list: [
                                    { value: 'item1', text: '选项1', checked: false },
                                    { value: 'item2', text: '选项2', checked: false },
                                    { value: 'item3', text: '选项3', checked: false },
                                ],
                            }
                        },
                    ]
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