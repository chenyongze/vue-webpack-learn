module.exports = {
  devTest: { //部署到测试服务器上
    host: '115.28.18.28',
    remotePath: '/home/wwwroot/vue.dotalk.cn',
    port:2449,
    user: 'root',
    pass: 'ba199035'
  },
  devDist: { //部署正式服务器上
    host: '115.28.18.28',
    remotePath: '/home/wwwroot/vue.dotalk.cn',
    port:2449,
    user: 'root',
    pass: 'ba199035'
  },
  publicPath: '/dist' //程序编译好路径
}
