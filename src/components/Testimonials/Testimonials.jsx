import ContainerBig from "../../shared/ContainerBig/ContainerBig";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import SwiperSlider from "./SwiperSlider/SwiperSlider";

const Testimonials = () => {
    return(
        <ContainerBig>
        <div className="my-16">
            <SectionTitle heading="Testimonials" subHeading="Check out what our client says"/>
             <SwiperSlider/>
        </div>
        </ContainerBig>
    )}
export default Testimonials;