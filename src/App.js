import {BrowserRouter as Router, Route} from 'react-router-dom';
//import of CSS
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css'
//Components
import UserHome from './components/UserHome';
import Nav from './components/Nav'
import Footer from './components/Footer'



function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path='/' component={UserHome}/>
      <Footer/>
    </Router>
  );
}

export default App;
