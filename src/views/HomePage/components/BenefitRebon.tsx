import deliverySVG from "../../../assets/images/delivery.svg";
import supportSVG from "../../../assets/images/support.svg";
import authenticSVG from "../../../assets/images/authentic.svg";

const BenefitRebon = () => {
  return (
    <div className="flex bg-[#F2F5FF] items-center justify-center gap-6 py-[16px]">
      <div className="flex  items-center gap-3">
        <div>
          <img src={deliverySVG} />
        </div>
        <div>
          <p className="text-[15px] text-[#333333] font-extrabold">
            ارسال رایگان
          </p>
          <p className="text-[14px] text-[#666666]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img src={supportSVG} />
        </div>
        <div>
          <p className="text-[15px] text-[#333333] font-extrabold">
            پشتیبانی 24/7
          </p>
          <p className="text-[14px] text-[#666666]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img src={authenticSVG} />
        </div>
        <div>
          <p className="text-[15px] text-[#333333] font-extrabold">
            100% مطمئن
          </p>
          <p className="text-[14px] text-[#666666]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitRebon;
