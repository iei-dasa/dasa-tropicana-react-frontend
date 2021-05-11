import axios from 'axios';
import {Dispatch} from "redux";

import {API_BASE_URL} from "../../utils/constants/url";
import {
    getFurnitures,
    fetchFurnituresByQuerySuccess,
    fetchFurnitureByQuerySuccess,
    fetchFurnituresByFilterParamsSuccess,
    fetchFurnituresByGenderSuccess,
    fetchFurnituresByFurniturerSuccess,
    fetchFurnitureSuccess
} from "../actions/furniture-actions";
import {FilterParamsType, Furniture} from "../../types/types";
import {getAllFurnituresByQuery, getFurnitureByQuery} from "../../utils/graphql-query/furniture";

export const fetchFurnituresByQuery = () => async (dispatch: Dispatch) => {
    const response = await axios.post(API_BASE_URL + "/furnitures/graphql/furnitures", {query: getAllFurnituresByQuery});
    dispatch(fetchFurnituresByQuerySuccess(response.data.data.furnitures));
};

export const fetchFurnitureByQuery = (id: string) => async (dispatch: Dispatch) => {
    const response = await axios.post(API_BASE_URL + "/furnitures/graphql/furniture", {query: getFurnitureByQuery(id)});
    dispatch(fetchFurnitureByQuerySuccess(response.data.data.furniture));
};

export const fetchFurnitures = () => async (dispatch: Dispatch) => {
    const response = await axios.get(API_BASE_URL + "/furnitures");
    dispatch(getFurnitures(response.data));
};

export const fetchFurniture = (id: string) => async (dispatch: Dispatch) => {
    const response = await axios.get(API_BASE_URL + "/furnitures/" + id);
    dispatch(fetchFurnitureSuccess(response.data));
};

export const fetchFurnituresByFilterParams = (filter: FilterParamsType) => async (dispatch: Dispatch) => {
    const response = await axios.post(API_BASE_URL + "/furnitures/search", filter);
    dispatch(fetchFurnituresByFilterParamsSuccess(response.data));
};

export const fetchFurnituresByGender = (gender: { furnitureGender: string }) => async (dispatch: Dispatch) => {
    const response = await axios.post(API_BASE_URL + "/furnitures/search/gender", gender);
    dispatch(fetchFurnituresByGenderSuccess(response.data));
};

export const fetchFurnituresByFurniturer = (furniturer: { furniturer: string }) => async (dispatch: Dispatch) => {
    const response = await axios.post(API_BASE_URL + "/furnitures/search/furniturer", furniturer);
    dispatch(fetchFurnituresByFurniturerSuccess(response.data));
};

export const fetchFurnitureReviewsWS = (response: Furniture) => async (dispatch: Dispatch) => {
    dispatch(fetchFurnitureSuccess(response));
};
