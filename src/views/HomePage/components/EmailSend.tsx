import React from "react";

export const EmailSend = () => {
  return (
    <div className="mt-[197px] bg-[#F2F5FF] py-[60px] w-[100%]">
      <div className="flex flex-col items-center gap-[10px]">
        <p className="text-[20px] text-[#333333] font-bold">
          به باشگاه مشتریان ما بپیوندید
        </p>
        <p className="text-center text-[#666666] w-[35%]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="relative mt-[50px] w-[350px] flex">
          <button className="bg-[#03344F] text-white px-6 rounded-r-md hover:bg-[#054C73] transition duration-300">
            ارسال
          </button>
          <input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="flex-1 border border-[#054C73] text-left py-2 px-4 rounded-l-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
