import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './screens/Home';
import Error from './components/Error'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
        <NavBar/>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route component={Error} exact/>
    </Switch>
   </Router>
  );
}

export default App;
