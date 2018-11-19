/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式 1. hash  2.history【 //去掉路由  '#/'】
 * imgBaseUrl: 图片所在域名地址
 * 
 */


let baseUrl = ''; 
let routerMode = 'history';
let imgBaseUrl = '';

if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = '/img/';
}else if(process.env.NODE_ENV == 'production'){
  // baseUrl = 'http://elm.cangdu.org';
  baseUrl = 'http://cangdu.org:8001';
  imgBaseUrl = '//elm.cangdu.org/img/';
}else{
  //local
  imgBaseUrl = '/img/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
