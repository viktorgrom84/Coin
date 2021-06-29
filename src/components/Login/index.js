import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { signIn, user } = useContext(UserContext);
  const [customer, setCustomer] = useState(null);
  const history = useHistory();

  const handleUserLogin = (event) => {
    event.preventDefault();
    if (customer) {
      signIn(customer);
    }
  };

  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  useEffect(() => {
    if (user) {
      history.push("/user");
    }
  }, [user]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        border: "3px solid green",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          marginBottom: 150,
        }}
      >
        <p>Logo</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            border: "1px solid grey",
            padding: 40,
            textAlign: "center",
          }}
        >
          <p>Welcome! Sign In With Your Jobcoin Address</p>
          <hr />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ display: "flex", flexDirection: "column" }}>
              Jobcoin address:
              <input onChange={handleChange} type="text" />
            </label>
            <button onClick={handleUserLogin} style={{ marginTop: 20 }}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;