import React from 'react';
import Home from '../pages/Home';
import Partenaire from '../pages/Partenaire';
import Commande from '../pages/Commande';
import Info from '../pages/Info';
import Pub from '../pages/Pub';
import Catalogue from '../pages/Catalogue';
import Reglages from '../pages/Reglages';
import Clients from '../pages/Clients';
import NotFound from '../pages/NotFound';
import Login from '../pages/Log/Login';
import ForgetPassword from '../pages/Log/ForgetPassword';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../App.css';

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/partenaire" component={Partenaire} />
          <Route exact path="/commande" component={Commande} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/pub" component={Pub} />
          <Route exact path="/catalogue" component={Catalogue} />
          <Route exact path="/reglages" component={Reglages} />
          <Route exact path="/clients" component={Clients} />
          <Route path="/login" component={Login} />
          <Route path="/forgetPassword" component={ForgetPassword} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default index;
