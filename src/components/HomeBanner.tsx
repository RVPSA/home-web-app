import { useNavigate } from "react-router-dom";
import { homeportrait } from "../assets";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full rounded-tl-3xl rounded-br-3xl flex flex-col p-6 text-center relative z-0 overflow-hidden text-white">
        <img
          src={homeportrait}
          alt="portrait image"
          className="w-full h-full object-fill absolute inset-0 -z-10 opacity-45"
        />
        <div className=" text-lg">
          🌿 Comfort & Serenity at the Best Price! 🌿
        </div>
        <div>A peaceful retreat where you feel at home.</div>
        <div className="flex p-3 gap-2 flex-col">
          <div>🅿️ Free Parking</div>
          <div>🐶 Pet Friendly</div>
          <div>🍽️ Kitchen Access</div>
        </div>
        <div
          onClick={() => {
            navigate("/contact");
          }}
          className="cursor-pointer"
        >
          👉 Book Now & Enjoy Affordable Rates!
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
