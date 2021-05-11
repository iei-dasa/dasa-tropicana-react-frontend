import {Furniture} from "../../types/types";
import {
    FETCH_PERFUMES,
    FETCH_PERFUME_SUCCESS,
    FETCH_PERFUME_REVIEWS_SUCCESS,
    FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS,
    FETCH_PERFUMES_BY_GENDER_SUCCESS,
    FETCH_PERFUMES_BY_PERFUMER_SUCCESS,
    FETCH_PERFUMES_BY_QUERY_SUCCESS,
    FETCH_PERFUME_BY_QUERY_SUCCESS,
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
    type: FETCH_PERFUMES,
    payload: furnitures
});

export const fetchFurnituresByQuerySuccess = (furnitures: Array<Furniture>): FetchFurnituresByQuerySuccessActionType => ({
    type: FETCH_PERFUMES_BY_QUERY_SUCCESS,
    payload: furnitures
});

export const fetchFurnitureByQuerySuccess = (furniture: Furniture): FetchFurnitureByQuerySuccessActionType => ({
    type: FETCH_PERFUME_BY_QUERY_SUCCESS,
    payload: furniture
});

export const fetchFurnitureSuccess = (furniture: Furniture): FetchFurnitureSuccessActionType => ({
    type: FETCH_PERFUME_SUCCESS,
    payload: furniture
});

export const fetchFurnitureReviewsSuccess = (furniture: Furniture): FetchFurnitureReviewsSuccessActionType => ({
    type: FETCH_PERFUME_REVIEWS_SUCCESS,
    payload: furniture
});

export const fetchFurnituresByGenderSuccess = (furnitures: Array<Furniture>): FetchFurnituresByGenderSuccessActionType => ({
    type: FETCH_PERFUMES_BY_GENDER_SUCCESS,
    payload: furnitures
});

export const fetchFurnituresByFurniturerSuccess = (furnitures: Array<Furniture>): FetchFurnituresByFurniturerSuccessActionType => ({
    type: FETCH_PERFUMES_BY_PERFUMER_SUCCESS,
    payload: furnitures
});

export const fetchFurnituresByFilterParamsSuccess = (furnitures: Array<Furniture>): FetchFurnituresByFilterParamsSuccessActionType => ({
    type: FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS,
    payload: furnitures
});
