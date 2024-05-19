const { Random } = require("mockjs");
const getStatList = require("./data/getStatList");

module.exports = [
  {
    url: "/api/stat/:questionId",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          total: 100,
          List: getStatList(),
        },
      };
    },
  },
  // 获取单个组件的统计数据汇总
  {
    url: "/api/stat/:questionId/:componentId",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          stat: [
            {
              name: "选项1",
              count: 20,
            },
            {
              name: "选项2",
              count: 30,
            },
            {
              name: "选项3",
              count: 50,
            },
          ],
        },
      };
    },
  },
];
