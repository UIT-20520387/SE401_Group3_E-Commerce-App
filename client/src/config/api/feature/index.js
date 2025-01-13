import { HOST } from "..";

export const getFeatureApi = (type = "get") => {
  return `${HOST}/api/common/feature/` + type;
};
