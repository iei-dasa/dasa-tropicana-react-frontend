import {combineReducers} from "redux";



const rootReducer = combineReducers({

});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
