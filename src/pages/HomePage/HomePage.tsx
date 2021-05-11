import React, {FC, useEffect} from 'react';

import HomePageTheme from "../../component/HomePageTheme/HomePageTheme";
import CarouselImageSlider from "../../component/CarouselImageSlider/CarouselImageSlider";
import SliderBrands from "../../component/SliderBrands/SliderBrands";
import SliderCards from "../../component/FurnitureCardsSlider/FurnitureCardsSlider";
import {useDispatch} from "react-redux";
import {fetchCart} from "../../redux/thunks/cart-thunks";

const HomePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const furnituresFromLocalStorage: Map<number, number> = new Map(JSON.parse(localStorage.getItem("furnitures") as string));
        dispatch(fetchCart(Array.from(furnituresFromLocalStorage.keys())))
    }, []);

    return (
        <div>
            <CarouselImageSlider/>
            <SliderBrands/>
            <HomePageTheme/>
            <SliderCards/>
        </div>
    );
};

export default HomePage;
