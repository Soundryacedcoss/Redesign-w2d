import React, { useContext, useEffect, useState } from "react";
// import ProductDetail from "./ProductDetail";
import "./ProductView.css";
import img1 from "./image/bannerimg.png";
import img2 from "./image/searchlogo.png";
import { ProductData } from "./App";
import ProductDetail from "./ProductDetail";
export const ProductView = () => {
  const[OptionValue,setOPtionValue]=useState()
const[Catagory,setCatagory]=useState("")
  // var ProductDetail1=ProductDetail
  const[ProductDetail1,setProductDetail1]=useState(ProductDetail)
  const data = useContext(ProductData);

  const [SearchArr, setSearchArr] = useState([]);
  // Adding product to cart
  const AddToCart = (event) => {
    for (let i = 0; i < ProductDetail.length; i++) {
      if (event.target.value === ProductDetail[i].id) {
       
        if (ProductDetail[i].quantity < 1) {
          alert("Product is added to cart")
          ProductDetail[i].quantity += 1;
          data.cartArr.push(ProductDetail[i]);
          data.setCartArr([...data.cartArr]);
        } else if (ProductDetail[i].quantity >= 1) {
          alert("Product is added to cart")
          ProductDetail[i].quantity += 1;
          data.setCartArr([...data.cartArr]);
        }
      }
    }
  };
  //*********************************** Searching the products*****************************************
  const [Inputvalue, setInputValue] = useState();
  let arr1=[]
  const SearchInputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const SearchButtonHandler = () => {
    // setInputValue()
    const filterProducts = ProductDetail;
    for (let i = 0; i < filterProducts.length; i++) {
      var temp = Inputvalue.toLowerCase();
      var name = filterProducts[i].name.toLowerCase();
      if (Inputvalue === "") {
        alert("Please enter name");
      } else if (name.match(temp)) {
        arr1.push(ProductDetail[i]);
         setSearchArr(arr1);
      }
    }
  };
  const ClearClickHandler=()=>{
    setSearchArr([])
    setInputValue(" ")
  }
function display(data){
  return(
          data.map((item) => (
            <div className="product">
              {" "}
              <div>
                {" "}
                <img
                  className="ProductImage"
                  src={item.image}
                  alt=""
                  srcset=""
                />{" "}
              </div>{" "}
              <br />
              <p>
                {" "}
                <b className="title">{item.name}</b><br />
                <span>{item.price}rs</span> <br />
                <span>{item.rating}</span>
              </p>{" "}
              <button
                value={item.id}
                onClick={AddToCart}
                className="add-to-cart"
              >
                Add to CART
              </button>
            </div>
          )))
        
}

// here i am taking the value of select catagory

const SelectCatagoryHandler=(e)=>{
  setCatagory(e.target.value)
  console.log(Catagory);
}
const SelectHandler=(e)=>{
  setOPtionValue(e.target.value)
}
// Here i am filtering the product BY price **********************************

const FilterButtonHandler=()=>{
  console.log('hgrefg');
  console.log(Catagory);
  if (Catagory==="Price" && OptionValue==="Assending") {
    console.log(OptionValue);
    const filterProducts=ProductDetail
      filterProducts.sort(function(a, b){return a.price-b.price});
      setProductDetail1([...filterProducts])
      // console.log(FilterArr);
      
  }
  else if(Catagory==="Price" && OptionValue==="Dessending"){
    const filterProducts=ProductDetail
      filterProducts.sort(function(a, b){return b.price-a.price});
      setProductDetail1([...filterProducts])
  }
  else if(Catagory==="Rating" && OptionValue==="Dessending"){
    const filterProducts=ProductDetail
      filterProducts.sort(function(a, b){return b.rating.length-a.rating.length});
      setProductDetail1([...filterProducts])
  }
  else if(Catagory==="Rating" && OptionValue==="Assending"){
    const filterProducts=ProductDetail
      filterProducts.sort(function(a, b){return a.rating.length-b.rating.length});
      setProductDetail1([...filterProducts])
  }
  // console.log(FilterArr[0].rating.length);
}

  return (
    <div className="ProductViewpage">
      <img className="OfferBannerImage" src={img1} alt="" />
      <div className="SearchArea">
        <input
          className="SearchINput"
          onChange={SearchInputHandler}
          type="text"
          placeholder="Search here"
          value={Inputvalue}
        />{" "}
        <img
          className="SearchIcon"
          onClick={SearchButtonHandler}
          src={img2}
          alt=""
        />
        <button className="ClearButon" onClick={ClearClickHandler}>Clear Result</button>
        <div className='FilerterDropDown'>
        <select name="" onChange={SelectCatagoryHandler}>
            <option value="">Filter</option>
            <option value="Price">Price</option>
            <option value="Rating">Rating</option>
        </select>
        <select name="" onChange={SelectHandler}>
            <option value="">Filter</option>
            <option value="Assending">Assending</option>
            <option value="Dessending">Dessending</option>
        </select>
        <button onClick={FilterButtonHandler} className='filterButton'>Filter</button>
        </div> 
      </div>
      <div id="products">
        {display(SearchArr)}
      </div>
      <div id="main">
        <div id="products">
          {display(ProductDetail1)}
         
        </div>
      </div>
    </div>
  );
};
