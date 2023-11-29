/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { postReportAdmin, unpublishSurvey } from '../../../api'
import toast from 'react-hot-toast'

const UnpublishModal=({unpublishModalOpen, setUnpublishModalOpen , unpublishSurveyId, refetch})=> {
 

  function closeModal() {
    setUnpublishModalOpen(false)
  }

  const handleUnpublish = async e=>{
    e.preventDefault()
    const message = e.target.message.value
    const adminMessage = {surveyId: unpublishSurveyId,admin: "admin", message, status:"unpublised",}
 
    const dbResponse = await unpublishSurvey(unpublishSurveyId)
    const dbReportRes = await postReportAdmin(adminMessage)
  
    if(dbReportRes._id && dbResponse.modifiedCount>0){
      setUnpublishModalOpen(false)
      toast.success("Unpublished successful")
      refetch()
    }
    
  }
 
  return (
    <>
      <Transition appear show={unpublishModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   Send a feedback and unpublish this survey
                  </Dialog.Title>
                 <form onSubmit={handleUnpublish} className='mt-3'>
                  <input  name='message' className="input input-bordered w-full " type="text" />
                  <button className='btn btn-sm my-4 bg-gradient-to-r text-white from-cyan-600 to-[#24962a]'>Send and & Unpublish</button>
                 </form>

                  <div className="mt-4">
                  <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-greens-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Back
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default UnpublishModal
