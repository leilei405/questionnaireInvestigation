const test = require("./test");
const question = require("./question");
const user = require("./user");
const stat = require("./stat");

const mockList = [...test, ...question, ...user, ...stat];

module.exports = mockList;
