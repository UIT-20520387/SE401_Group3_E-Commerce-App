import { HOST } from "../..";

export const getAddressApi = (userId, addressId) => {
  if (userId && addressId)
    return `${HOST}/api/shop/address/${addressId}/user/${userId}/`;
  if (userId) return `${HOST}/api/shop/address/user/${userId}`;
  if (addressId) return `${HOST}/api/shop/address/${addressId}`;
  return `${HOST}/api/shop/address`;
};
