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
