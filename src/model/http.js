import axios from 'axios'
import { Message } from 'element-ui'

// 创建一个独立的axios实例
const service = axios.create({
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  timeout: 10000,
  withCredentials: true
});

// 请求拦截
service.interceptors.request.use(config => {
  // 自定义header，可添加项目token
  config.headers = {
    "Bean-Token": this.$store.state.token,
  }
  return config;
});

// 返回拦截
service.interceptors.response.use((response)=>{
  switch (response.status) {
    case 200:
      if(response.data.code === 200) {
        return response.data.data
      } else {
        throw new Error(response.data.code + ":" + response.data.msg)
      }
      // eslint-disable-next-line no-unreachable
      break;
    default:
      Message.error('请求异常, status: ' + response.status);
      break
  }

},()=>{
  Message.error('网络请求异常，请稍后重试!');
});
export default service;
