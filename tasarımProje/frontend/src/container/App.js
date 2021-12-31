import React from 'react';
import UserSignupPage from '../pages/UserSignupPage';
import LoginPage from '../pages/LoginPage';
import LanguageSelector from '../components/LanguageSelector';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { useSelector } from 'react-redux';
import Users from '../pages/Users';
import Connection from '../pages/Connection';
import AboutUs from '../pages/AboutUs';
import karma from '../pages/karma';
import bhakti from '../pages/bhakti';
import hatha from '../pages/hatha';


const App = () => {
  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }));

  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          <Route path="/users" component={Users} />
          <Route path="/signup" component={UserSignupPage} />
          <Route path="/user/:username" component={UserPage} />
          <Route path="/connection" component={Connection} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/karma" component={karma} />
          <Route path="/bhakti" component={bhakti} />
          <Route path="/hatha" component={hatha} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <LanguageSelector />
    </div>
  );
};

export default App;
