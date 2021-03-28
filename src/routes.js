import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Boards from './pages/Boards'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/boards" exact component={Boards}/>
            </Switch>
        </BrowserRouter>
    );
}