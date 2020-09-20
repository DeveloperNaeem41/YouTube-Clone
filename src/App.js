import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {Switch,Route} from 'react-router-dom';
import SearchPage from './SearchPage';
import './App.css';

function App() {
  return (
    <>
    

    <div className="App">

    <Header />

    <Switch>
      <Route path='/search/:searchterm'  >
      <div className="App_page">
      <Sidebar />
      <SearchPage />
      </div>
      </Route>

      <Route path='/'>
      <div className="App_page">
      <Sidebar />
      <RecommendedVideos />

      </div>
      </Route>
    </Switch>

      {/* <Header /> */}

      {/* <div className="App_page">
      <Sidebar />
      <RecommendedVideos />

      </div> */}
          </div>
          </>
  );
}

export default App;
