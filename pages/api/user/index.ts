import { URLs } from "../RESTFULLURL";
import request from "../request";
import { methods } from "../typeRestApi";

/**
 * @description Создать нового пользователя сайта
 * @param data {Object} Новый пользователь сайта
 * @returns
 */
export function CreateUser<T>(data: T) {
  return request({
    url: URLs.postUser,
    method: methods.post,
    data,
  });
}

/**
 * @description Создать нового пользователя сайта
 * @param data {Object} Новый пользователь сайта
 * @returns
 */
export function GetUsers() {
  return request({
    url: URLs.fetchUsers,
    method: methods.get,
  });
}

/**
 * @description RollingRetention
 * @returns
 */
export function GetRollingRetention() {
  return request({
    url: URLs.getRollingRetention,
    method: methods.get,
  });
}

/**
 * @description Histogram
 * @returns
 */
export function GetHistogram() {
  return request({
    url: URLs.getHistogram,
    method: methods.get,
  });
}
