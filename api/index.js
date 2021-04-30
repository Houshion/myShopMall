import { request } from "@/tools/request";

/**
 * 小程序登录接口
 * @param { string } username 用户名
 * @param { string } password 密码
 */
export function login(params) {
  return request({
    method: "get",
    url: "/member/list",
    params,
  });
}
