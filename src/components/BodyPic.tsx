import { resortAI } from "../assets";

// <> Picture that is in the body of the home page.
const BodyPic = () => {
  return (
    <>
      <div>
        <div className="w-full h-[70vh] md:h-[60vh] relative">
          <div className="w-full h-full">
            <img
              src={resortAI}
              alt="Image for body"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute z-10 top-40 w-full flex flex-row justify-center md:text-xl md:tracking-[.50em] 
          text-[#172554] font-semibold"
          >
            <h1 className="bg-[#93c5fd]/50 rounded p-1">
              Your Home Away from Home - <br />
              Where Comfort Meets Culture.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyPic;
