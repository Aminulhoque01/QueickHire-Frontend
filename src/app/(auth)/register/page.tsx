/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/features/services/authApi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [register, { isLoading, error, data }] = useRegisterMutation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER", // default role
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await register(form).unwrap();
      console.log("Registered:", res);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] bg-white p-8 rounded-xl shadow"
      >
        <h2 className="text-2xl font-bold mb-6">Register Account</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          value={form.name}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          value={form.email}
          required
        />

        <div className="relative mb-4">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            value={form.password}
            required
          />
          <span
            className="absolute right-3 top-2 cursor-pointer text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
          </span>
        </div>

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full border p-2 mb-6 rounded"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-[#4640DE] text-white py-2 rounded hover:bg-[#140fb1]"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        {error && (
          <p className="text-red-500 mt-3 text-sm">
            {(error as any)?.data?.message || "Something went wrong"}
          </p>
        )}
      </form>
    </div>
  );
}