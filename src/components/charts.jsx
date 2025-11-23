import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const AnalyticsPage = () => {
  const stats = {
    totalVisitors: 1000,
    registeredUsers: 400,
    gamesPlayed: {
      "O'yinlar": 3,
      "Mashqlar": 3,
      "Kitoblar": 1,
    },
  };

  const gamesData = {
    labels: Object.keys(stats.gamesPlayed),
    datasets: [
      {
        label: "O'yinlar soni",
        data: Object.values(stats.gamesPlayed),
        backgroundColor: ["#FF9AA2", "#36A2EB", "#FFD166"],
      },
    ],
  };

  const registrationData = {
    labels: ["Ro'yxatdan o'tganlar", "Ro'yxatdan o'tmaganlar"],
    datasets: [
      {
        label: "% Foydalanuvchilar",
        data: [stats.registeredUsers, stats.totalVisitors - stats.registeredUsers],
        backgroundColor: ["#36A2EB", "#FF9AA2"],
      },
    ],
  };

  return (
    <div className="analytics-page w-full h-full" style={{ padding: "40px", fontFamily: "'Poppins', sans-serif" }}>
      <h1 style={{ color: "#4B0082", marginBottom: "30px" }}>Foydalanuvchi va o'yin statistikasi</h1>

      <div className="chart-section" style={{ marginBottom: "60px", background: "#F8F0FF", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <h2 style={{ color: "#4B0082", marginBottom: "20px" }}>O'yinlar faoliyati</h2>
        <Pie data={gamesData} />
      </div>

      <div className="chart-section" style={{ background: "#E1EEFF", padding: "30px", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
        <h2 style={{ color: "#2460D0", marginBottom: "20px" }}>Foydalanuvchilar ro'yxati</h2>
        <Bar data={registrationData} />
      </div>
    </div>
  );
};

export default AnalyticsPage;
