import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        {
          Routes.map(item => (
            <Route
              key={item.name}
              path={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))
        }
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
