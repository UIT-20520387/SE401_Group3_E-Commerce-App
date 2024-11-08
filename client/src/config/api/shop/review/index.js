import { HOST } from "../..";

export const getShopReviewApi = (id) => {
  return `${HOST}/api/shop/reviews` + (id ? `/${id}` : "");
};
