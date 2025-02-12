import { email, homeportrait, location, phone, QR, whatsApp } from "../assets";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-12 p-5 min-h-[75vh] relative z-0">
        <img src={homeportrait} alt="Home porttrait" className="absolute w-full h-full object-fill -z-10" />
        {/* //<> Header */}
        <div className="col-span-12 flex flex-row justify-center font-bold text-3xl text-white">
          Contact Us
        </div>
        {/* //<> Free space */}
        <div className="hidden md:col-span-2 md:grid"></div>
        {/* //<> Contact Section */}
        <div className="col-span-12 md:col-span-4 md:border-r-2 border-black pr-5 flex flex-col h-full justify-between">
          <div className="w-full h-[2px] bg-black"></div>
          <div className="flex flex-col gap-y-4">
            <div className="">
              <h1>Address :</h1>
              <p>
                713, <br />
                Mahasenpura, <br />
                Tissamahrama,
                <br />
                Sri Lanka
              </p>
            </div>
            <div>
              <h1>Phone :</h1>
              <div className="flex flex-row w-full">
                <div className="w-[20px] h-[20px] mr-4">
                  <a href="tel:+94763771473" target="_blank">
                    <img
                      src={phone}
                      alt="Phone"
                      className="w-full h-full object-fill"
                    />
                  </a>
                </div>
                <div className="w-[20px] h-[20px] mr-4">
                  <a href="https://wa.me/+94763771473" target="_blank">
                    <img
                      src={whatsApp}
                      alt="Phone"
                      className="w-full h-full object-fill"
                    />
                  </a>
                </div>
                <div>+94 76 377 1473</div>
              </div>
            </div>
            <div className="">
              <h1>E-Mail</h1>
              <a
                href="mailto:deeghayutravel@gmail.com?subject=Hello! Asking for Reservation Details"
                target="_blank"
              >
                <div className="flex flex-row">
                  <div className="w-[20px] h-[20px] mr-4">
                    <img
                      src={email}
                      alt="Email"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div>deeghayutravel@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:flex w-full h-[2px] bg-black mt-4"></div>
        </div>
        {/* //<> Google map and QR code */}
        <div className="col-span-12 mt-4 md:mt-0 md:col-span-4 md:pl-5 flex flex-col h-full justify-between">
          <div className="w-full h-[2px] bg-black"></div>
          <div>Find Us</div>
          <div className="hidden md:flex w-full justify-center">
            <img src={QR} alt="Qr code" className="w-32 h-32 object-fill" />
          </div>
          <div className="w-full flex justify-center mt-5">
            <a href="https://maps.app.goo.gl/iBAU3NUT66J8AE5j8" target="_blank">
              <img
                src={location}
                alt=""
                className="w-[50px] h-[50px] object-fill"
              />
            </a>
          </div>
          <div className="w-full h-[2px] bg-black mt-4"></div>
        </div>
        {/* //<> Free space */}
        <div className="hidden md:col-span-2 md:grid"></div>
      </div>
    </>
  );
};

export default Contact;
