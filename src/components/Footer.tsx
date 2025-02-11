import { email, phone, whatsApp } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black/75 w-full py-5 text-white">
      <div className="grid grid-cols-2">
        <div className="col-span-1 grid justify-items-center">
          Deeghayu Resort
        </div>
        <div className="col-span-1 flex flex-row justify-center gap-3">
          <a href="tel:+94763771473" target="_blank">
            <div className="w-[20px] h-[20px]">
              <img
                src={phone}
                alt="phone"
                className="w-full h-full object-fill"
              />
            </div>
          </a>

          <a href="https://wa.me/+94763771473" target="_blank">
            <div className="w-[20px] h-[20px]">
              <img
                src={whatsApp}
                alt="whatsApp"
                className="w-full h-full object-fill"
              />
            </div>
          </a>

          <a
            href="mailto:deeghayutravel@gmail.com?subject=Hello! Asking for Reservation Details"
            target="_blank"
          >
            <div className="w-[20px] h-[20px]">
              <img
                src={email}
                alt="email"
                className="w-full h-full object-fill"
              />
            </div>
          </a>
        </div>
        <div className="col-span-2 flex flex-col md:flex-row gap-2  items-center md:justify-center">
          <div>&copy; Copyright 2025,</div>
          <div>Made by Akesh</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
