import React, { Suspense } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Header from './components/Header';

const Photo = React.lazy(() => import("./features/Photo/pages/index"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
