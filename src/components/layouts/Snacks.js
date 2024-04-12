import React from "react";
import snacks1 from "../../assets/img/snack-1.png";
import snacks2 from "../../assets/img/snack-2.png";
import snacks3 from "../../assets/img/snack-3.png";
import snacks4 from "../../assets/img/snack-4.png";
import snacks5 from "../../assets/img/snack-5.png";

const Snacks = () => {
    const snack = [
        {
          id: 1,
          title: "Crunchy Nachos Supreme",
          desc: "Satisfy your cravings with a mountain of crunchy nachos topped with cheese, jalapenos, and salsa.",
          price: "8.49",
          image: snacks1,
        },
        {
          id: 2,
          title: "Zesty Chicken Wings",
          desc: "Get your taste buds dancing with our zesty chicken wings, perfectly seasoned and served with dipping sauce.",
          price: "9.99",
          image: snacks2,
        },
        {
          id: 3,
          title: "Cheesy Garlic Breadsticks",
          desc: "Indulge in the irresistible combination of warm, cheesy breadsticks with a hint of garlic.",
          price: "6.99",
          image: snacks3,
        },
        {
          id: 4,
          title: "Crispy Onion Rings",
          desc: "Enjoy the crispy goodness of golden onion rings, fried to perfection and served with your favorite dipping sauce.",
          price: "5.99",
          image: snacks4,
        },
        {
          id: 5,
          title: "Sweet & Savory Pretzel Bites",
          desc: "Experience the perfect balance of sweet and savory with our soft pretzel bites, sprinkled with salt and sugar.",
          price: "7.49",
          image: snacks5,
        },
      ];
      
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12">
      {snack.map((items, index) => (
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

export default Snacks;
