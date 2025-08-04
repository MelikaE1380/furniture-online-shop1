import firstBanner from "../../../assets/images/first-banner.png";

const BannerPart = () => {
  return (
    // <div className="relative">
    //   <img className="" src={firstBanner} />
    //   <div className="right-[90px] flex flex-col gap-5 w-[38%] bg-[#DFE9F4] p-[40px] mt-[240px] content">
    //     <p className="">نورسیده ها</p>
    //     <p className="text-[#054C73] font-bold text-[20px]">
    //       کالکشن جدید ما را کشف کنید
    //     </p>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    //       tellus, luctus nec ullamcorper mattis.
    //     </p>
    //   </div>
    // </div>
    <div className="relative">
      {/* تصویر بنر */}
      <img src={firstBanner} alt="بنر" className="w-full h-auto" />

      {/* محتوای روی بنر */}
      <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 bg-[#DFE9F4] p-6 sm:p-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[38%] flex flex-col gap-5 shadow-lg rounded-md">
        <p className="text-sm sm:text-base">نورسیده‌ها</p>
        <p className="text-[#054C73] font-bold text-lg sm:text-xl">
          کالکشن جدید ما را کشف کنید
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </div>
    </div>
  );
};

export default BannerPart;
