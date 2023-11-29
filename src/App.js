import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import styled from "styled-components";
import Checkout from "./Components/Checkout";
import Address from "./Components/Address";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import SignUp from "./Components/SignUp";


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51OHgI1SGfiiEPpya0F5HPWnQyD70uqiKbjVemQ36IsmHViCn8q5KP1BZhYTkhWhXFUP7MXF42NmB6MssjbH5qvx600vYJLRA3Z"
);

function App() {

 
  return (
    <Router>
    <Container>
     <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/login" element = {<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path = "/signup" element = {<SignUp />}/>
      <Route path="/address" element={<Address />} />
      <Route path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }/>
          
     </Routes>
      
    </Container>
    </Router>
    
  );
}
const Container = styled.div`
   width: 100vw;
`;

export default App;
