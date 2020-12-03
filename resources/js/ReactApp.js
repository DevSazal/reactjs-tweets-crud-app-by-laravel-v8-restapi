import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import TestPage from './pages/Test';

function ReactApp() {
    return (
        <div className="App">
          <Router>
            <Switch>
              {/* Router Bug Fixed:: you have use "exact" for root url or you have to keep root url route at the end of all defined route */}
              <Route path="/test" component={TestPage} />
              <Route path="/" component={MainPage} />
                  {/*
                    <Route path="/profile">
                      <ProfilePage />
                    </Route>
                    <Route path="/">
                      <HomePage />
                    </Route>
                  */}
            </Switch>
          </Router>
        </div>
    );
}

export default ReactApp;

if (document.getElementById('app')) {
    ReactDOM.render(<ReactApp />, document.getElementById('app'));
}
