/**
 * @description  生成统计列表
 * @author 冯雷雷
 */

const { Random } = require('mockjs')
const getComponentList = require('./getComponentList')

const getStatList = (len = 10) => {
    const componentList = getComponentList()

    // 映射表
    const typeHandlers = {
        'questionInput': () => Random.ctitle(),
        'questionTextarea': () => Random.ctitle(),
        'questionRadio': (props) => props.options[0].text,
        'questionCheckbox': (props) => `${props.list[0].text},${props.list[1].text}`
    };

    const res = []
    for (let i = 0; i < len; i++) {
        const stat = {
            _id: Random.id(),
        }

        // 增加各个组件的 id value
        componentList.forEach(c => {
            const { fe_id, type, props } = c;
            const handler = typeHandlers[type];
            if (handler) {
                stat[fe_id] = handler(props);
            }
        });
    
        res.push(stat);
    }
    return res
}

module.exports = getStatList

