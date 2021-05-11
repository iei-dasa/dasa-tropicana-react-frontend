import {Furniture} from "../../types/types";

export const FETCH_PERFUMES = "FETCH_PERFUMES";
export const FETCH_PERFUMES_BY_QUERY_SUCCESS = "FETCH_PERFUMES_BY_QUERY_SUCCESS";
export const FETCH_PERFUME_BY_QUERY_SUCCESS = "FETCH_PERFUME_BY_QUERY_SUCCESS";
export const FETCH_PERFUME_SUCCESS = "FETCH_PERFUME_SUCCESS";
export const FETCH_PERFUME_REVIEWS_SUCCESS = "FETCH_PERFUME_REVIEWS_SUCCESS";
export const FETCH_PERFUMES_BY_GENDER_SUCCESS = "FETCH_PERFUMES_BY_GENDER_SUCCESS";
export const FETCH_PERFUMES_BY_PERFUMER_SUCCESS = "FETCH_PERFUMES_BY_PERFUMER_SUCCESS";
export const FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS = "FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS";

export type GetFurnituresActionType = { type: typeof FETCH_PERFUMES, payload: Array<Furniture> };
export type FetchFurnituresByQuerySuccessActionType = { type: typeof FETCH_PERFUMES_BY_QUERY_SUCCESS, payload: Array<Furniture> };
export type FetchFurnitureByQuerySuccessActionType = { type: typeof FETCH_PERFUME_BY_QUERY_SUCCESS, payload: Furniture };
export type FetchFurnitureSuccessActionType = { type: typeof FETCH_PERFUME_SUCCESS, payload: Furniture };
export type FetchFurnitureReviewsSuccessActionType = { type: typeof FETCH_PERFUME_REVIEWS_SUCCESS, payload: Furniture };
export type FetchFurnituresByGenderSuccessActionType = { type: typeof FETCH_PERFUMES_BY_GENDER_SUCCESS, payload: Array<Furniture> };
export type FetchFurnituresByFurniturerSuccessActionType = { type: typeof FETCH_PERFUMES_BY_PERFUMER_SUCCESS, payload: Array<Furniture> };
export type FetchFurnituresByFilterParamsSuccessActionType = { type: typeof FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS, payload: Array<Furniture> };

export type FurnitureActionTypes = FetchFurnituresByQuerySuccessActionType | FetchFurnitureByQuerySuccessActionType |
    FetchFurnitureSuccessActionType | FetchFurnitureReviewsSuccessActionType | FetchFurnituresByGenderSuccessActionType |
    FetchFurnituresByFurniturerSuccessActionType | FetchFurnituresByFilterParamsSuccessActionType | GetFurnituresActionType;
