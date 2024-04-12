import React from "react";
import burger1 from "../../assets/img/burger-1.png";
import burger2 from "../../assets/img/burger-2.png";
import burger3 from "../../assets/img/burger-3.png";
import burger4 from "../../assets/img/burger-4.png";
import burger5 from "../../assets/img/burger-5.png";

const Food = () => {
  const food = [
    {
      id: 1,
      title: "Classic Cheeseburger",
      desc: "Indulge in the timeless flavors of melted cheese and juicy beef, served with our special sauce.",
      price: "9.99",
      image: burger1,
    },
    {
      id: 2,
      title: "Spicy Chicken Burger",
      desc: "Kick up the heat with our spicy chicken burger, packed with flavor and a hint of chili.",
      price: "11.49",
      image: burger2,
    },
    {
      id: 3,
      title: "Veggie Delight Burger",
      desc: "For our vegetarian friends, enjoy a medley of fresh vegetables and savory spices in every bite.",
      price: "8.99",
      image: burger3,
    },
    {
      id: 4,
      title: "BBQ Bacon Burger",
      desc: "Savor the smoky goodness of BBQ sauce paired with crispy bacon atop our signature beef patty.",
      price: "12.99",
      image: burger4,
    },
    {
      id: 5,
      title: "Double Mushroom Swiss Burger",
      desc: "Experience the richness of sautéed mushrooms and creamy Swiss cheese in this gourmet delight.",
      price: "13.99",
      image: burger5,
    },
  ];

  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12">
      {food.map((items, index) => (
        <React.Fragment key={index}>
          <li className=" ">
            <div className="bg-primaryColorLight h-56 grid place-items-center rounded-3xl hover:bg-secondaryColor ease-in duration-200 lg:h-40">
              <img
                src={items.image}
                alt={items.title}
                className=" w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
              />
            </div>
            <div className=" pt-5">
              <div className="mb-2">
                <h4 className=" card__title">{items.title}</h4>
                <p className=" paragraph">{items.desc}</p>
              </div>
              <p className=" text-secondaryColor">${items.price}</p>
            </div>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Food;
