import { HOST } from "../..";

export const getShopOrderApi = (id, type) => {
  return (
    `${HOST}/api/shop/order` + (type ? `/${type}` : "") + (id ? `/${id}` : "")
  );
};

export const getShopOrderCapturePaymentApi = () => {
  return `${HOST}/api/shop/order/capture`;
};

export const getShopOrderByUserApi = (userId) => {
  return `${HOST}/api/shop/order/list/${userId}`;
};

export const getShopOrderDetailApi = (orderId) => {
  return `${HOST}/api/shop/order/details/${orderId}`;
};
