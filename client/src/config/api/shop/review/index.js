import { HOST } from "../..";

export const getShopReviewApi = (id, type) => {
  return (
    `${HOST}/api/shop/review` + (type ? `/${type}` : "") + (id ? `/${id}` : "")
  );
};
