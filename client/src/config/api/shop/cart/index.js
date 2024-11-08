import { HOST } from "../..";

export const getCartApi = (userId, productId) => {
  if (userId && productId)
    return `${HOST}/api/shop/cart/${productId}/user/${userId}/`;
  if (userId) return `${HOST}/api/shop/cart/user/${userId}`;
  if (productId) return `${HOST}/api/shop/cart/${productId}`;
  return `${HOST}/api/shop/cart`;
};
