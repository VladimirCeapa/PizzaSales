import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[category,setCategory]=useState(0)
  const[sortItem,setSortItem]=useState(0)
  useEffect(() => {
    fetch("https://6895f213039a1a2b2890e7dc.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => { setItems(data); });
    setIsLoading(false);
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories index={category} onChange={(i)=>setCategory(i)} />
        <Sort item={sortItem} onChange={(i)=>setSortItem(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock {...item} />)}
      </div>
    </>
  );
};

export default Home;
