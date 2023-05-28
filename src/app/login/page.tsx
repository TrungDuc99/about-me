"use client";
import auThenticateApi from "@/api/auth";

import React, { SyntheticEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();
  console.log("====================================");
  console.log(email, password);
  console.log("====================================");
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = await auThenticateApi.login({
      email,
      password,
    });
    console.log("====================================");
    console.log(res);
    console.log("====================================");
    if (res.success) {
      localStorage.setItem("jwt_token_key", res.data.token);
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    }
  };

  return (
    <main>
      <div className="login-page-wrapper">
        <form onSubmit={submit}>
          <h1 className="h3 fw-normal mb-3">Đăngasdasd nhập</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
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
