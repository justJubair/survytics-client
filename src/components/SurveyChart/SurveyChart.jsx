/* eslint-disable react/prop-types */
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const SurveyChart = ({ voteYes, voteNo }) => {
  const data = [
    {
      name: "Yes",
      vote: voteYes,
    },
    {
      name: "No",
      vote: voteNo,
    },
  ];
  return (
    <div className="pt-10">
      <BarChart width={300} height={300} data={data}>
        <Bar dataKey="vote" fill="#50a844" />
        <YAxis />
        <XAxis dataKey="name" />
      </BarChart>
    </div>
  );
};
export default SurveyChart;
