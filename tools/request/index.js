import baseUrl from "./config.js";

export function request({ method, url, params, form }) {
  // 请求参数类型
  let formData = form
    ? "application/x-www-form-urlencoded"
    : "application/json";
  if (method == "get") {
    return get(url, params);
  } else if (method == "post") {
    return post(url, params, formData);
  }
}

// 封装get方法
function get(url, params) {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: "GET",
        url: baseUrl + url,
        params,
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading();
        }, 200);
        let [error, res] = response;
        intercept(res.data).then((data) => {
          resolve(data);
        });
      })
      .catch((error) => {
        let [err, res] = error;
        reject(err);
      });
  });
}

// 封装post方法
function post(url, params, dataType) {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: "POST",
        url: baseUrl + url,
        params,
        dataType,
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading();
        }, 200);
        let [error, res] = response;
        intercept(res.data).then((data) => {
          resolve(data);
        });
      })
      .catch((error) => {
        let [err, res] = error;
        reject(err);
      });
  });
}

// 响应拦截器
function intercept(res) {
  return new Promise((resolve, reject) => {
    const { code, data } = res;
    let wrong = false,
      msg;
    switch (code) {
      case 200:
        // 操作成功
        resolve(data);
        break;
      case 201:
        // 对象创建成功
        resolve(data);
        break;
      case 202:
        // 请求已经被接受
        resolve(data);
        break;
      case 204:
        // 操作已经执行成功，但是没有返回数据
        reject();
        break;
      case 301:
        // 资源已被移除
        wrong = true;
        msg = "资源已被移除";
        break;
      case 303:
        // 重定向
        wrong = true;
        msg = "重定向";
        break;
      case 304:
        // 资源没有被修改
        wrong = true;
        msg = "资源没有被修改";
        break;
      case 400:
        wrong = true;
        // 参数列表错误（缺少，格式不匹配）
        msg = "参数错误";
        break;
      case 401:
        // 未授权
        wrong = true;
        msg = "未授权";
        break;
      case 403:
        // 访问受限，授权过期
        wrong = true;
        msg = "访问受限，授权过期";
        break;
      case 404:
        // 资源，服务未找到
        wrong = true;
        msg = "资源，服务未找到";
        break;
      case 405:
        // 不允许的http方法
        wrong = true;
        msg = "不允许的http方法";
        break;
      case 409:
        // 资源冲突，或者资源被锁
        wrong = true;
        msg = "资源冲突，或者资源被锁";
        break;
      case 415:
        // 不支持的数据，媒体类型
        wrong = true;
        msg = "不支持的数据，媒体类型";
        break;
      case 500:
        // 系统内部错误
        wrong = true;
        msg = "系统内部错误";
        break;
      case 501:
        // 接口未实现
        wrong = true;
        msg = "接口未实现";
        break;
    }
    if (wrong)
      uni.showToast({
        duration: 2000,
        title: msg,
        position: "bottom",
      });
  });
}
