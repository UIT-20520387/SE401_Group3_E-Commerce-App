import { HOST } from "../..";

export const getShopProductApi = (id, query) => {
  return (
    `${HOST}/api/shop/products` +
    (id ? `/${id}` : "") +
    (query ? `?${query}` : "")
  );
};
