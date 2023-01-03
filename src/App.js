import "./App.css";
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Nav from "./nav";
import Cart from "./Cart";
function App() {
  let products = [
    {
      id: 1,
      productName: "Fancy Product",
      reviews: "⭐⭐⭐⭐⭐",
      price: "4000 ",
      actions: "Add to Cart",
    },
    {
      id: 2,
      productName: "Special Item",
      reviews: "⭐⭐⭐",
      price: " 3000",
      actions: "Add to Cart",
    },
    {
      id: 3,
      productName: "Sale Item",
      reviews: "⭐⭐⭐",
      price: "2500",
      actions: "Add to Cart",
    },
    {
      id: 4,
      productName: "Popular Item",
      reviews: "⭐⭐⭐⭐⭐",
      price: "4000",
      actions: "Add to Cart",
    },
    {
      id: 5,
      productName: "Sale Item",
      reviews: "⭐⭐⭐",
      price: "3500",
      actions: "Add to Cart",
    },

    {
      id: 6,
      productName: "Fancy Product",
      reviews: "⭐⭐⭐",
      price: " 2800",
      actions: "Add to Cart",
    },
    {
      id: 7,
      productName: "Special Item",
      reviews: "⭐⭐⭐⭐",
      price: "1800",
      actions: "Add to Cart",
    },
    {
      id: 8,
      productName: "Popular Item",
      reviews: "⭐⭐⭐⭐⭐",
      price: "400",
      actions: "Add to Cart",
    },
  ];
  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (card) => {
    console.log(card);
    setCart([...cartList, card]);
    setTotal(total + +card.price);
  };

  let removeCart = (items) => {
    console.log(items);
    let itemIndex = cartList.findIndex((item) => items.id === item.id);
    console.log(itemIndex);
    cartList.splice(itemIndex, 1);
    setCart([...cartList]);
    setTotal(total - items.price);
  };

  return (
    <>
      <Nav></Nav>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0"></p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-9">
            <div className="row">
              {products.map((card) => {
                return <Card card={card} addToCart={addToCart}></Card>;
              })}
            </div>
          </div>

          <div className="col-lg-3">
            <h3> Cart </h3>

            <Cart cartList={cartList} removeCart={removeCart}></Cart>
            <h3> Total:{total}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
