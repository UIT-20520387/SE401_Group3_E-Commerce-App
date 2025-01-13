import { HOST } from "../..";

export const getShopProductApi = (id, query, type = "get") => {
  return (
    `${HOST}/api/shop/products/${type}` +
    (id ? `/${id}` : "") +
    (query ? `?${query}` : "")
  );
};
