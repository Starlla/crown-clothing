import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;