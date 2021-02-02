import React, {useEffect} from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';
import Footer from './Footer';

const promise = loadStripe("pk_test_yddzv5xgxyiIqcxetkxtIJRo0016zZnjNa")

function App() {
  const[{user}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The User is :", authUser)

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path="/" >
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>           
      </div>
    </Router>
  );
}

export default App;
