import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booklist from "./booklist";
import UseStateBasics from "./UseStateBasics";
//import Github from "./Github";
import MultipleReturns from "./MultipleReturns";
import Ternary from "./Ternary";
import ShowAndHideComponent from "./Show-hide-Component";
import FromController from "./Controlledforms";
import ShortCircuit from "./ShortCircuit";
import Multipleforms from "./Multipleforms";
import Login from "./Login";
import UserRefBasics from "./UserRefBasics";
import PropDrilling from "./PropDrilling";
import ContextAPI from "./Context-API";
import PersonInfo from "./Person-info";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Error from "./Pages/Error";
import SharedLayout from "./Pages/SharedLayout";
import GithubPropdrilling from "./GithubPropdrilling";
import SingleProduct from "./Pages/SingleProduct";
import Products from "./Pages/Products";
import Counter from "./ReducerContext/CounterReducer";
import Login_1 from "./Pages/Login_1";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Pages/ProtectedRoute";
import AllProducts from "./Shopping_Cart/AllProducts";
import Cart from "./Shopping_Cart/Cart";
import ReduxCounter from "./ReduxCounter";
import Root from "./Root";
import Book from "./books";
import Books  from "./book";
import Controlledforms from "./Controlledforms";
import Singleperson from "./Singleperson";
import Github from "./Github";

import List from "./List";
import './App.css';
import NestedComponent from './nestedComponent';
import GitHubUserSearch from "./GithubUserSearch";
// import ReducerContext from './ReducerContext/CounterReducer';
// import CounterReducer from './ReducerContext/CounterReducer';



const App = () => {
  const [user, setUser] = useState("");
  console.log(user); //{fname:'', email:''}
  //const [cart,setcart] = useState([]);
  return (
    <BrowserRouter>
      <nav>Welcome to react Routing</nav>
      <Routes>
        <Route path="/" element={<Root></Root>}></Route>
        <Route path="/MyPages" element={<SharedLayout />}>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="login_1" element={<Login_1 user={user} setUser={setUser}></Login_1>}></Route>
          <Route path="allproducts" element={<AllProducts></AllProducts>}></Route>
          <Route path="dashboard" element={<Dashboard user={user} setUser={setUser}></Dashboard>}></Route>
          <Route path="allProducts" element={<AllProducts></AllProducts>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="counter" element={<Counter></Counter>}></Route>
          <Route path="reduxcounter" element={<ReduxCounter></ReduxCounter>}></Route>
          <Route path="booklist" element={<Booklist></Booklist>}></Route>
          <Route path="books" element={<Book></Book>}></Route>
          <Route path="contextapi" element={<ContextAPI></ContextAPI>}></Route>
          <Route path="controlledforms" element={<Controlledforms></Controlledforms>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="usestatebasics" element={<UseStateBasics></UseStateBasics>}></Route>
          <Route path="userrefbasics" element={<UserRefBasics></UserRefBasics>}></Route>
          <Route path="ternary" element={<Ternary></Ternary>}></Route>
          <Route path="shortcircuit" element={<ShortCircuit></ShortCircuit>}></Route>
          <Route path="showandhide" element={<ShowAndHideComponent></ShowAndHideComponent>}></Route>
          <Route path="propdrilling" element={<PropDrilling></PropDrilling>}></Route>
          <Route path="multiplereturns" element={<MultipleReturns></MultipleReturns>}></Route>
          <Route path="protectedroute" element={<ProtectedRoute></ProtectedRoute>}></Route>
          <Route path="multipleforms" element={<Multipleforms></Multipleforms>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="github" element={<Github></Github>}></Route>
          <Route path="singleproduct" element={<SingleProduct></SingleProduct>}></Route>
          <Route path="fromController" element={<FromController></FromController>}></Route>
          <Route path="error" element={<Error></Error>}></Route>
          <Route path="nestedcomponent" element={<NestedComponent></NestedComponent>}></Route>
  
        </Route>
      </Routes>
         
      <footer className="b">Thank you for Visiting</footer>
    </BrowserRouter>
    // <React.Fragment>
    //   {/* <GithubPropdrilling/> */}
    //   {/* <Counter /> */}
    //   <ReduxCounter />
    // </React.Fragment>
  );
};

export default App;
