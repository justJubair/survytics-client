import useVotes from "../../../hooks/useVotes";
import Container from "../../../shared/Container/Container";


const TableResponse = () => {
    const votes = useVotes()
    const publishedSurveys = votes.filter(survey=> survey.status === "published")
    return(
        <Container>

        <div className="mb-10">
           {
            publishedSurveys?.map(survey=> <div key={survey._id} className="overflow-x-auto">
             <div className="mt-10 mb-5">
             <h2 className="text-center  text-xl font-bold">{survey.title}</h2>
               <p className="text-center font-medium text-green-500 mt-2 text-sm">{survey?.question}</p>
             </div>
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Time</th>
                  <th>Voted</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    survey?.participants?.map((participant, idx)=>   <tr key={participant._id}>
                        <th>{idx+1}</th>
                        <td>{participant?.userName}</td>
                        <td>{participant?.userEmail}</td>
                        <td>{participant?.time}</td>
                        <td>{participant?.voted}</td>
                        
                      </tr>)
                }
              
               
              </tbody>
            </table>
          </div>)
           }
        </div>
        </Container>
    )}
export default TableResponse;