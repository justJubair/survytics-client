const UpdateSurveyModal = () => {
    return(
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Report this survey</h3>
          <form  className="my-4 space-y-4">
            <input className="input input-bordered w-full " type="text" name="report" id="" placeholder="write your report..." required/>
            <button className="btn btn-error text-white">Report</button>
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
export default UpdateSurveyModal;