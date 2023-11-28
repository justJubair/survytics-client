import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Survytics</title>
      </Helmet>
      <Banner />
      <HowItWorks/>
      <Testimonials/>
      <Faq/>
    </div>
  );
};
export default Home;
