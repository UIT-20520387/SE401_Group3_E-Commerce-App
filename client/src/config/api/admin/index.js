import { HOST } from "..";

export const getAdminOrderApi = (id, type = "get") => {
  return `${HOST}/api/admin/orders/` + type + (id ? `/${id}` : "");
};
export const getAdminOrderDetailsApi = (id) => {
  return `${HOST}/api/admin/orders/details/${id}`;
};
export const getAdminProductApi = (id, type = "get") => {
  return `${HOST}/api/admin/products/` + type + (id ? `/${id}` : "");
};
