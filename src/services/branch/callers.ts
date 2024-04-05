import { interpolate, request } from "../../utils/httpRequest";
import { LIST_BRANCH, BRANCH_BY_ID, LIST_ROOMS_OF_BRANCH } from "./paths";

export const getListBranch = async (l: number, p: number) => {
  return request(LIST_BRANCH, {
    method: "GET",
    params: {
      l,
      p,
    },
  });
};

export const getBranchById = async (id: number) => {
  return request(interpolate(BRANCH_BY_ID, { id }), {
    method: "GET",
  });
};

export const getListRoomsOfBranch = async (id: number) => {
  return request(interpolate(LIST_ROOMS_OF_BRANCH, { id }), {
    method: "GET",
  });
};
