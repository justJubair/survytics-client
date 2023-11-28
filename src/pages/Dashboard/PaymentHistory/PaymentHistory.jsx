import { useQuery } from "@tanstack/react-query";
import { getPayments } from "../../../api";
import Container from "../../../shared/Container/Container";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => await getPayments(),
  });

  return (
    <Container>
      <div className="my-10">
        <SectionTitle
          heading="Payment History"
          subHeading="Payments via pro members"
        />
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {payments.map((payment, idx) => (
                <tr key={payment?._id}>
                  <td>{idx + 1}</td>
                  <td>{payment?.name}</td>
                  <td>{payment?.email}</td>
                  <td>{payment?.transactionId}</td>
                  <td>${payment?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};
export default PaymentHistory;
