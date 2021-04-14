import logo from './logo.svg';
import './App.css';
import { Navhead } from './screens/Navhead';
import  Offers  from './screens/Offers';
import { Categories } from './screens/Categories';
import { Blogs } from './screens/Blogs';
import { Weeklyres } from './screens/Weeklyres';
import { Handpicked } from './screens/Handpicked';
import { Footer } from './screens/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Megamenu } from './screens/Megamenu';
import { Seafood } from './screens/Seafood';
import { Streetfood } from './screens/Streetfood';
import { Thaifood } from './screens/Thaifood';
import { Breakfast } from './screens/Breakfast';
import { Contact } from './screens/Contact';

function App() {
  return (
    <Router>
    <div style={{backgroundColor:"#faf8f0"}} >
      
        <Switch>
        <Route path="/megamenu">
          <Megamenu/>
          </Route>
        </Switch>
        <Switch>
        <Route path="/seafood">
         <Seafood/>
          </Route>
        </Switch>
        <Switch>
        <Route path="/streetf">
         <Streetfood/>
          </Route>
        </Switch>
        <Switch>
        <Route path="/thaif">
         <Thaifood/>
          </Route>
        </Switch>
        <Switch>
        <Route path="/breakf">
        <Breakfast/>
          </Route>
        </Switch>
        <Switch>
        <Route path="/contact">
        <Contact/>
          </Route>
        </Switch>
        
        
    
     <Navhead/> 
      <Offers/>
    <Categories/>
    <Blogs/>
    <Weeklyres/>
    <Handpicked/>
    <Footer/>
    
    </div>
    </Router>
  );
}

export default App;
