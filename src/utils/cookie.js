import Cookies from "js-cookie";

const path = "/echeck-admin-boss/";
/**
 * 设置cookie
 *
 * @param {String} name
 * @param {String} value
 */
function setCookie(name, value) {
  Cookies.set(name, value, { expires: 1, path });
}

/**
 * 获取cookie
 *
 * @param {String} name
 * @returns
 */
function getCookie(name) {
  return Cookies.get(name);
}

/**
 * 删除cookie
 *
 * @param {String} name
 */
function delCookie(name) {
  Cookies.remove(name, { path });
}

export { setCookie, getCookie, delCookie };
