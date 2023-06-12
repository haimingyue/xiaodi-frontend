import { $fetch } from "ohmyfetch";
import type { FetchRequest, FetchOptions } from "ohmyfetch";
import { message } from "ant-design-vue";

export const baseUrl = "http://127.0.0.1:8081/api";

const _useApi = $fetch.create({
  baseURL: baseUrl,
  // 请求的拦截器
  async onRequest() {
    // 请求头+token
  },

  // 响应拦截器
  async onResponse({ response }) {
    const data = response._data;
    if (data.code !== 0) {
      message.error(data.msg);
    }
    // 接口请求异常捕获
    // 根据不同的返回状态码返回不同的提示信息
  },
});

export const useApi = async function (
  request: FetchRequest,
  options?: FetchOptions<"json">
) {
  console.log("request", request);
  return await _useApi(request, options);
};
