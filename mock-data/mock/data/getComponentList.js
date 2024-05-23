/**
 * @description  生成组件列表
 * @author 冯雷雷
 */

const Mock = require("mockjs");
const Random = Mock.Random;

const getComponentList = () => {
  return [
    // Info
    {
      // 由于统计页,左侧和中间的数据完全一样,所以要直接写死fe_id,等后面度无端完善之后,替换为真正的接口
      // fe_id: Random.id(),
      fe_id: "c1",
      type: "questionInfo",
      title: "问卷信息",
      isHidden: false,
      isLocked: false,
      props: {
        title: "问卷标题",
        desc: "问卷描述",
      },
    },
    // Title
    {
      // fe_id: Random.id(),
      fe_id: "c2",
      // 组件可惜需要前后端统一好
      type: "questionTitle",
      title: "标题",
      isHidden: false,
      isLocked: false,
      props: {
        text: "个人信息调研",
        level: 1,
        isCenter: false,
      },
    },

    // Input
    {
      // fe_id: Random.id(),
      fe_id: "c3",
      type: "questionInput",
      title: "输入框1",
      isHidden: false,
      isLocked: false,
      props: {
        title: "姓名",
        placeholder: "请输入",
      },
    },

    // Input
    {
      // fe_id: Random.id(),
      fe_id: "c4",
      type: "questionInput",
      title: "输入框2",
      isHidden: false,
      isLocked: false,
      props: {
        title: "电话",
        placeholder: "请输入电话",
      },
    },

    // TextArea
    {
      // fe_id: Random.id(),
      fe_id: "c5",
      type: "questionTextarea",
      title: "多行输入",
      isHidden: false,
      isLocked: false,
      props: {
        title: "兴趣",
        desc: "请输入...",
      },
    },

    // Paragraph
    {
      // fe_id: Random.id(),
      fe_id: "c6",
      type: "questionParagraph",
      title: "段落",
      isHidden: false,
      isLocked: false,
      props: {
        text: "一行段落1\n一行段落2",
        isCenter: false,
      },
    },

    // radio
    {
      // fe_id: Random.id(),
      fe_id: "c7",
      type: "questionRadio",
      title: "单选",
      isHidden: false,
      isLocked: false,
      props: {
        title: "单选标题",
        isVertical: false,
        options: [
          { value: "item1", text: "选项1" },
          { value: "item2", text: "选项2" },
          { value: "item3", text: "选项3" },
        ],
        value: "", // 默认值
      },
    },

    // checkbox
    {
      // fe_id: Random.id(),
      fe_id: "c8",
      type: "questionCheckBox",
      title: "多选",
      isHidden: false,
      isLocked: false,
      props: {
        title: "多选标题",
        isVertical: false,
        list: [
          { value: "item1", text: "选项1", checked: false },
          { value: "item2", text: "选项2", checked: false },
          { value: "item3", text: "选项3", checked: false },
        ],
      },
    },
  ];
};

module.exports = getComponentList;
