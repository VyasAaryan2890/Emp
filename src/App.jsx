import { useContext, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null); // Track user role (e.g., 'admin' or 'employee')

  const handleLogin = (email, password) => {
    if (email === "ad@a.com" && password === "123") {
      setUser("admin");
    } else if (email === "em1@a.com" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null); // Reset user state to null to log out
  };

  const data = useContext(AuthContext); // Access AuthContext data (if needed)
  console.log(data);

  return (
    <>
      {/* Render Login or Dashboard based on the user state */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <EmployeeDashboard handleLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
