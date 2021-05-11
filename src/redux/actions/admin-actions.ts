import {Order, FurnitureErrors, User} from "../../types/types";
import {
    AddFurnitureFailureActionType,
    AddFurnitureSuccessActionType,
    FETCH_ALL_USERS_ORDERS_SUCCESS,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_USER_INFO_SUCCESS,
    FETCH_USER_ORDERS_SUCCESS,
    FORM_RESET,
    GetAllUsersActionType,
    GetAllUsersOrdersActionType,
    GetUserInfoActionType,
    GetUserOrdersActionType,
    PERFUME_ADDED_FAILURE,
    PERFUME_ADDED_SUCCESS,
    PERFUME_UPDATED_FAILURE,
    PERFUME_UPDATED_SUCCESS,
    ResetActionType,
    UpdateFurnitureFailureActionType,
    UpdateFurnitureSuccessActionType
} from "../action-types/admin-action-types";

export const addFurnitureSuccess = (): AddFurnitureSuccessActionType => ({
    type: PERFUME_ADDED_SUCCESS
});

export const addFurnitureFailure = (error: FurnitureErrors): AddFurnitureFailureActionType => ({
    type: PERFUME_ADDED_FAILURE,
    payload: error
});

export const updateFurnitureSuccess = (): UpdateFurnitureSuccessActionType => ({
    type: PERFUME_UPDATED_SUCCESS
});

export const updateFurnitureFailure = (error: FurnitureErrors): UpdateFurnitureFailureActionType => ({
    type: PERFUME_UPDATED_FAILURE,
    payload: error
});

export const getAllUsersOrders = (orders: Array<Order>): GetAllUsersOrdersActionType => ({
    type: FETCH_ALL_USERS_ORDERS_SUCCESS,
    payload: orders
});

export const getUserOrders = (orders: Array<Order>): GetUserOrdersActionType => ({
    type: FETCH_USER_ORDERS_SUCCESS,
    payload: orders
});

export const getAllUsers = (users: Array<User>): GetAllUsersActionType => ({
    type: FETCH_ALL_USERS_SUCCESS,
    payload: users
});

export const getUserInfo = (user: User): GetUserInfoActionType => ({
    type: FETCH_USER_INFO_SUCCESS,
    payload: user
});

export const reset = (): ResetActionType => ({
    type: FORM_RESET
});
