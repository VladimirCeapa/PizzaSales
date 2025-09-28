import { useEffect, useState } from "react";

import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import Skeleton from "./components/Skeleton";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://6895f213039a1a2b2890e7dc.mockapi.io/items")
      .then((res) => res.json())

      .then((data) => {
        setItems(data);
      });
    setIsLoading(false);
  }, []);
  console.log(items);
  return (
    <>
      <div className="wrapper">
        <Header />
      
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading ? (
               [...new Array(6)].map((_,index)=><Skeleton key={index}/>) 
              ) : (
                items.map((item) => <PizzaBlock {...item} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
