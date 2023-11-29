import ContainerBig from "../../shared/ContainerBig/ContainerBig";

const AboutUs = () => {
  return (
    <ContainerBig>
      {/* heading */}
      <div className="flex justify-center items-center w-full pt-28 lg:pt-40 ">
        <div className="diff lg:w-1/2 h-20">
          <div className="diff-item-1">
            <div className="bg-cyan-600  text-2xl text-primary-content md:text-4xl font-black grid place-content-center">
              Who are Survytics?
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-[#24962a] text-2xl md:text-4xl font-black grid place-content-center">
              Who are Survytics?
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      {/* main container */}
      <div>
        {/* text */}
        <div>
          {/* first article */}
          <p className="text-lg mt-10">
            Survytics is a UK-based provider of digital survey solutions. Our
            customers trust our user-friendly yet advanced online survey
            software to gather the information they need to make smart
            decisions. Whether you’re self-employed, work in the public sector,
            or manage projects for a multinational corporation we have features
            – including personalised customer support – that will suit your data
            collection and analysis needs. Create customised surveys from
            scratch or use ready-made templates, then distribute to your own
            contact list or a consumer panel. Results are collected in real time
            so you can export data, share responses and learn from your
            respondents instantly.
          </p>
        </div>

        {/* nav */}
        <div></div>
      </div>
    </ContainerBig>
  );
};
export default AboutUs;
