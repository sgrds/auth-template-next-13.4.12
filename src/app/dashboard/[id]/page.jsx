"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Dashboard = ({ params }) => {
  const router = useRouter();
  const logOut = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/auth/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logOut} className="btn btn-error btn-outline mt-16">
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
