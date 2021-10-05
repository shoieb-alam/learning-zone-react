import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Success from './components/Success/Success';
import CourseField from './components/CourseField/CourseField';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          {/* default path  */}
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/courses'>
            <CourseField></CourseField>
          </Route>

          <Route path='/success'>
            <Success></Success>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
