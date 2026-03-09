import React, { useState } from "react";

function Login() {
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginUserData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col items-center px-[27px]">
      <h1 className="text-3xl font-bold mt-10 mb-6">Sign in to your account</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-[500px]"
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginUserData.email}
          className="border border-gray-300 h-[40px] indent-[10px] shadow-sm font-normal rounded-t-md focus:outline-none"
        />

        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginUserData.password}
          className="border border-gray-300 border-t-0 h-[40px] indent-[10px] shadow-sm font-normal rounded-b-md focus:outline-none"
        />

        <button className="bg-[#FF8C38] text-white h-[55px] rounded-md mt-[22px] font-medium">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
