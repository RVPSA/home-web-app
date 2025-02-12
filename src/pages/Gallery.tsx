import { homePic } from "../assets";
import PictureCard from "../components/PictureCard";

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-5">
        {homePic.map((data, index) => {
          return (
            <div className="col-span-6 md:col-span-4 h-full" key={index}>
              <PictureCard
                pictureURL={data.picurl}
                pictureAlt={data.alt}
                pictureDescription={data.alt}
              ></PictureCard>
            </div>
          );
        })}
        {/* <div className="col-span-6 md:col-span-4">
          <img src={homeFull} alt="" className="w-full h-full object-fill" />
        </div>
        <div className="col-span-6 md:col-span-4">
        <img src={homeFull} alt="" className="w-full h-full object-fill" />
        </div>
        <div className="col-span-6 md:col-span-4">
        <img src={homeFull} alt="" className="w-full h-full object-fill" />
        </div> */}
      </div>
    </>
  );
};

export default Gallery;
