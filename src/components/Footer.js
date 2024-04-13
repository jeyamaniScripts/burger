import React from "react";
import {
  FaAddressCard,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="container">
          <ul className=" grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4 ">
            <li>
              <div className=" space-y-3">
                <a href="#home">
                  <p className="text-4xl uppercase font-oswald">
                    bur<span className=" text-secondaryColor">ger</span>
                  </p>
                  <p className=" text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio molestias tenetur hic possimus harum ullam amet,
                    excepturi exercitationem earum aut nemo fugit minima nisi
                    soluta rerum, alias beatae ad eveniet!
                  </p>
                </a>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-3">
                <h3 className=" text-lg font-oswald uppercase">support</h3>
                <a href="#faq" className=" text-xs hover:text-secondaryColor">
                  FAQ's
                </a>
                <a
                  href="#privacy"
                  className=" text-xs hover:text-secondaryColor"
                >
                  Privacy Policy
                </a>
                <a href="#terms" className=" text-xs hover:text-secondaryColor">
                  Terms & Conditions
                </a>
                <a
                  href="#contact"
                  className=" text-xs hover:text-secondaryColor"
                >
                  Contact
                </a>
              </div>
            </li>
            <li className=" space-y-8">
              <div className="space-y-2">
                <h3 className="uppercase text-lg font-oswald">phone</h3>
                <p className=" flex items-center gap-2 text-xs">
                  <i className=" text-lg text-secondaryColor">
                    <FaPhoneAlt />
                  </i>
                  +91 8270685013
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="uppercase text-lg font-oswald">email</h3>
                <p className=" flex items-center gap-2 text-xs">
                  <i className=" text-lg text-secondaryColor">
                    <FaMailBulk />
                  </i>
                  KJmani@gmail.com
                </p>
              </div>
            </li>
            <li className=" space-y-8">
              <div className=" space-y-2">
                <h3 className=" text-lg font-oswald uppercase">address</h3>
                <p className=" flex items-center gap-2 text-xs">
                  <i className=" text-lg text-secondaryColor">
                    <FaAddressCard />
                  </i>
                  Madurai-630559.
                </p>
              </div>
              <div className=" space-y-2">
                <h3 className=" text-lg font-oswald uppercase"> follow us</h3>
                <div className=" flex gap-3">
                  <i className=" text-4xl text-secondaryColor">
                    <FaFacebook />
                  </i>
                  <i className=" text-4xl text-secondaryColor">
                    <FaTwitter />
                  </i>
                  <i className=" text-4xl text-secondaryColor">
                    <FaInstagram />
                  </i>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-center border-t border-secondaryColor py-5 lg:flex-row lg:justify-between">
            <p className="paragraph">Burger template kit by light code.</p>

            <p className=" paragraph">copy right 2024.all right reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
