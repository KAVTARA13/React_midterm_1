import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home/home';
import Navigation from './components/navigation/navigation';
import './App.css';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Navigation>
          <Route path="/">
            <Home />
          </Route>
        </Navigation>
      </Switch>
    </div>
  );
}

export default App;
