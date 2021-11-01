import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Item } from '../components/catalogo/Item';
import { ItemListContainer } from '../components/catalogo/ItemListContainer';
import { Header } from '../components/header/Header';
import { Navegacion } from '../components/header/Navegacion';
import { ItemDetailContainer } from '../components/producto/ItemDetailContainer';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                
                <Navegacion />

                <Switch>
                    
                    <Route exact path="/category/:id" component={ Item } />
                    <Route exact path="/Item/:id" component={ ItemDetailContainer } />
                    <Route exact path="/" component={ ItemListContainer } />

                </Switch>
            </div>
        </Router>
    )
}
