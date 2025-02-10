import { resort } from "../assets";

// <> Picture that is in the body of the home page.
const BodyPic = () => {
  return (
    <>
      <div>
        <div className="w-full h-[70vh] md:h-[60vh]">
          <div className="w-full h-full object-fill">
            <img
              src={resort}
              alt="Image for body"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyPic;
