import {Order, FurnitureErrors, User} from "../../types/types";

export const FETCH_ALL_USERS_ORDERS_SUCCESS = "FETCH_ALL_USERS_ORDERS_SUCCESS";
export const FETCH_USER_ORDERS_SUCCESS = "FETCH_USER_ORDERS_SUCCESS";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FORM_RESET = "FORM_RESET";
export const PERFUME_ADDED_FAILURE = "PERFUME_ADDED_FAILURE";
export const PERFUME_ADDED_SUCCESS = "PERFUME_ADDED_SUCCESS";
export const PERFUME_UPDATED_FAILURE = "PERFUME_UPDATED_FAILURE";
export const PERFUME_UPDATED_SUCCESS = "PERFUME_UPDATED_SUCCESS";

export type AddFurnitureSuccessActionType = { type: typeof PERFUME_ADDED_SUCCESS };
export type AddFurnitureFailureActionType = { type: typeof PERFUME_ADDED_FAILURE, payload: FurnitureErrors };
export type UpdateFurnitureSuccessActionType = { type: typeof PERFUME_UPDATED_SUCCESS};
export type UpdateFurnitureFailureActionType = { type: typeof PERFUME_UPDATED_FAILURE, payload: FurnitureErrors };
export type GetAllUsersOrdersActionType = { type: typeof FETCH_ALL_USERS_ORDERS_SUCCESS, payload: Array<Order> };
export type GetUserOrdersActionType = { type: typeof FETCH_USER_ORDERS_SUCCESS, payload: Array<Order> };
export type GetAllUsersActionType = { type: typeof FETCH_ALL_USERS_SUCCESS, payload: Array<User> };
export type GetUserInfoActionType = { type: typeof FETCH_USER_INFO_SUCCESS, payload: User };
export type ResetActionType = { type: typeof FORM_RESET };

export type AdminActionTypes = AddFurnitureSuccessActionType | AddFurnitureFailureActionType |
    UpdateFurnitureSuccessActionType | UpdateFurnitureFailureActionType | GetAllUsersOrdersActionType |
    GetUserOrdersActionType | GetAllUsersActionType | GetUserInfoActionType | ResetActionType;
