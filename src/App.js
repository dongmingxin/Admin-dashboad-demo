import React, { Component } from 'react';
import CustomerPage from './mian/CRM/existingCustomers';
import StaffMain from './mian/admin/staffMain';
import WelcomePage from './mian/store/welcome';
import StaffForm from './mian/admin/staffForm';
import OrderNotification from './mian/admin/orderNotification';
import OrderProcessMenu from './mian/admin/orderProcessMenu';
import StaffNotification from './mian/admin/staffNotification';

import NavBar from './navbar/navbar';
import { Route, Switch } from 'react-router-dom'
import './style/index.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <Switch>
          <Route exact path="/welcome" component={WelcomePage}/>
          <Route exact path="/staff/:id" component={StaffForm}/>
          <Route exact path="/customer" component={CustomerPage}/>
          <Route exact path="/staff" component={StaffMain}/>
          <Route exact path="/order" component={OrderNotification}/>
          <Route exact path="/order/:id" component={OrderProcessMenu}/>
          <Route exact path="/notification" component={StaffNotification}/>
        </Switch>
      </div>
    );
  }
}

export default App;
