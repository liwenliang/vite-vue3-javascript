export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        'list|1-10': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1
        }],
        name: {
          first: '@FIRST',
          middle: '@FIRST',
          last: '@LAST',
          full: '@first @middle @last'
        }
      }
    }
  }
]
