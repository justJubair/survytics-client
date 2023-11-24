/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";
const SurveySearch = ({handleSearch}) => {
    return(
        <>
            <form onSubmit={handleSearch}>

            <input type="text" name="search" placeholder="Search surveys.." className="input input-bordered input-success lg:w-72" />

            <button className="absolute -ml-10 mt-2 text-green-600 duration-300 hover:scale-110" type="submit"><IoSearch size={30}/></button>
            </form>
        </>
    )}
export default SurveySearch;