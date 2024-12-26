import { vision } from "../assets";

const Visioncard = () => {
  return (
    <div>
      {/* Card */}
      <div className="relative w-4/6 md:w-96 h-96 rounded-xl overflow-hidden shadow-lg opacity-90">
        {/* Background Image */}
        <img
          src={vision}
          alt="Vision"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-lime-600  opacity-80"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 overflow-auto">
            <h2 className="text-white font-bold">Vision</h2>
          <h2 className="text-white text-sm leading-snug overflow-auto">
            "Our vision is to create a cozy and welcoming retreat where every
            guest feels at home, offering personalized service, comfort, and
            authentic experiences. We aim to blend local culture, sustainable
            living, and modern amenities to provide a peaceful sanctuary for
            travelers seeking relaxation, inspiration, and a sense of
            belonging."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Visioncard;
