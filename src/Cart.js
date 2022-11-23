// import * as React from 'react';
import React, { useContext, useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import img2 from "./image/cute-shoppingcart.webp";
// import { ProductData } from './App'
import './Cart.css'
import { ProductData } from "./App";
export default function Cart() {
  const [Price, setPrice] = useState();
  const Pro_data=useContext(ProductData)
  const [Emptymsg, setEmptyMsg] = useState();
  const [Display, setDisplay] = useState();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const BuyButtonHandler = () => {
    alert("Order Placed");
    EmptyButtonHandler()
    
};
  let totalprice = 0;
  useEffect(() => {
    for (let i = 0; i < Pro_data.cartArr.length; i++) {
      totalprice +=
      Pro_data.cartArr[i].quantity * Pro_data.cartArr[i].price;
      setPrice(totalprice);
    }
    if (Pro_data.cartArr.length === 0) {
      setDisplay({ display: "none" });
      setEmptyMsg({ display: "block" });
    }
    else{
      setDisplay({ display: "block" });
      setEmptyMsg({ display: "none" });
    }
  }, [Pro_data.cartArr]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function EmptyButtonHandler() {
    window.location.reload(false);
  }
   // increase Button Functionaliy
   const IncreaseHandler = (val) => {
    for (let i = 0; i < Pro_data.cartArr.length; i++) {
      if (val === Pro_data.cartArr[i].id) {
        Pro_data.cartArr[i].quantity += 1;
        Pro_data.setCartArr([...Pro_data.cartArr]);
      }
    }
  };
  // decrese button functinality
  const DecreseHandler = (val) => {
    for (let i = 0; i < Pro_data.cartArr.length; i++) {
      if (val ===Pro_data.cartArr[i].id) {
        if (Pro_data.cartArr[i].quantity <= 1) {
          alert("Warning ! your product will delete from cart");
          Pro_data.cartArr.splice(i, 1);
          Pro_data.setCartArr([...Pro_data.cartArr]);
        } else {
          Pro_data.cartArr[i].quantity -= 1;
          Pro_data.setCartArr([...Pro_data.cartArr]);
        }
      }
    }
  };
 const RemoveHandler=(val)=>{
  for (let i = 0; i < Pro_data.cartArr.length; i++) {
      if (val ===Pro_data.cartArr[i].id) {
          alert("Warning ! your product will delete from cart");
          Pro_data.cartArr.splice(i, 1);
          Pro_data.setCartArr([...Pro_data.cartArr]);
      }
    }
 }
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 750 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="Cart">
      <p className="EmptyCartPara" style={Emptymsg}>
        Your CART is empty
      </p>
      <div style={Display} className="cartDiv">
        <div className="ProductDetail">
          {Pro_data.cartArr.map((item) => (
            <div className="CartDivDeatail">
              <div className="Width">
                <img className="CartImgDiv Width" src={item.image} alt="" />
              </div>{" "}
              <div className="ProductNameDiv Width">
                {" "}
                <p>{item.name}</p> <p>₹{item.price}</p>
              </div>{" "}
              <div className="quantityButtonDiv">
                <button
                  className="Quantitybutton"
                  onClick={() => IncreaseHandler(item.id)}
                >
                  +
                </button>
                <b style={{marginLeft:"35%"}}>{item.quantity}</b>
                <button
                  className="Quantitybutton"
                  onClick={() => DecreseHandler(item.id)}
                >
                  -
                </button>{" "}
              </div>
              <div style={{marginTop:"80px", color:"red",fontSize:"20px"}} onClick={()=>RemoveHandler(item.id)}>remove</div>
            </div>
          ))}
        </div>
        <p className="TotalPrice">
          Total: ₹{Price}
        </p>{" "}
        <br />
        <br />
        <div style={Display}>
          <button value="true" onClick={BuyButtonHandler} className="Button1 margin">
            Buy Now
          </button>{" "}
          <button className="Button1" onClick={EmptyButtonHandler}>
            Empty Cart
          </button>
        </div>
      </div>
    </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <img className="CartLogo" src={img2} alt="" /> <b style={{fontSize:"20px"}}>{Pro_data.cartArr.length}</b> </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}