import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Loader from "../../../shared/Loader/Loader";
import { updateUserRole } from "../../../api";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const [userFilter, setUserFilter] = useState("");
  const [users, isLoading, refetch] = useUsers(userFilter);
  const { user: currentUser } = useAuth();
  const handleUserFilter = (e) => {
    setUserFilter(e.target.value);
  };
  const handleUserRoleUpdate = async(_id,value) => {
    const newUserRole = {value}
    const dbResponse = await updateUserRole(_id, newUserRole)
    if(dbResponse.modifiedCount > 0){
        refetch()
        toast.success("Users role updated")
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <div className="my-10">
        <SectionTitle
          heading="Manage All Users"
          subHeading="update role || filter users || and more"
        />
        <div className="flex justify-end my-6 md:my-0">
          <select
            onChange={handleUserFilter}
            defaultValue="default"
            className="select select-bordered"
          >
            <option disabled value="default">
              Filter users
            </option>
            <option>pro-user</option>
            <option>surveyor</option>
            <option>user</option>
            <option>admin</option>
          </select>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, idx) => (
                <tr
                    className={`${currentUser?.email === user?.email ? "bg-gray-300 text-gray-400" : " "}`}
                  key={user?._id}
                >
                  <td>{idx + 1}</td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    <button
                      onClick={() => handleUserRoleUpdate(user?._id, "admin")}
                      className={`btn btn-xs mr-2 ${
                        user?.role === "admin" ? "hidden" : " "
                      }`}
                    >
                      {user?.role === "surveyor" && "Admin"}
                      {user?.role === "user" && "Admin"}
                      {user?.role === "pro-user" && "Admin"}
                    </button>
                    <button
                         onClick={() => handleUserRoleUpdate(user?._id, "surveyor")}
                      className={`btn btn-xs ${
                        user?.role === "surveyor" || user?.role === "admin"
                          ? "hidden"
                          : " "
                      }`}
                    >
                      {user?.role === "user" && "Surveyor"}
                      {user?.role === "pro-user" && "Surveyor"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};
export default ManageUsers;
