import { HOST } from "../..";

export const getShopReviewApi = (id, type) => {
  return (
    `${HOST}/api/shop/reviews` + (type ? `/${type}` : "") + (id ? `/${id}` : "")
  );
};
