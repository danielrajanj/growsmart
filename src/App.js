import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom'
import CreateUser from './components/createUser';
import UserList from './components/userList';

const routes = 
  <BrowserRouter>
    <HashRouter>
        <Switch>
          <Route exact path='/'><UserList/></Route>
          <Route path='/create-user'><CreateUser/></Route>
        </Switch>
    </HashRouter>
  </BrowserRouter>

function App() {
  return (
    routes
  );
}

export default App;
