import React from "react";
import review1 from "../assets/img/review-1.jpg";
import review2 from "../assets/img/review-2.jpg";
import review3 from "../assets/img/review-3.jpg";
import review4 from "../assets/img/review-4.jpg";
import review5 from "../assets/img/review-5.jpg";
import { FaQuoteRight } from "react-icons/fa";

function Review() {
  const reviews = [
    {
      id: 1,
      review:
        "Absolutely delicious food! The burgers are a must-try, and the snacks are perfect for a quick bite. The service was excellent too. Highly recommended!",
      name: "John Doe",
      designation: "Graphic Designer",
      image: review1,
    },
    {
      id: 2,
      review:
        "I'm a regular customer here, and I must say, the quality of food never disappoints. The staff is always friendly and attentive. Great place for a casual meal!",
      name: "Emma Smith",
      designation: "Software Engineer",
      image: review2,
    },
    {
      id: 3,
      review:
        "Visited this restaurant with my family, and we had a fantastic experience. The burgers were juicy, the snacks were tasty, and the ambiance was cozy. Will definitely come back!",
      name: "Michael Johnson",
      designation: "Teacher",
      image: review3,
    },
    {
      id: 4,
      review:
        "I'm impressed by the variety of options available on the menu. There's something for everyone! The food exceeded my expectations, and the prices are reasonable. Five stars!",
      name: "Sarah Brown",
      designation: "Marketing Manager",
      image: review4,
    },
    {
      id: 5,
      review:
        "Had a great time dining here with friends. The atmosphere is lively, the music is good, and the food is delicious. Perfect spot for hanging out!",
      name: "Alex Turner",
      designation: "Student",
      image: review5,
    },
  ];

  return (
    <section className=" bg-primaryColorLight">
      <div className="container">
        <div className=" max-w-md mx-auto text-center">
          <h2 className=" section__title">customer review</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            "I absolutely love the food here! The burgers are juicy and
            flavorful, the snacks are crispy and delicious, and the beverages
            are so refreshing. The ambiance is great too, perfect for hanging
            out with friends or enjoying a meal with family. I highly recommend
            this place to anyone looking for a fantastic dining experience!"
          </p>
        </div>
        <div className=" py-10">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((items, index) => {
              return (
                <li key={index}>
                  <div className=" flex flex-col bg-primaryColor p-6 rounded-lg">
                    <p className=" paragraph">{items.review}</p>
                    <div className=" flex items-center mt-3">
                      <img
                        src={items.image}
                        alt="persons"
                        className=" w-12 h-12 rounded-full"
                      />
                      <div className=" ml-2">
                        <p className=" font-oswald uppercase ">{items.name}</p>

                        <p className=" paragraph">{items.designation}</p>
                      </div>
                      <i className=" text-secondaryColor text-2xl ml-auto">
                        <FaQuoteRight />
                      </i>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Review;
