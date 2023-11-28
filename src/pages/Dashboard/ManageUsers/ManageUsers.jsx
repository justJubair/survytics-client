import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const ManageUsers = () => {
  const [users] = useUsers();
  const {user: currentUser} = useAuth()
  console.log(users);
  return (
    <Container>
    <div className="my-10">
        <SectionTitle heading="Manage All Users" subHeading="update role || filter users || and more"/>
      <div className="overflow-x-auto mt-6">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users?.map((user, idx)=> <tr className={`${currentUser?.email === user?.email ? "bg-gray-300 text-gray-400" : ""}`} key={user?._id}>
                    <th>{idx+1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.role}</td>
                  </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
    </Container>
  );
};
export default ManageUsers;
