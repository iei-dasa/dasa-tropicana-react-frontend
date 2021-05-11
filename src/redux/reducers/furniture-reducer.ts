import {Furniture, Review} from "../../types/types";
import {
    FETCH_PERFUMES,
    FETCH_PERFUME_SUCCESS,
    FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS,
    FETCH_PERFUMES_BY_GENDER_SUCCESS,
    FETCH_PERFUMES_BY_PERFUMER_SUCCESS,
    FETCH_PERFUMES_BY_QUERY_SUCCESS,
    FETCH_PERFUME_BY_QUERY_SUCCESS,
    FETCH_PERFUME_REVIEWS_SUCCESS,
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
        case FETCH_PERFUMES:
            return {...state, furnitures: action.payload};

        case FETCH_PERFUMES_BY_QUERY_SUCCESS:
            return {...state, furnitures: action.payload};

        case FETCH_PERFUME_SUCCESS:
            return {...state, furniture: action.payload, reviews: action.payload.reviews};

        case FETCH_PERFUME_REVIEWS_SUCCESS:
            return {...state, furniture: action.payload, reviews: action.payload.reviews};

        case FETCH_PERFUME_BY_QUERY_SUCCESS:
            return {...state, furniture: action.payload, reviews: action.payload.reviews};

        case FETCH_PERFUMES_BY_GENDER_SUCCESS:
            return {...state, furnitures: action.payload};

        case FETCH_PERFUMES_BY_PERFUMER_SUCCESS:
            return {...state, furnitures: action.payload};

        case FETCH_PERFUMES_BY_FILTER_PARAMS_SUCCESS:
            return {...state, furnitures: action.payload};

        default:
            return state;
    }
};

export default reducer;
