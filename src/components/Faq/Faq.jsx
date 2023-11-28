import ContainerBig from "../../shared/ContainerBig/ContainerBig";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import FaqAnime from "../../assets/animations/faq.json"
import Lottie from "lottie-react";
const Faq = () => {
  return (
    <ContainerBig>
      <div>
        <SectionTitle
          heading="Frequently Asked Questions"
          subHeading="Here's top three questions"
        />
        {/* main container */}
        <div className="flex flex-col items-center justify-center gap-8 mt-10 md:flex-row">
          {/* img */}
          <div className="w-96">
            <Lottie animationData={FaqAnime} loop={true}/>
          </div>
          {/* Accordian */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3"  />
              <div className="collapse-title text-xl font-medium">
              How secure is the data collected through your survey platform?
              </div>
              <div className="collapse-content">
                <p>We take the security of your data seriously. Our survey platform employs industry-standard encryption protocols to safeguard all information collected. Additionally, we regularly conduct security audits and adhere to strict data protection measures to ensure your data remains confidential and secure.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
              Can I customize the look and feel of my surveys to match my brand?
              </div>
              <div className="collapse-content">
                <p>Absolutely! We understand the importance of brand consistency. Our platform offers a range of customization options, allowing you to tailor the appearance of your surveys to align with your brand colors, logo, and overall aesthetic. This ensures a seamless and professional experience for your respondents.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
              How can I analyze the results of my surveys?
              </div>
              <div className="collapse-content">
                <p>Analyzing survey results is a breeze with our platform. Once your survey is complete, you can access comprehensive analytics and reports in real-time. Our intuitive dashboard provides visual representations of the data, making it easy to identify trends and key insights. You can also export the results in various formats for further analysis or to share with your team.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerBig>
  );
};
export default Faq;
