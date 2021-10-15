import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fruits from './components/Goods/Fruits/Fruits';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/fruits">
            <Fruits></Fruits>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
