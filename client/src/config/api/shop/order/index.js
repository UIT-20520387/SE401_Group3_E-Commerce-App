import { HOST } from "../..";

export const getShopOrderApi = (id) => {
  return `${HOST}/api/shop/order` + (id ? `/${id}` : "");
};

export const getShopOrderCapturePaymentApi = () => {
  return `${HOST}/api/shop/order/capture`;
};

export const getShopOrderByUserApi = (userId) => {
  return `${HOST}/api/shop/order/user/${userId}`;
};
