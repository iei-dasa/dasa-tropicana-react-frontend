import {Furniture} from "../../types/types";

export const FETCH_FURNITURES = "FETCH_FURNITURES";
export const FETCH_FURNITURES_BY_QUERY_SUCCESS = "FETCH_FURNITURES_BY_QUERY_SUCCESS";
export const FETCH_FURNITURE_BY_QUERY_SUCCESS = "FETCH_FURNITURE_BY_QUERY_SUCCESS";
export const FETCH_FURNITURE_SUCCESS = "FETCH_FURNITURE_SUCCESS";
export const FETCH_FURNITURE_REVIEWS_SUCCESS = "FETCH_FURNITURE_REVIEWS_SUCCESS";
export const FETCH_FURNITURES_BY_GENDER_SUCCESS = "FETCH_FURNITURES_BY_GENDER_SUCCESS";
export const FETCH_FURNITURES_BY_FURNITURER_SUCCESS = "FETCH_FURNITURES_BY_FURNITURER_SUCCESS";
export const FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS = "FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS";

export type GetFurnituresActionType = { type: typeof FETCH_FURNITURES, payload: Array<Furniture> };
export type FetchFurnituresByQuerySuccessActionType = { type: typeof FETCH_FURNITURES_BY_QUERY_SUCCESS, payload: Array<Furniture> };
export type FetchFurnitureByQuerySuccessActionType = { type: typeof FETCH_FURNITURE_BY_QUERY_SUCCESS, payload: Furniture };
export type FetchFurnitureSuccessActionType = { type: typeof FETCH_FURNITURE_SUCCESS, payload: Furniture };
export type FetchFurnitureReviewsSuccessActionType = { type: typeof FETCH_FURNITURE_REVIEWS_SUCCESS, payload: Furniture };
export type FetchFurnituresByGenderSuccessActionType = { type: typeof FETCH_FURNITURES_BY_GENDER_SUCCESS, payload: Array<Furniture> };
export type FetchFurnituresByFurniturerSuccessActionType = { type: typeof FETCH_FURNITURES_BY_FURNITURER_SUCCESS, payload: Array<Furniture> };
export type FetchFurnituresByFilterParamsSuccessActionType = { type: typeof FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS, payload: Array<Furniture> };

export type FurnitureActionTypes = FetchFurnituresByQuerySuccessActionType | FetchFurnitureByQuerySuccessActionType |
    FetchFurnitureSuccessActionType | FetchFurnitureReviewsSuccessActionType | FetchFurnituresByGenderSuccessActionType |
    FetchFurnituresByFurniturerSuccessActionType | FetchFurnituresByFilterParamsSuccessActionType | GetFurnituresActionType;
