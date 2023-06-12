/**
 * 全局模块态框控制
 */
import { defineStore } from 'pinia';

export const useModel = defineStore('model', () => {
  // 注册框展示与否
  const registerModel = reactive({
    base: false, // 注册初始页
    finish: false, // 注册成功页
  });

  // 注册成功跳转完成页
  const changeToFinish = () => {
    registerModel.base = false;
    registerModel.finish = true;
  };
  return {
    registerModel,
    changeToFinish,
  };
});
