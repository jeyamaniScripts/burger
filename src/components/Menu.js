import React from "react";
import Food from "./layouts/Food";
import Snacks from "./layouts/Snacks";
import Beverage from "./layouts/Beverage";

const Menu = () => {
  return (
    <section id="menu">
      <div className="container">
        <div className=" max-w-md mx-auto text-center">
          <h2 className=" section__title">our best menu</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Welcome to our restaurant's best menu selection! Indulge in a
            culinary journey like no other, where every dish is crafted with
            passion and expertise. From savory burgers to delightful snacks and
            refreshing beverages, we have something to satisfy every craving.
            Join us and treat yourself to an unforgettable dining experience.
            Bon appétit!
          </p>
          <div>
            <ul className=" flex flex-wrap justify-center gap-3 py-10">
              <li className=" btn btn-primary">All</li>
              <li className=" btn btn-primaryColorLight">Food</li>
              <li className=" btn btn-primaryColorLight">Snack</li>
              <li className=" btn btn-primaryColorLight">Bevarage</li>
            </ul>
          </div>
        </div>
        <div>
          <Food />
          <Snacks />
          <Beverage />
        </div>
      </div>
    </section>
  );
};

export default Menu;
