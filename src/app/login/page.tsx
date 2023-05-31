"use client";
import auThenticateApi from "@/api/auth";

import React, { SyntheticEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await auThenticateApi.login({
      email: "ngocdien@gmail.com",
      password: "123456aA@",
    });
    console.log("==================asdas===qeqwe===============");
    console.log(res);
    console.log("====================================");
    if (res.success) {
      localStorage.setItem("authenticationToken", res.data.token);
    }
  };

  return (
    <main className=" flex h-full w-full flex-1 items-center justify-center bg-fuchsia-50">
      <div className="login-page-wrapper">
        <form onSubmit={submit}>
          <h1 className="h3 fw-normal mb-3">Đăngasdasd nhập</h1>

          <div className="form-floating">
            <input
              type="email"
              style={{ color: "red" }}
              className="form-control"
              placeholder="Email"
              defaultValue="ngocdien@gmail.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-floating">
            <input
              style={{ color: "red" }}
              type="password"
              className="form-control"
              defaultValue="123456aA@"
              placeholder="Mật khẩu"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            style={{ width: "100%", backgroundColor: "red" }}
            className="btn btn-lg"
            name="submit"
            onClick={submit}
          >
            Đăng nhập
          </button>
        </form>
        <div className="social-login-wrapper">
          <button className="google">Đăng nhập bằng Google</button>
        </div>
      </div>
    </main>
  );
};

export default Login;
