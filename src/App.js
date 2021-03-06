import HomePage from './pages/homepage/homepage.component';
import './App.css';
import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
