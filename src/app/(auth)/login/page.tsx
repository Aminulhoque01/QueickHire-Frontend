/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/features/services/authApi";
import { setCredentials } from "@/redux/features/authSlice";
import { jwtDecode } from "jwt-decode";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface JwtPayload {
  id: string;
  email: string;
  name: string;
  role: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      const token = res.data.token;

      localStorage.setItem("token", token);

      const decoded: JwtPayload = jwtDecode(token);

      dispatch(
        setCredentials({
          user: {
            _id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
          },
          token,
        })
      );

      router.push("/");
    } catch (error: any) {
      alert(error.data?.message || "Login failed");
    }
  };

  return (
    <div className="mt-10 py-20">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input With Toggle */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-2 rounded pr-10"
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#4640DE] text-white px-4 py-2 w-full rounded"
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}