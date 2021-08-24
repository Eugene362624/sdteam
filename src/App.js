import Cookies from 'js-cookie';
import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useParams } from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import SignIn from './pages/loginPage/loginPage';
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from './pages/OrderPage/OrderPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUp from './pages/registerPage/registerPage';

function App() {
  const [token, setToken] = useState(Cookies.get('token') || false)
  
  return (
    <BrowserRouter>
      <Switch>
        {token ? <Route path="/profile" component={ProfilePage} /> : <Redirect push exact from="/profile" to="/login"/>}
        {token ? <Redirect from='/login' to="/profile" push/> : <Route path="/login" component={SignIn} />}
        <Route path="/register" component={SignUp} />
        <Route exact path='/' component={MainPage} />
        <Route path='/offers' exact component={OrderPage}/>
        <Route path='/offers/:service' component={OrderPage}/>
        <Route path="/about" component={AboutPage} />
        <Route path='/portfolio' component={PortfolioPage}/>
        <Route path="/contact" component={ContactPage} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
