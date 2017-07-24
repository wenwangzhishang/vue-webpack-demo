// import axios from '../../../node_modules/axios'
// import qs from '../../../node_modules/qs'

// axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://xxx.xxx.com';
// //POST传参序列化
// axios.interceptors.request.use((config) => {
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data);
//   }
//   return config;
// }, (error) => {
//   console.log("错误的传参");
//   return Promise.reject(error);
// });
// //code状态码200判断
// axios.interceptors.response.use((res) => {
//   if (res.data.code != '200') {
//     console.logtoast(res.data.msg);
//     return Promise.reject(res);
//   }
//   return res;
// }, (error) => {
//   console.logtoast("网络异常");
//   return Promise.reject(error);
// });
// export default axios;
