import React, { useState } from "react";

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Half (Login Section) */}
      <div
        style={{
          flex: 1,
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",c
          backgroundColor: isLogin ? "#e3f2fd" : "#f8f9fa",
          transition: "background-color 0.3s",
        }}
      >
        <h2>Login</h2>
        <form style={{ width: "80%" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email or Mobile Number</label>
            <input
              type="text"
              placeholder="Enter email or mobile"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem",
            backgroundColor: "#db4437",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => alert("Login with Google")}
        >
          Login with Google
        </button>
        <p
          style={{
            marginTop: "1rem",
            cursor: "pointer",
            color: "#007bff",
            textDecoration: "underline",
          }}
          onClick={() => setIsLogin(false)}
        >
          Don't have an account? Sign Up
        </p>
      </div>

      {/* Right Half (Sign Up Section) */}
      <div
        style={{
          flex: 1,
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isLogin ? "#f8f9fa" : "#e3f2fd",
          transition: "background-color 0.3s",
        }}
      >
        <h2>Sign Up</h2>
        <form style={{ width: "80%" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.5rem",
              backgroundColor: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        <p
          style={{
            marginTop: "1rem",
            cursor: "pointer",
            color: "#007bff",
            textDecoration: "underline",
          }}
          onClick={() => setIsLogin(true)}
        >
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default LoginSignupPage;
