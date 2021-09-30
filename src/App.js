import {BrowserRouter as Router, Route} from 'react-router-dom';
//import of CSS
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';
//import of JS
import 'jquery';
import 'popper.js';
//Components
import UserHome from './components/UserHome';



function App() {
  return (
    <Router>
      <Route exact path='/' component={UserHome}/>
    </Router>
  );
}

export default App;
