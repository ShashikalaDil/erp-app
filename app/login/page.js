"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginLayout from "@/components/LoginLayout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import img2 from "@/public/images/Water-Board-Logo.png";
import img3 from "@/public/images/EmblemSriLanka.png";
import img4 from "@/public/images/login_image.jpg";

export default function Login() {
  const router = useRouter();
  const [employeeNo, setEmployeeNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    apiError: "",
    employeeNo: "",
    password: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleForgotPasswordClick = () => {};

  const handleAdminLoginClick = () => {router.push("/home");};

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <div
        className="flex-col items-center justify-between flex-1 hidden bg-white md:flex"
        style={{ backgroundImage: `url(${img4.src})`, backgroundSize: "cover" }}
      >
        <div className="flex-1"></div>
        <p className="mb-4 text-white">Developed by NWSDB IT Division</p>
      </div>
      <div className="flex items-center justify-center flex-1 p-4 bg-white sm:p-6 md:p-8 lg:p-10">
        <form
          className="w-full max-w-sm p-6 bg-white border rounded-lg sm:p-6 md:p-8 lg:p-10 border-black-900 sm:max-w-md"
          onSubmit={handleSignIn}
        >
          <div className="flex justify-center mb-6">
            <Image
              src={img2}
              alt="Second Logo"
              className="h-12 mx-2 w-60"
              width={48}
              height={48}
            />
            <Image
              src={img3}
              alt="First Logo"
              className="h-12 mx-2"
              width={48}
              height={48}
            />
          </div>
          <h2 className="mb-6 text-2xl font-bold text-left">Login</h2>
          {errors.apiError && <p className="text-red-500">{errors.apiError}</p>}
          <div className="mb-4">
            <label htmlFor="employeeNo" className="block mb-2 text-black-700">
              User Name
            </label>
            <input
              type="text"
              id="employeeNo"
              name="employeeNo"
              value={employeeNo}
              onChange={(e) => setEmployeeNo(e.target.value)}
              className="w-full p-2 border rounded border-black-300 focus:outline-none focus:ring-2 focus:ring-black-500"
              style={{ backgroundColor: "white" }}
            />
            {errors.employeeNo && (
              <p className="text-sm text-red-500">{errors.employeeNo}</p>
            )}
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="block mb-2 text-black-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded border-black-300 focus:outline-none focus:ring-2 focus:ring-black-500"
              style={{ backgroundColor: "white" }}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer pt-7"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="flex items-center mb-3">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <span
              className="self-end text-blue-500 cursor-pointer hover:underline"
              onClick={handleForgotPasswordClick}
            >
              Forgot Password?
            </span>
          </div>
          <div className="mb-4">
            <Button className="w-full" type="submit">
              Login
            </Button>
            <div className="flex justify-end mt-2">
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={handleAdminLoginClick}
              >
                Admin Login
              </Button>
            </div>
          </div>
          <div className="text-center">
            <p style={{ color: "#4b5563" }}>
              If you are trouble to login, please contact administration
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
