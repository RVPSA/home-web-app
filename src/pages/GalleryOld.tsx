import { homePic } from "../assets";
const Gallery = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 p-5">
        {homePic.map((pic, index) => (
          <div
            className="relative hover:scale-105 rounded-lg transform transition-transform duration-300"
            key={index}
          >
            <div className="absolute inset-0 z-10 flex hover:opacity-0">
              <div className="absolute inset-0 bg-black opacity-70"></div>
              <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
                {pic.alt}
              </div>
            </div>

            <img
              src={pic.picurl}
              alt={pic.alt}
              className="object-cover w-full h-full rounded-lg shadow-lg "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
