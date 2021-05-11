import React, {FC, useEffect} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {IMG_URL} from "../../utils/constants/url";
import {fetchFurnitures, fetchFurnituresByQuery} from "../../redux/thunks/furniture-thunks"
import "./FurnitureCardsSlider.css";
import {AppStateType} from "../../redux/reducers/root-reducer";
import {Furniture} from "../../types/types";

const FurnitureCardsSlider: FC = () => {
    const dispatch = useDispatch();
    const furnitures: Array<Furniture> = useSelector((state: AppStateType) => state.furniture.furnitures);

    useEffect(() => {
        // GraphQL example
        dispatch(fetchFurnituresByQuery());
        // dispatch(fetchFurnitures());
    }, []);

    const addCarouselItems = (array: Array<Furniture>, counter: number) => {
        const furnituresId: Array<number> = [26, 43, 46, 106, 34, 76, 82, 85, 27, 39, 79, 86];

        return (
            <Carousel.Item>
                <div className="card-deck">
                    {array.map((furniture: Furniture) => {
                        for (let i = counter; i < counter + 4; i++) {
                            if (furniture.id === furnituresId[i]) {
                                return (
                                    <div className="card" key={furniture.id}>
                                        <img className="d-block mx-auto w-50"
                                             src={IMG_URL + `${furniture.filename}`}/>
                                        <div className="card-body text-center">
                                            <h5>{furniture.furnitureTitle}</h5>
                                            <h6>{furniture.furniturer}</h6>
                                            <h6>$<span>{furniture.price}</span>.00</h6>
                                            <Link to={`/product/${furniture.id}`}>
                                            <span className="btn btn-dark">
                                                SHOW MORE
                                            </span>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    })}
                </div>
            </Carousel.Item>
        );
    };

    const settings = {controls: false}

    return (
        <div>
            <div className="container text-center my-3">
                <h3>PERSONALLY RECOMMENDED</h3>
            </div>
            <div className="container mt-5" id="indicators">
                <form method="get" action="/">
                    <Carousel {...settings}>
                        {addCarouselItems(furnitures, 0)}
                        {addCarouselItems(furnitures, 4)}
                        {addCarouselItems(furnitures, 8)}
                    </Carousel>
                </form>
            </div>
        </div>
    );
};

export default FurnitureCardsSlider;
