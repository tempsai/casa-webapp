// import axios from 'axios';

// const AXIOS_SERVICE = axios.create({
//   baseURL: process.env.REACT_APP_HOST_URL, // inject backend hostURL from env vars
//   timeout: 100000, //set timeout
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// // For Requests
// AXIOS_SERVICE.interceptors.request.use(
//   async function(config) {
//handle request, like
//     return config;
//   },
//   function(error) {
//     return error;
//   },
// );

// // For Responses
// AXIOS_SERVICE.interceptors.response.use(undefined, error => {
//   // Check and handle errors, catch server error's like 500's
//   return Promise.reject(error);
// });

// class BaseService {
//   axios: any;
//   constructor() {
//     this.axios = AXIOS_SERVICE;
//   }
//   get(endpoint: string, data: any) {
//     return AXIOS_SERVICE.get(endpoint, data);
//   }

//   post(endpoint: string, data: any) {
//     return AXIOS_SERVICE.post(endpoint, data);
//   }

//   put(endpoint: string, data: any) {
//     return AXIOS_SERVICE.put(endpoint, data);
//   }

//   patch(endpoint: string, data: any) {
//     return AXIOS_SERVICE.patch(endpoint, data);
//   }

//   delete(endpoint: string, data: any) {
//     return AXIOS_SERVICE.delete(endpoint, data);
//   }

//   request(type: any, url: string, data?: any) {
//     let promise = null;
//     switch (type) {
//       case 'GET':
//         promise = this.get(url, { params: data });
//         break;
//       case 'POST':
//         promise = this.post(url, data);
//         break;
//       case 'PUT':
//         promise = this.put(url, data);
//         break;
//       case 'PATCH':
//         promise = this.patch(url, data);
//         break;
//       case 'DELETE':
//         promise = this.delete(url, { params: data });
//         break;
//       default:
//         promise = this.get(url, { params: data });
//         break;
//     }
//     return promise;
//   }
// }

// export default BaseService;
