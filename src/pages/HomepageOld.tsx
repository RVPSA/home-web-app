import { guestHouse2_1 } from "../assets";
import Visioncard from "../components/Visioncard";

const Homepage = () => {
  return (

    <div>
      <img src={guestHouse2_1} alt="" className="w-full h-screen object-fit" />
      <div className="absolute inset-0 left-7 mt-44 md:left-20 md:mt-44">
        <Visioncard></Visioncard>
      </div>
    </div>
  );
};

export default Homepage;
