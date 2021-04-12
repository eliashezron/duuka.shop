import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './screens/Home';
import Error from './components/Error'
import NavBar from './components/NavBar';
import AdminScreen from './screens/Admin';

function App() {
  return (
    <Router>
        <NavBar/>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/admin' component={AdminScreen} />
    <Route component={Error} exact/>
    </Switch>
   </Router>
  );
}

export default App;
