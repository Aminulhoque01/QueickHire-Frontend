/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGetJobsQuery } from "@/redux/features/services/jobApi";
import { useRouter } from "next/navigation";

const tagColors: any = {
  Marketing: "bg-yellow-100 text-yellow-600",
  Design: "bg-green-100 text-green-600",
  Business: "bg-purple-100 text-purple-600",
  Technology: "bg-red-100 text-red-600",
  HumanResource: "bg-green-100 text-white",
  Finance: "bg-gray-200",
  Engineering: "bg-blue-200 text-black",
  Sales: "bg-orange-500 text-white",
};

export default function FeaturedJobs() {
   const router = useRouter();
  const [page, setPage] = useState(1); 
  const limit = 8;  

  const { data: jobData = [], isLoading, isError } = useGetJobsQuery({ page, limit });
  const jobs = jobData?.data?.data;

  if (isLoading) return <p className="text-center py-20">Loading jobs...</p>;
  if (isError) return <p className="text-center py-20 text-red-500">Failed to load jobs</p>;

  const totalJobs = jobData?.data?.total || 0;
  const totalPages = Math.ceil(totalJobs / limit);

  return (
    <div className="bg-[#ffffff] min-h-screen py-14 px-4 md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="text-blue-600">jobs</span>
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          Show all jobs →
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 cursor-pointer">
        {jobs?.map((job: any) => (
          <div
            key={job._id}
            onClick={() => router.push(`/pages/job/${job._id}`)}
            className="bg-white p-6 rounded-xl border hover:shadow-xl transition duration-300"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-5">
              {/* Logo */}
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
                {job.image ? (
                  <Image
                    src={job.image}
                    alt={job.company}
                    width={48}
                    height={48}
                    className="rounded-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold">{job.company?.charAt(0)}</span>
                )}
              </div>

              {/* Job Type */}
              <span className="text-xs border border-blue-500 text-blue-600 px-3 py-1 rounded-md">
                {job.jobType}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">{job.title}</h3>

            {/* Company & Location */}
            <p className="text-sm text-gray-500 mb-1">
              {job.company} · {job.location}
            </p>
            <p className="text-sm text-gray-500 mb-4">{job.workPlace}</p>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">{job.description?.slice(0, 80)}...</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.category?.name && (
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[job.category.name]}`}
                >
                  {job.category.name}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

     
      
    </div>
  );
}