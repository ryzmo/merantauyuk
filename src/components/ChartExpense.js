"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 1200000 },
  { name: "Feb", value: 1400000 },
  { name: "Mar", value: 2100000 },
  { name: "Apr", value: 2450000 },
  { name: "Mei", value: 2300000 },
  { name: "Jun", value: 2000000 },
];

export default function ChartExpense() {
  return (
    <div className="rounded-xl bg-white/5 p-6 border border-white/10 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Pengeluaran Bulanan</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip
            contentStyle={{
              background: "rgba(0,0,0,0.7)",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#a855f7"
            strokeWidth={2}
            dot={{ r: 4, fill: "#c084fc" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
