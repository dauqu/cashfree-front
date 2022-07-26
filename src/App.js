import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";

import Beneficiary from "./components/Beneficiary";
import Request from "./components/Request";
import Withdraw from "./components/Withdraw";
import History from "./components/History";
import * as React from "react";
import Home from "./components/Home";

function App() {
  const [login, setLogin] = React.useState([]);

  console.log(login);

  const navigate = useNavigate();

  //Check have Login
  async function checkLogin() {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_API}/profile/check_have_token`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const json = await response.json();
    setLogin(json);

    if (json === true) {
      navigate("/dashboard/");
    } else {
      // navigate("/login");
    }
  }
  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/" element={<Home />} />
          <Route path="/dashboard/beneficiary" element={<Beneficiary />} />
          <Route path="/dashboard/request" element={<Request />} />
          <Route path="/dashboard/withdraw" element={<Withdraw />} />
          <Route path="/dashboard/history" element={<History />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
