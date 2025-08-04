import lamp from "../../../assets/images/lamp.png";
import chair from "../../../assets/images/chair.png";
import desc from "../../../assets/images/desc.png";
import woman from "../../../assets/images/woman.png";
import bedroom from "../../../assets/images/bedroom.png";
import living_room from "../../../assets/images/livingroom.png";
import dinning_rom from "../../../assets/images/dinning.png";
import warehouse from "../../../assets/images/warehouse.png";
import designRoom from "../../../assets/images/designroom.png";
import security from "../../../assets/images/security.png";

const ContentPart = () => {
  return (
    <div className="mt-[60px]">
      <div className="w-full flex flex-col items-center gap-[20px]">
        <p className="font-bold text-[20px]">کالکشن الهام بخش</p>
        <p className="text-[#666666]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </div>
      <div className="mt-[88px] flex justify-center items-center gap-[40px]">
        <img src={lamp} alt="عکس" className="inspiration" />
        <img src={chair} alt="عکس" className="inspiration" />
        <img src={desc} alt="عکس" className="inspiration" />
      </div>

      <div className="mt-[60px] bg-[#F2F5FF] flex items-center py-[60px] px-[160px] gap-[64px]">
        <div>
          <div>
            <img
              src={woman}
              alt="عکس"
              className=" rounded-tl-[25px] rounded-br-[25px]"
            ></img>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <p className="text-[20px] font-bold">محیط خود را زیبا کنید</p>
          <p className="text-[#666666] w-[85%]">
            وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند
            می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در
            خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به زودی
            می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن
            خودش می‌باشد و بس!
          </p>
          <p className="bg-[#054C73] text-white rounded-lg inline-block w-fit px-[20px] py-[10px]">
            بیشتر یاد بگیر
          </p>
        </div>
      </div>

      <div className="mt-[60px]">
        <div className="flex gap-[20px] justify-center items-center flex-col ">
          <p className="font-bold text-[20px]">جستجو براساس دسته بندی</p>
          <p className=" text-[#666666] ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-[20px] mt-[50px]">
          <div className="flex flex-col items-center">
            <img src={bedroom} alt="اتاق خواب" />
            <p>اتاق خواب</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={living_room} alt="سالن" />
            <p>سالن</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={dinning_rom} />
            <p>اتاق پذیرایی</p>
          </div>
        </div>
      </div>

      <div className="mt-[60px] border-t-[1px] border-[rgba(0,0,0,0.1)] pt-[60px]">
        <div className="flex gap-[20px] justify-center items-center flex-col ">
          <p className="font-bold text-[20px] text-[#333333]">
            چگونه کار میکنیم؟
          </p>
          <p className="text-[#666666]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.{" "}
          </p>
        </div>
        <div className="flex justify-center  items-center gap-[20px] mt-[50px] px-[50px]">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={designRoom} alt="اتاق خواب" />
              <div className="absolute flex items-center justify-center right-[calc(50%-25px)] bottom-[-25px] w-[50px] h-[50px] rounded-full border-[8px] border-white bg-black">
                <p className="text-white font-bold text-center height-[50px]">
                  .1
                </p>
              </div>
            </div>
            <p className="font-bold text-[18px] text-[#333333] pt-[30px]">
              به اتاق خود استایل بدهید
            </p>
            <p className="text-[#666666] text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={warehouse} alt="سالن" />
              <div className="absolute flex items-center justify-center right-[calc(50%-25px)] bottom-[-25px] w-[50px] h-[50px] rounded-full border-[8px] border-white bg-black">
                <p className="text-white font-bold text-center height-[50px]">
                  .2
                </p>
              </div>
            </div>
            <p className="font-bold text-[18px] text-[#333333] pt-[30px]">
              ارسال از انبار
            </p>
            <p className="text-[#666666] text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img src={security} />
              <div className="absolute flex items-center justify-center right-[calc(50%-25px)] bottom-[-25px] w-[50px] h-[50px] rounded-full border-[8px] border-white bg-black">
                <p className="text-white font-bold text-center height-[50px]">
                  .3
                </p>
              </div>
            </div>
            <p className="font-bold text-[18px] text-[#333333] pt-[30px]">
              Purchase Securely
            </p>
            <p className="text-[#666666] text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPart;
