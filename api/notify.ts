/**
 * 发送手机验证码
 * @param phone 手机号
 * @param captcha 验证码
 * @param type 验证码类型
 */

export const sendCode = async (
  phone: string,
  captcha: string,
  type: "login" | "register"
) => {
  return await useApi("/notify/v1/send_code", {
    method: "POST",
    body: {
      phone,
      captcha,
      type,
    },
  });
};
