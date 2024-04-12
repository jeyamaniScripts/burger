import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className=" bg-secondaryColor">
      <div className=" container flex flex-col gap-5 md:flex-row md:items-center">
        <div className=" space-y-4 md:flex-1">
          <h2 className=" section__title text-black">get exclusive update</h2>
          <p className="text-sm">Ask anything to feel free to ask!</p>
        </div>
        <div className=" flex flex-col md:flex-row md:flex-1 gap-3">
          <input type="text" placeholder="Email address"  className=" p-2 text-black outline-none rounded-lg md:w-full"/>
          <div className=" relative">
            <button className=" bg-black ">Subscribe</button>
            <i className=" absolute top-0 left-0">
              <FaPaperPlane />
            </i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
