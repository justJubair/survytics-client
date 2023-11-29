/* eslint-disable react/prop-types */
const SectionTitle = ({heading, subHeading}) => {
    return(
        <div className="flex flex-col justify-center items-center w-full">
          <h2 className="w-full text-center text-2xl border-b-2 border-gray-400 md:w-1/3 pb-2 mx-auto md:text-3xl font-semibold animate-pulse">{heading}</h2>
          <p className="w-full md:w-1/3 pt-2 italic text-center text-green-600">{subHeading}</p>  
        </div>
    )}
export default SectionTitle;