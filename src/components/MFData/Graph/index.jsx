import React from "react";
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
import PropTypes from "prop-types";

export default function Graph({ schemeData }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={350}
        height={300}
        data={schemeData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="nav" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

Graph.propTypes = {
  schemeData: PropTypes.array,
};
