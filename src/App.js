import './App.css';
import React,{useState,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./layout/footer"
import Header from './layout/Header';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Cats from './pages/Cats';
import Cart from "./pages/Cart";
import PageNotFound from './pages/PageNotFound';
import { ToastContainer, toast } from "react-toastify";
import { MyContext } from './Context/MyContext';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

function App() {

  const [cartItem, setCartItem] = useState([]);
  const[user,setUser] = useState(null);

  const styleObj = {
    background: "#3f3f3f",
    height: "100vh",
  }

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error"
      });
      return;
    }
    
    setCartItem([...cartItem, item]);
    toast("added in cart", {
      type: "success"
    });
   
  };

  const buyNow = () => {
    setCartItem([]);

    toast("Booked With Love. We will send all the adoption details to your registered mail id very soon.", {
      type: "success"
    });
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };
  return (
    
    
    <Router style={styleObj}>
    <ToastContainer/>
    <MyContext.Provider value={{cartItem,setCartItem,addInCart,buyNow,removeItem,user,setUser}}>
    <Header/>
    <Switch>
    <Route exact path="/" component={Cats}/>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/signin" component={Signin}/>
    <Route exact path="*" component={PageNotFound}/>
    </Switch>

    <Footer/>
    </MyContext.Provider>
    </Router>
    
    

  );
}

export default App;
