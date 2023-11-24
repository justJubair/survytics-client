/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
    return(
        <div className="text-center">
          <h2 className="text-xl border-b-2 w-1/4 pb-2 mx-auto md:text-3xl font-semibold">{heading}</h2>
          <p className="pt-2 italic text-green-600">{subHeading}</p>  
        </div>
    )}
export default SectionTitle;