import {Furniture} from "../../types/types";
import {
    FETCH_FURNITURES,
    FETCH_FURNITURE_SUCCESS,
    FETCH_FURNITURE_REVIEWS_SUCCESS,
    FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS,
    FETCH_FURNITURES_BY_GENDER_SUCCESS,
    FETCH_FURNITURES_BY_FURNITURER_SUCCESS,
    FETCH_FURNITURES_BY_QUERY_SUCCESS,
    FETCH_FURNITURE_BY_QUERY_SUCCESS,
    FetchFurnituresByQuerySuccessActionType,
    FetchFurnitureByQuerySuccessActionType,
    FetchFurnituresByFilterParamsSuccessActionType,
    FetchFurnituresByGenderSuccessActionType,
    FetchFurnituresByFurniturerSuccessActionType,
    FetchFurnitureSuccessActionType,
    GetFurnituresActionType,
    FetchFurnitureReviewsSuccessActionType,
} from "../action-types/furniture-action-types";

export const getFurnitures = (furnitures: Array<Furniture>): GetFurnituresActionType => ({
    type: FETCH_FURNITURES,
    payload: furnitures
});

export const fetchFurnituresByQuerySuccess = (furnitures: Array<Furniture>): FetchFurnituresByQuerySuccessActionType => ({
    type: FETCH_FURNITURES_BY_QUERY_SUCCESS,
    payload: furnitures
});

export const fetchFurnitureByQuerySuccess = (furniture: Furniture): FetchFurnitureByQuerySuccessActionType => ({
    type: FETCH_FURNITURE_BY_QUERY_SUCCESS,
    payload: furniture
});

export const fetchFurnitureSuccess = (furniture: Furniture): FetchFurnitureSuccessActionType => ({
    type: FETCH_FURNITURE_SUCCESS,
    payload: furniture
});

export const fetchFurnitureReviewsSuccess = (furniture: Furniture): FetchFurnitureReviewsSuccessActionType => ({
    type: FETCH_FURNITURE_REVIEWS_SUCCESS,
    payload: furniture
});

export const fetchFurnituresByGenderSuccess = (furnitures: Array<Furniture>): FetchFurnituresByGenderSuccessActionType => ({
    type: FETCH_FURNITURES_BY_GENDER_SUCCESS,
    payload: furnitures
});

export const fetchFurnituresByFurniturerSuccess = (furnitures: Array<Furniture>): FetchFurnituresByFurniturerSuccessActionType => ({
    type: FETCH_FURNITURES_BY_FURNITURER_SUCCESS,
    payload: furnitures
});

export const fetchFurnituresByFilterParamsSuccess = (furnitures: Array<Furniture>): FetchFurnituresByFilterParamsSuccessActionType => ({
    type: FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS,
    payload: furnitures
});
