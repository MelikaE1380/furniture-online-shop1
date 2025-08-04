import instagramOne from "../../../assets/images/IG-1.jpg";
import instagramTwo from "../../../assets/images/IG-2.jpg";
import instagramThree from "../../../assets/images/IG-3.jpg";
import instagramFour from "../../../assets/images/IG-4.jpg";
import instagramLogo from "../../../assets/images/instagram.svg";

const Footer = () => {
  return (
    <div className="px-[120px] bg-[#03344F] items-center justify-between flex py-[50px]">
      <div className="text-white w-[30%] flex flex-col gap-3">
        <p className="font-bold">مراقبت از استایل خانه شما</p>
        <p className="font-thin text-[14px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div>
          {" "}
          <p className="font-bold">ما را دنبال کنید</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="text-white">تصاویر پیج اینستاگرام</p>
          <img src={instagramLogo} alt="" />
        </div>
        <div className="flex justify-between gap-2 items-center">
          <img src={instagramOne} alt="instagramOne" />
          <img src={instagramTwo} alt="instagramTwo" />
          <img src={instagramThree} alt="instagramThree" />
          <img src={instagramFour} alt="instagramFour" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
