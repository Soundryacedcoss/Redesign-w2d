import React from 'react'

import "./Navbar.css";
import img1 from "./image/Screenshot_2022-11-22_11-50-33.png";
import { ProductView } from './ProductView';
import { Category } from './Category';
import { LoginPage } from './LoginPage';
import { SignUp } from './SignUp';
import Cart from './Cart';
export const Navbar = () => {  
  return (
    <>
    <div className="Navbar">
      <div className="Row1">
        <div>Download WAY2DOOR app</div>
        <div className='LOcationDiv'>Deliery Location :Lucknow(226010)</div>
        <div className="Row1-col2">
       <div className='Log'><LoginPage/>
        </div> 
        <div className='Log'><SignUp/></div>
       
        </div>
      </div>
      <div className="Row2-col1">
        <div className='imagelogo'><img src={img1} alt="" /></div>
        
        <p className='Row2-col2'>
          Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा
        </p>
        <div className='navCartDiv'>{<Cart/>}</div>
      </div>
      <hr />
      <p className="Row3">Fruits and vegetable store</p>
    </div>
     <div className='MidPage'>
     <Category/>
     <ProductView/>
     </div>
     </>
  );
};
