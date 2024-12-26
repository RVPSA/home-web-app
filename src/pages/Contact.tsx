import { email, fb, phone, location, QR } from "../assets";

const Contact = () => {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="bg-gradient-to-r from-lime-900 p-6 md:p-10 w-full max-w-4xl rounded-lg">
        <h1 className="text-center font-bold text-3xl mb-6 text-lime-200">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="flex flex-col items-center">
            <div className="bg-white h-32 w-32 md:flex justify-center items-center mb-4 sm:hidden">
              <img src={QR} className="w-full h-full object-contain" />
            </div>
            <a href="https://maps.app.goo.gl/iBAU3NUT66J8AE5j8">
              <img
                src={location}
                className="w-[50px] h-[50px] object-contain"
              />
            </a>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col md:flex-row justify-between">
              <img src={phone} className="w-[25px] h-[25px] object-contain" />
              <a href="tel:+94763771473">+94 76 377 1473</a>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <img src={email} className="w-[25px] h-[25px] object-contain" />
              <a href="mailto:deeghayutravel@gmail.com">
                deeghayutravel@gmail.com
              </a>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <img src={fb} className="w-[25px] h-[25px] object-contain" />
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
