



/* eslint-disable @typescript-eslint/no-explicit-any */

"use client"
import Image from "next/image";
import { useGetJobsQuery } from "@/redux/features/services/jobApi";

 

export default function LatestJobs() {
  const { data: jobData = [], isLoading } = useGetJobsQuery({ page: 1, limit: 20 });

  // Sort backend data by createdAt descending
  const backendJobs = jobData?.data?.data
    ? [...jobData.data.data].sort(
        (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    : [];

  // Use backend data if available, else fallback to initialJobs
  

  return (
    <div className="bg-[#F8F8FD] py-16 px-4">
      <div className="container px-5 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest <span className="text-[#4640DE]">jobs open</span>
          </h2>

          <button className="text-[#4640DE] font-medium hover:underline flex items-center gap-2">
            Show all jobs →
          </button>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {backendJobs.map((job: any) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-14 h-14 relative">
                  <Image
                    src={job.logo || job.image || "/latest/Company.png"}
                    alt={job.company}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {job.company} • {job.location} | {job.workPlace}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-3 mt-4 flex-wrap">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600">
                      Full-Time
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border border-orange-400 text-orange-500">
                      Marketing
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full border border-[#4640DE] text-[#4640DE]">
                      Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && <p className="text-gray-500">Loading jobs...</p>}
        </div>
      </div>
    </div>
  );
}