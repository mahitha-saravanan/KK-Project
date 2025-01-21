"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Paid: 4000,
    UnPaid: 2400,
  },
  {
    name: "Feb",
    Paid: 3000,
    UnPaid: 1398,
  },
  {
    name: "Mar",
    Paid: 2000,
    UnPaid: 9800,
  },
  {
    name: "Apr",
    Paid: 2780,
    UnPaid: 3908,
  },
  {
    name: "May",
    Paid: 1890,
    UnPaid: 4800,
  },
  {
    name: "Jun",
    Paid: 2390,
    UnPaid: 3800,
  },
  {
    name: "Jul",
    Paid: 3490,
    UnPaid: 4300,
  },
  {
    name: "Aug",
    Paid: 3490,
    UnPaid: 4300,
  },
  {
    name: "Sep",
    Paid: 3490,
    UnPaid: 4300,
  },
  {
    name: "Oct",
    Paid: 3490,
    UnPaid: 4300,
  },
  {
    name: "Nov",
    Paid: 3490,
    UnPaid: 4300,
  },
  {
    name: "Dec",
    Paid: 3490,
    UnPaid: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="even:bg-sky-100-100  rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-blue">Payment Graph</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false}  tickMargin={20}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Paid"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="UnPaid" stroke="#CFCEFF" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
