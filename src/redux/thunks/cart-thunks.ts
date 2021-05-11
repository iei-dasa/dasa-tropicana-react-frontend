import axios from 'axios';

import {API_BASE_URL} from "../../utils/constants/url";
import {Furniture} from "../../types/types";
import {
    calculateCartPriceSuccess,
    clearCartSuccess,
    fetchCartSuccess,
    loadingCart,
    stopLoadingCart
} from "../actions/cart-actions";
import {Dispatch} from "redux";

export const fetchCart = (data: Array<number>) => async (dispatch: Dispatch) => {
    dispatch(loadingCart());
    const response = await axios.post(API_BASE_URL + "/users/cart", data);
    const furnitures: Map<number, number> = new Map(JSON.parse(<string>localStorage.getItem("furnitures")));
    let total: number = 0;

    furnitures.forEach((value: number, key: number) => {
        const furniture: Furniture = response.data.find((furniture: { id: number; }) => furniture.id === key);
        total += (furniture.price * value);
    });
    dispatch(fetchCartSuccess(response.data));
    dispatch(calculateCartPriceSuccess(total));
};

export const calculateCartPrice = (furnitures: Array<Furniture> | any) => (dispatch: Dispatch) => {
    const furnituresFromLocalStorage: Map<number, number> = new Map(JSON.parse(<string>localStorage.getItem("furnitures")));
    let total: number = 0;

    furnituresFromLocalStorage.forEach((value: number, key: number) => {
        const furniture: Furniture = furnitures.find((furniture: { id: number; }) => furniture.id === key);
        total += furniture.price * value;
    });
    dispatch(calculateCartPriceSuccess(total));
};

export const clearCart = () => (dispatch: Dispatch) => {
    dispatch(clearCartSuccess());
};

export const loadCart = () => (dispatch: Dispatch) => {
    dispatch(stopLoadingCart());
};
