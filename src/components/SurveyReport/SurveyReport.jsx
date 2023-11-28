import toast from "react-hot-toast";
import { postReport } from "../../api";
import useAuth from "../../hooks/useAuth";

/* eslint-disable react/prop-types */
const SurveyReport = ({surveyId, surveyTitle, role}) => {
    const {user} = useAuth()
    const handleReport = async e =>{
        e.preventDefault()
        const reportText = e.target.report.value;
        const report = {
            surveyId,
            surveyTitle,
            reportText,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhoto: user?.photoURL,
        }
        const dbResponse = await postReport(report)
        if(dbResponse.insertedId){
            toast.success("Your report has been sent")
            e.target.reset()
        }
    }
    return(
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Report this survey</h3>
          <form onSubmit={handleReport} className="my-4 space-y-4">
            <input disabled={(role === "admin" || role==="surveyor") && true } className="input input-bordered w-full " type="text" name="report" id="" placeholder="write your report..." required/>
            <button  disabled={(role === "admin" || role==="surveyor") && true }  className="btn btn-error text-white">Report</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Back</button>
            </form>
          </div>
        </div>
      </dialog>
    )}
export default SurveyReport;