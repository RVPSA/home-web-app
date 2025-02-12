import HomeBanner from "./HomeBanner";

const VisionArea = () => {
  return (
    <>
      <div className="w-full grid grid-cols-4 bg-[#60a5fa]">
        {/* //<> Free space */}
        <div className="hidden md:col-span-1 md:grid"></div>
        {/* //<> Vision space */}
        <div className="hidden md:col-span-1 md:grid justify-items-start">
          <div className="flex flex-col pt-5 gap-y-3">
            <div className="text-2xl font-semibold">Deeghayu Resort</div>
            <div className="w-6 h-1 bg-yellow-400"></div>
            <div>
              To be a leading retreat destination that seamlessly blends
              comfort, sustainability, and local culture, creating a home away
              from home where every guest experiences warmth, relaxation, and
              meaningful connections.
            </div>
          </div>
        </div>
        {/* //<> Banner section */}
        <div className="col-span-4 px-5 md:col-span-2 grid grid-cols-12 py-5 md:px-0">
          <div className="hidden md:col-span-2 md:grid"></div>
          <div className="col-span-12 md:col-span-8">
            <HomeBanner></HomeBanner>
          </div>
          <div className="hidden md:col-span-2"></div>
        </div>
      </div>
    </>
  );
};

export default VisionArea;
