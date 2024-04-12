import React from "react";
import burger from "../assets//img/promo-1.png";
import drinks from "../assets/img/promo-2.png";

const Promo = () => {
  const promo = [
    {
      id: 1,
      title: "Payday Promo ",
      description: "get a 10% didcount on payday week",
      para: "loarem ipsusam dolor sit amet.consecuted ted taste.",
      image: burger,
    },
    {
      id: 2,
      title: "Payday Promo",
      description: "get a 10% didcount on payday week",
      para: "loarem ipsusam dolor sit amet.consecuted ted taste.",
      image: drinks,
    },
  ];
  return (
    <section id="promo">
      <div className=" container flex flex-col gap-5 lg:gap-10 lg:flex-row lg:mx-auto">
        {promo.map((items, index) => {
          return (
            <React.Fragment key={index}>
              <div className=" bg-primaryColorLight p-5 flex flex-col rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                <img
                  src={items.image}
                  alt={items.title}
                  className=" w-40 mx-auto md:mx-5 hover:animate-movingY"
                />

                <div className=" pt-5 space-y-2 md:pt-0">
                  <p className=" text-xs text-secondaryColor">{items.title}</p>
                  <h3 className=" card__title">{items.description}</h3>

                  <p className=" paragraph">{items.para}</p>
                  <a href="#/home" className=" text-secondaryColor text-xs">
                    Buy Online
                  </a>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Promo;
