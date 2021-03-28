import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Boards from './pages/Boards'
import Board from './pages/Board'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Boards}/>
                <Route path="/board/:id" exact component={Board}/>
            </Switch>
        </BrowserRouter>
    );
}