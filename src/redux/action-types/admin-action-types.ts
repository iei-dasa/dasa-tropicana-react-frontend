import {Order, FurnitureErrors, User} from "../../types/types";

export const FETCH_ALL_USERS_ORDERS_SUCCESS = "FETCH_ALL_USERS_ORDERS_SUCCESS";
export const FETCH_USER_ORDERS_SUCCESS = "FETCH_USER_ORDERS_SUCCESS";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FORM_RESET = "FORM_RESET";
export const FURNITURE_ADDED_FAILURE = "FURNITURE_ADDED_FAILURE";
export const FURNITURE_ADDED_SUCCESS = "FURNITURE_ADDED_SUCCESS";
export const FURNITURE_UPDATED_FAILURE = "FURNITURE_UPDATED_FAILURE";
export const FURNITURE_UPDATED_SUCCESS = "FURNITURE_UPDATED_SUCCESS";

export type AddFurnitureSuccessActionType = { type: typeof FURNITURE_ADDED_SUCCESS };
export type AddFurnitureFailureActionType = { type: typeof FURNITURE_ADDED_FAILURE, payload: FurnitureErrors };
export type UpdateFurnitureSuccessActionType = { type: typeof FURNITURE_UPDATED_SUCCESS};
export type UpdateFurnitureFailureActionType = { type: typeof FURNITURE_UPDATED_FAILURE, payload: FurnitureErrors };
export type GetAllUsersOrdersActionType = { type: typeof FETCH_ALL_USERS_ORDERS_SUCCESS, payload: Array<Order> };
export type GetUserOrdersActionType = { type: typeof FETCH_USER_ORDERS_SUCCESS, payload: Array<Order> };
export type GetAllUsersActionType = { type: typeof FETCH_ALL_USERS_SUCCESS, payload: Array<User> };
export type GetUserInfoActionType = { type: typeof FETCH_USER_INFO_SUCCESS, payload: User };
export type ResetActionType = { type: typeof FORM_RESET };

export type AdminActionTypes = AddFurnitureSuccessActionType | AddFurnitureFailureActionType |
    UpdateFurnitureSuccessActionType | UpdateFurnitureFailureActionType | GetAllUsersOrdersActionType |
    GetUserOrdersActionType | GetAllUsersActionType | GetUserInfoActionType | ResetActionType;
