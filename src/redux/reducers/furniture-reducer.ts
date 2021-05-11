import {Furniture, Review} from "../../types/types";
import {
    FETCH_FURNITURES,
    FETCH_FURNITURE_SUCCESS,
    FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS,
    FETCH_FURNITURES_BY_GENDER_SUCCESS,
    FETCH_FURNITURES_BY_FURNITURER_SUCCESS,
    FETCH_FURNITURES_BY_QUERY_SUCCESS,
    FETCH_FURNITURE_BY_QUERY_SUCCESS,
    FETCH_FURNITURE_REVIEWS_SUCCESS,
    FurnitureActionTypes,
} from "../action-types/furniture-action-types";

type InitialStateType = {
    furnitures: Array<Furniture>,
    furniture: Partial<Furniture>,
    reviews: Array<Review>
};

const initialState: InitialStateType = {
    furnitures: [],
    furniture: {},
    reviews: []
};

const reducer = (state: InitialStateType = initialState, action: FurnitureActionTypes): InitialStateType => {

    switch (action.type) {
        case FETCH_FURNITURES:
            return {...state, furnitures: action.payload};

        case FETCH_FURNITURES_BY_QUERY_SUCCESS:
            return {...state, furnitures: action.payload};

        case FETCH_FURNITURE_SUCCESS:
            return {...state, furniture: action.payload, reviews: action.payload.reviews};

        case FETCH_FURNITURE_REVIEWS_SUCCESS:
            return {...state, furniture: action.payload, reviews: action.payload.reviews};

        case FETCH_FURNITURE_BY_QUERY_SUCCESS:
            return {...state, furniture: action.payload, reviews: action.payload.reviews};

        case FETCH_FURNITURES_BY_GENDER_SUCCESS:
            return {...state, furnitures: action.payload};

        case FETCH_FURNITURES_BY_FURNITURER_SUCCESS:
            return {...state, furnitures: action.payload};

        case FETCH_FURNITURES_BY_FILTER_PARAMS_SUCCESS:
            return {...state, furnitures: action.payload};

        default:
            return state;
    }
};

export default reducer;
