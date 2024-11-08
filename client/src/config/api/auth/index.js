import { HOST } from "..";

export const getLoginApi = () => {
  return `${HOST}/api/auth/login`;
};
export const getRegisterApi = () => {
  return `${HOST}/api/auth/register`;
};
export const getLogoutApi = () => {
  return `${HOST}/api/auth/logout`;
};
export const getCheckAuthApi = () => {
  return `${HOST}/api/auth/check-auth`;
};
