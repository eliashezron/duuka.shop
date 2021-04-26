import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {AuthProvider} from './components/AuthContext'
import Home from './screens/Home';
import Error from './components/Error'
import NavBar from './components/NavBar';
import AdminScreen from './screens/Admin';
import LoginPage from './screens/Login'

function App() {
  return (
    <AuthProvider>
    <Router>
        <NavBar/>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/admin' component={AdminScreen} />
    <Route path='/login' component={LoginPage}/>
    <Route component={Error} exact/>
    </Switch>
   </Router>
   </AuthProvider>
  );
}

export default App;
