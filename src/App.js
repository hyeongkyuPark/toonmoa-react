import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHeaderContainer from './modules/mainHeader/MainHeaderContainer';
import NotFoundPage from './pages/404/NotFoundPage';
import Home from './pages/home/Home';
import MyStore from './pages/myStore/MyStore';
import AllToon from './pages/allToon/AllToon';
import Notice from './pages/notice/Notice';
import MyPage from './pages/myPage/MyPage';
import MainFooter from './modules/mainFooter/MainFooter';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <MainHeaderContainer />
      <ScrollToTop />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/mystore' component={MyStore} />
        <Route path='/alltoon' component={AllToon} />
        <Route path='/notice' component={Notice} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/' component={NotFoundPage} />
      </Switch>
      <MainFooter />
    </div>
  );
}

export default App;
