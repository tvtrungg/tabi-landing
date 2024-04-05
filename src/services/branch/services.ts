import { getListBranch, getBranchById, getListRoomsOfBranch } from "./callers";
import { useInfiniteQuery, useQuery } from "react-query";

const keyBranch = {
  branches: "BRANCHES",
  branches_details: "BRANCHES_DETAILS",
  create_bm: "CREATE_BM",
  update_active: "UPDATE_ACTIVE",
};

export const useGetBranches = (l: number) => {
  return useInfiniteQuery<TListResponse<TBranch>, TErrorResponse>({
    queryKey: [keyBranch.branches, l],
    queryFn: ({ pageParam = 1 }) => {
      return getListBranch(l, pageParam);
    },
  });
};
