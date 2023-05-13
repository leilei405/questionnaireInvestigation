import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => {
  return {
    errno: 0,
    data: {
      name: `冯雷雷${Date.now()}`,
    },
  }
})
