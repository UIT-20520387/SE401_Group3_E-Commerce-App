import { HOST } from "../..";

export const getShopSearchApi = (keyword) => {
  return `${HOST}/api/shop/search/${keyword}`;
};
