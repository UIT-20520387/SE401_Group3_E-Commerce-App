import { HOST } from "../..";

export const getCartApi = (userId, addressId, type) => {
  return (
    `${HOST}/api/shop/cart` +
    (type ? `/${type}` : "") +
    (userId ? `/${userId}` : "") +
    (addressId ? `/${addressId}` : "")
  );
};
