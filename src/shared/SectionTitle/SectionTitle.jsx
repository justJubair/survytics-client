/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
    return(
        <div className="text-center">
          <h2 className="w-full text-2xl border-b-2 md:w-1/3 pb-2 mx-auto md:text-3xl font-semibold animate-pulse">{heading}</h2>
          <p className="pt-2 italic text-green-600">{subHeading}</p>  
        </div>
    )}
export default SectionTitle;