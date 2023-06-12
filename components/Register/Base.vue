<script lang="ts" setup>
import { message } from "ant-design-vue";
const { changeToFinish } = $(useModel());

const { registerCurrent } = defineProps<{
  registerCurrent: {
    phone: string;
    code: string;
    captcha: string;
    accept: boolean;
  };
}>();

let captchaSrc = $ref(
  `http://127.0.0.1:8081/api/notify/v1/captcha?type=register&time=${Date.now()}`
);

const resetCaptcha = () => {
  if (captchaSrc.includes("time")) {
    captchaSrc = captchaSrc.replace(/time=\d+/, `time=${Date.now()}`);
  } else {
    captchaSrc += `&time=${Date.now()}`;
  }
};

const getCode = () => {
  if (registerCurrent.phone) {
    // phone的正则表达式，详细一点的
    const phoneReg = /^1[3-9]\d{9}$/; // 1开头，第二位是3-9，后面9位是0-9的数字
    if (!phoneReg.test(registerCurrent.phone)) {
      // message.success("发送成功");
      message.error("请输入正确的手机号");
      return;
    } else {
    }
  } else {
    message.error("请输入手机号");
    return;
  }

  if (!registerCurrent.captcha) {
    message.error("请输入图形验证码");
    return;
  }
  /**
   * 手机验证码接口调用
   */
  isDisabled = true;
  countDownFun();
  message.success("发送手机验证码成功");
};

// 验证码倒计时
let countDown = $ref(60);
let timer = $ref(0);
let isDisabled = $ref(false);
const countDownFun = () => {
  timer = setInterval(() => {
    countDown--;
    if (countDown <= 0) {
      clearInterval(timer);
      countDown = 60;
      isDisabled = false;
    }
  }, 1000);
};

// 立即注册
const onRegisterClick = () => {
  if (!registerCurrent.code) {
    message.error("请输入手机验证码");
    return;
  }

  if (!registerCurrent.accept) {
    message.error("请同意隐私协议");
    return;
  }
  clearInfo();
  changeToFinish();
};

const onFinish = () => {
  onRegisterClick();
};

const clearInfo = () => {
  registerCurrent.captcha = "";
  registerCurrent.accept = false;
  registerCurrent.code = "";
  registerCurrent.phone = "";
};

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div mt-20px>
    <a-form
      autocomplete="off"
      ref="formRef"
      :model="registerCurrent"
      @finish="onFinish"
    >
      <a-form-item name="reg">
        <a-input
          placeholder="请输入手机号"
          v-model:value="registerCurrent.phone"
        />
      </a-form-item>

      <!-- 图形验证码  -->
      <a-form-item name="regPCaptcha">
        <div flex>
          <a-input
            placeholder="请输入图形验证码"
            autoComplete="false"
            v-model:value="registerCurrent.captcha"
          >
            <template #suffix>
              <reload-outlined @click="resetCaptcha" mr-3px cursor-pointer />
            </template>
          </a-input>
          <div flex justify-center items-center>
            <img w-80px h-30px :src="captchaSrc" />
          </div>
        </div>
      </a-form-item>

      <!-- 手机验证码  -->
      <a-form-item name="regCaptcha">
        <a-input
          placeholder="请输入手机号或邮箱验证码"
          v-model:value="registerCurrent.code"
        >
          <template #suffix>
            <div>
              <a-button
                type="link"
                size="small"
                p0
                @click="getCode"
                :disabled="isDisabled"
              >
                {{ isDisabled ? `${countDown}秒后重发` : "获取验证码" }}
              </a-button>
            </div>
          </template>
        </a-input>
      </a-form-item>

      <!-- 同意协议  -->
      <div flex items-center justify-between>
        <a-form-item name="accept">
          <a-checkbox v-model:checked="registerCurrent.accept">
            <div flexc items-center text-13px>
              <div>同意小滴课堂</div>
              <a
                size="small"
                type="link"
                text-13px
                p0
                m0
                href="/"
                color="#169bd5"
                >《隐私策略》</a
              >
            </div>
          </a-checkbox>
        </a-form-item>
      </div>

      <a-form-item>
        <button
          type="submit"
          btn
          center-text-36
          w-300px
          rounded-full
          bg="#4d555d"
          text-white
          cursor-pointer
          @click="changeToFinish"
        >
          立即注册
        </button>
      </a-form-item>
    </a-form>

    <!-- 微信注册登录方式 -->
    <div flex flex-col items-center justify-center>
      <span color="#555555">—更多登录方式—</span>
      <o-auth mb-8px />
    </div>
    <div
      absolute
      bottom-0
      left-0
      w-400px
      h-44px
      flexc
      style="background-color: rgba(77, 85, 93, 0.1)"
    >
      <span select-none absolute z-100 color="#404040"
        >已有账号？<span text-btn color="#5ebae2">登录</span></span
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.ant-form-item) {
  margin-bottom: 20px;
}
</style>
