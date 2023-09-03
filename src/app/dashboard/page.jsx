import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const logOut = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/auth/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  //   const getUserDetails = await axios.get("/api/users/me");
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>page</h1>
      <p>{data === null ? "empty" : ""}</p>
    </div>
  );
};

export default Dashboard;
