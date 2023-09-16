import Discount from "../../components/discount/Discount";
import Navbar from "../../components/nav/Navbar";
import ProductCard from "../../components/card/ProductCard";

import { products } from "../../data/products";
const Home = () => {
  return (
    <div>
      <section className="mt-32 ">
        <Navbar />
        <Discount />
      </section>

      <section id="pizza" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Пицца</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Пицца")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
      <section id="sushi" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Суши</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Суши")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
      <section id="snack" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Закуски</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Закуски")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
      <section id="desert" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Десерты</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Десерты")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
      <section id="drink" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Напитки</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Напитки")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
      <section id="sauce" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Соусы</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Соусы")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
      
   
      <section id="combo" className="py-20">
        <div className="flex justify-between mb-5">
          <h1 className="text-3xl font-bold">Комбо</h1>

          <select name="price" id="price">
            <option value="">All Poducts</option>
            <option value="New">New</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {products
            .filter((el) => el.category === "Комбо")
            .map((pr) => (
              <div key={pr.id} className="">
                <ProductCard {...pr} />
              </div>
            ))}
        </div>
      </section>
   
     
    </div>
  );
};

export default Home;
