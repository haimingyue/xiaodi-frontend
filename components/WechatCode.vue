<script lang='ts' setup>
// WechatCode.vue
import { getWechat, watchScan } from "~/api/wechat";
import { message } from "ant-design-vue";
let { wechatModel, registerModel } = $(useModel());
let { switchLoginState } = $(useUser());
let lock = $ref(true); // 防抖
let timer = $ref(0);
let qrcodeUrl = $ref("");
// 二维码地址接口请求
const getQrcode = async () => {
  if (lock) {
    lock = false;
    const res = await getWechat();
    if (res.code === 0) {
      qrcodeUrl = res.data.qrcodeUrl;
      timer = setInterval(() => watchScanDate(res.data.ticket), 3000);
      lock = true;
    }
  }
};
await getQrcode();
// 轮询请求接口查询用户扫码状态
const watchScanDate = async (ticket: string) => {
  const res = await watchScan({ ticket });
  if (res.code === 0) {
    switchLoginState(res.data);
    wechatModel = false;
    registerModel.base = false;

    clearInterval(timer);
    message.success("登录成功");
  }
  // 如果关闭二维码组件，清除定时器
  watch(
    () => wechatModel,
    (val) => {
      !val && clearInterval(timer);
    }
  );
};
</script>

<template>
  <div flexc flex-col mt-50px>
    <img w-200px h-200px :src="qrcodeUrl" />
    <div flexc mt-26px>
      <img src="/images/wechat_icon.png" cursor-pointer mr-2px w-34px h-34px />
      <span text-18px color="#555555">使用微信扫一扫登录</span>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>