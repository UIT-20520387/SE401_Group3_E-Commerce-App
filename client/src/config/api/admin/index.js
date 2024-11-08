import { HOST } from "..";

export const getAdminOrderApi = (id) => {
  return `${HOST}/api/admin/orders` + (id ? `/${id}` : "");
};
export const getAdminProductApi = (id) => {
  return `${HOST}/api/admin/products` + (id ? `/${id}` : "");
};
