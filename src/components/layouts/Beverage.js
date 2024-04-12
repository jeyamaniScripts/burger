import React from "react";
import beverage1 from "../../assets/img/beverage-1.png";
import beverage2 from "../../assets/img/beverage-2.png";
import beverage3 from "../../assets/img/beverage-3.png";
import beverage4 from "../../assets/img/beverage-4.png";
import beverage5 from "../../assets/img/beverage-5.png";

const Beverage = () => {
  const beverage = [
    {
      id: 1,
      title: "Refreshing Lemonade",
      desc: "Quench your thirst with our tangy and refreshing lemonade, perfect for any occasion.",
      price: "3.99",
      image: beverage1,
    },
    {
      id: 2,
      title: "Iced Caramel Macchiato",
      desc: "Indulge in the rich flavors of espresso, caramel, and creamy milk, served over ice for a delightful pick-me-up.",
      price: "4.49",
      image: beverage2,
    },
    {
      id: 3,
      title: "Mint Mojito Mocktail",
      desc: "Enjoy the cool and invigorating taste of mint combined with lime and soda, a refreshing non-alcoholic option.",
      price: "4.99",
      image: beverage3,
    },
    {
      id: 4,
      title: "Classic Hot Chocolate",
      desc: "Warm up your day with our rich and creamy hot chocolate, topped with whipped cream and chocolate shavings.",
      price: "3.49",
      image: beverage4,
    },
    {
      id: 5,
      title: "Fruit Infused Iced Tea",
      desc: "Savor the natural sweetness of fruit-infused iced tea, a delightful blend of tea and fresh fruit flavors.",
      price: "4.29",
      image: beverage5,
    },
  ];

  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12">
      {beverage.map((items, index) => (
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

export default Beverage;
