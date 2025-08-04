import Header from "./components/Header";
import BannerPart from "./components/BannerPart";
import BenefitRebon from "./components/BenefitRebon";
import ContentPart from "./components/ContentPart";
import { EmailSend } from "./components/EmailSend";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <BannerPart />
      <BenefitRebon />
      <ContentPart />
      <EmailSend />
      <Footer />
    </div>
  );
};

export default HomePage;
