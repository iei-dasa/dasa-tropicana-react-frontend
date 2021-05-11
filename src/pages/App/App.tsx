import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";


import Footer from "../../component/Footer/Footer";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../component/NavBar/NavBar";

import OAuth2RedirectHandler from "../../utils/oauth2/OAuth2RedirectHandler";

const App: FC = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
            </Switch>
            <Footer/>
        </>
    );
};

export default App;
