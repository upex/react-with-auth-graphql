import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Routes from './routes';
import Appbar from './components/Appbar';

function App() {

  const routes = Routes.map(({name, path, component}) => {
    return <Route
              exact
              key={name}
              path={path}
              component={component}
              />
  });

  return (
    <div className="App">
      <Router>
        <Appbar />
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
