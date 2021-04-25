import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;