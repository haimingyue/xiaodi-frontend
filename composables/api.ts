import { $fetch } from "ohmyfetch";
import type { FetchRequest, FetchOptions } from "ohmyfetch";
import { message } from "ant-design-vue";
import { IApiBase } from "../types/api";

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
      if (data.code === 270004) return;
      if (data.code === 250004) return;
      message.error(data.msg);
    }
    // 接口请求异常捕获
    // 根据不同的返回状态码返回不同的提示信息
  },
});

export const useApi = async <T = any>(
  request: FetchRequest,
  options?: FetchOptions<"json">
) => {
  return await _useApi<IApiBase<T>>(request, options);
};
