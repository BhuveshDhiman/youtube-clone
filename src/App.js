import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import RecommendedVideos from './Recommended Videos/RecommendedVideos';
import SearchPage from './SearchPage/SearchPage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/search/:searchTerm'>
              <div className='app__page'>
                <Sidebar></Sidebar>
                <SearchPage></SearchPage>
              </div>
            </Route>
            <Route path='/'>
              <div className='app__page'>
                <Sidebar></Sidebar>
                <RecommendedVideos></RecommendedVideos>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
