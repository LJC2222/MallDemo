//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入样式
import "nprogress/nprogress.css";
//1.创建axios实例
const requests = axios.create({
  //配置对象
  //基础路径，发请求时，会在路径中出现api
  baseURL: "/api",
  //超时
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  nprogress.start();
  //config: 配置对象，对象里面有一个属性很重要，headers请求头
  return config;
});

requests.interceptors.response.use(
  (res) => {
    //成功的回调函数
    nprogress.done();
    console.log("请求三联菜单数据成功")
    return res.data;
  },
  (err) => {    
    console.log(err+"请求三联菜单数据失败");
  }
);

export default requests;
