import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Listing from './pages/Listing';
import MFData from './components/MFData';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Listing} />
        <ProtectedRoute path="/details/:scheme" component={MFData} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
