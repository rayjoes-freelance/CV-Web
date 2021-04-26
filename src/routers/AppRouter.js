import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Contact from './../components/Contact';
import NotFound from './../components/NotFound';
import Header from './../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio';
import PortfolioId from '../components/PortfolioId';

const AppRouter  =() => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/portfolio/" component={Portfolio} exact={true}/>
    <Route path="/portfolio/:id" component={PortfolioId}/>
    <Route path="/contact" component={Contact}/>
    <Route component={NotFound}/>
    </Switch>
    <Footer/>
    </div>
</BrowserRouter>
);

export default AppRouter;