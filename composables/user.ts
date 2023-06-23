import { defineStore } from "pinia";
export const useUser = defineStore(
  "user",
  () => {
    const token = ref("");
    // 切换登录状态
    const switchLoginState = async function (_token: any) {
      token.value = _token;
    };
    return {
      token,
      switchLoginState,
    };
  },
  //持久化储存
  { persist: true }
);
