import { HOST } from "../..";

export const getAddressApi = (userId, addressId, type = "get") => {
  return (
    `${HOST}/api/shop/address/${type}` +
    (userId ? `/${userId}` : "") +
    (addressId ? `/${addressId}` : "")
  );
};
