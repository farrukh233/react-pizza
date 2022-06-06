import "./scss/app.scss";
import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizzas.json";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://629d1448c6ef9335c0987c9c.mockapi.io/items")
      .then(res => {
        return res.json();
      })
      .then(items => {
        setItems(items);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {items.map(obj => (
              <PizzaBlock
                key={obj.id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                price={obj.price}
                sizes={obj.sizes}
                types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
