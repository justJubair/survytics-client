/* eslint-disable react/prop-types */
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

const SurveyChart = ({ voteYes, voteNo, width }) => {
  const colors = ['#0088FE', '#00C49F'];
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
      <BarChart width={width} height={300} data={data}>
        {/* <Bar dataKey="vote" fill="#50a844" /> */}
        <Bar dataKey="vote">
            {data.map((_, idx)=> <Cell key={idx} fill={colors[idx%20]}/>)}
        </Bar>
        <YAxis />
        <XAxis dataKey="name" />
      </BarChart>
    </div>
  );
};
export default SurveyChart;
