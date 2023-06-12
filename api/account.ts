/**
 * 注册接口
 * @param options code: 验证码, phone: 手机号, password: 密码
 */

export const register = async (options: { code: string; phone: string }) => {
  return await useApi("/user/v1/register", {
    method: "POST",
    body: {
      code: options.code,
      phone: options.phone,
    },
  });
};
