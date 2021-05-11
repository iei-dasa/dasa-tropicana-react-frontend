import {
    FURNITURE_ADDED_SUCCESS,
    FURNITURE_UPDATED_SUCCESS,
    FURNITURE_ADDED_FAILURE,
    FURNITURE_UPDATED_FAILURE,
    FETCH_USER_INFO_SUCCESS,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_ORDERS_SUCCESS,
    FETCH_USER_ORDERS_SUCCESS,
    FORM_RESET
} from "../action-types/admin-action-types";
import {Order, FurnitureErrors, User} from "../../types/types";
import {AdminActionTypes} from "../action-types/admin-action-types";

type InitialStateType = {
    orders: Array<Order>
    userOrders: Array<Order>
    users: Array<User>
    user: Partial<User>
    errors: Partial<FurnitureErrors>
    isFurnitureAdded: boolean
    isFurnitureEdited: boolean
};

const initialState: InitialStateType = {
    orders: [],
    userOrders: [],
    users: [],
    user: {},
    errors: {},
    isFurnitureAdded: false,
    isFurnitureEdited: false
};

const reducer = (state: InitialStateType = initialState, action: AdminActionTypes): InitialStateType => {

    switch (action.type) {
        case FURNITURE_ADDED_SUCCESS:
            return {...state, isFurnitureAdded: true, errors: {}};

        case FURNITURE_ADDED_FAILURE:
            return {...state, isFurnitureAdded: false, errors: action.payload};

        case FURNITURE_UPDATED_SUCCESS:
            return {...state, isFurnitureEdited: true, errors: {}};

        case FURNITURE_UPDATED_FAILURE:
            return {...state, isFurnitureEdited: false, errors: action.payload};

        case FETCH_USER_INFO_SUCCESS:
            return {...state, user: action.payload};

        case FETCH_ALL_USERS_SUCCESS:
            return {...state, users: action.payload};

        case FETCH_ALL_USERS_ORDERS_SUCCESS:
            return {...state, orders: action.payload};

        case FETCH_USER_ORDERS_SUCCESS:
            return {...state, userOrders: action.payload};

        case FORM_RESET:
            return {...state, isFurnitureAdded: false, isFurnitureEdited: false, errors: {}};

        default:
            return state;
    }
};

export default reducer;
