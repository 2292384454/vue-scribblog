import axios from "axios";

import { errorTips } from "@/libs/common/message";

const TIMEOUT = 30000; // 30秒
let cancel;
const DEFAULT_HEADER = {
  "X-Requested-With": "XMLHttpRequest",
};

const request = axios.create({
  validateStatus: (status) => {
    if (status > 400) {
      console.warn(`HTTP 请求出错 status: ${status}`);
    }
    return status >= 200 && status <= 503;
  },
  withCredentials: true,
  headers: DEFAULT_HEADER,
  timeout: TIMEOUT,
});

request.interceptors.request.use(
  (config) => {
    if (typeof cancel === "function") {
      cancel("强制取消了请求");
    }
    config["cancelToken"] = new axios.CancelToken(function (c) {
      cancel = c;
    });
    return config;
  },
  () => {
    const errMsg = {
      type: "axios",
      msg: "请求失败",
    };
    return Promise.reject(errMsg);
  }
);

/**
 * @description: 请求response拦截器，请根据具体业务的数据返回格式修改此处逻辑
 * 此处以这种数据格式为例
 * {
 *   "code" : 0,
 *   "msg": "success"
 *   "data": [{"plat": "platA", "svc": "svcA"}, {"plat": "platB", "svc": "svcB"}]
 * }
 */
request.interceptors.response.use(
  (response) => {
    cancel = null;
    const {
      data: { code, message, data },
    } = response;
    if (response.data && typeof response.data !== "string") {
      if (code !== undefined) {
        if (Number(code) !== 0) {
          const errMsg = {
            code: code,
            msg: message,
          };
          errorTips(errMsg.msg);
          return Promise.reject(errMsg);
        } else {
          return data;
        }
      } else {
        const errMsg = {
          msg: "code码解析异常",
        };
        errorTips(errMsg.msg);
        return Promise.reject(errMsg);
      }
    } else {
      const errMsg = {
        type: "axios",
        msg: "服务端响应解析异常",
      };
      errorTips(errMsg.msg);
      return Promise.reject(errMsg);
    }
  },
  (err) => {
    cancel = null;
    if (axios.isCancel(err)) {
      return new Promise(() => {});
    } else {
      const errMsg = {
        type: "axios",
        msg: "网络出现问题，请检查你的网络是否正常",
      };
      errorTips(errMsg.msg);
      return Promise.reject(errMsg);
    }
  }
);

export async function fetchApi({
  url,
  method,
  params,
  options: options = {},
                                 // eslint-disable-next-line no-unused-vars
  showError: showError = true,
                                 // eslint-disable-next-line no-unused-vars
  token: token = null,
}) {
  try {
    if (method === "get") {
      const response = await request.get(url, { params, ...options });
      return Promise.resolve(response);
    }
    if (method === "post") {
      const response = await request.post(url, params, options);
      return Promise.resolve(response);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}

export default request;
