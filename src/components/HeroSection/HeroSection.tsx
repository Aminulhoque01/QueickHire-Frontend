/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import hero from "@/assest/hero/heroImage.png";
import { useGetJobsQuery } from "@/redux/features/services/jobApi";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [title, setTitle] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [searchParams, setSearchParams] = useState<any>(null);

  const router = useRouter();

  const { data } = useGetJobsQuery(searchParams, { skip: !searchParams });
  const jobs = data?.data?.data || [];

  const handleSearch = () => {
    setSearchParams({
      page: 1,
      limit: 10,
      title,
      workPlace,
    });
  };

  return (
    <section className="relative bg-[#F8F8FD] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-10 grid lg:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="w-full relative">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Discover <br />
            more than <br />
            <span className="text-[#26A4FF]">5000+ Jobs</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-lg">
            Great platform for the job seeker that searching for
            new career heights and passionate about startups.
          </p>

          {/* SEARCH BOX */}
          <div className="relative lg:w-[700px] mt-8 bg-white shadow-lg rounded-lg p-4 flex flex-col lg:flex-row gap-4">

            <input
              type="text"
              placeholder="Job title or keyword"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
            />

            <input
              type="text"
              placeholder="Location"
              value={workPlace}
              onChange={(e) => setWorkPlace(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4640DE]"
            />

            <button
              onClick={handleSearch}
              className="bg-[#4640DE] hover:bg-[#2822e2] text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Search my job
            </button>

            {/* 🔥 DROPDOWN RESULT */}
            {searchParams && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border rounded-md shadow-xl z-50 max-h-60 overflow-y-auto">
                {jobs.length > 0 ? (
                  jobs.map((job: any) => (
                    <div
                      key={job._id}
                      onClick={() => router.push(`/pages/job/${job._id}`)}
                      className="px-4 py-3 hover:bg-[#F1F1FF] cursor-pointer border-b last:border-none"
                    >
                      <p className="font-semibold text-gray-800">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.workPlace}</p>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500">No jobs found</div>
                )}
              </div>
            )}

          </div>

          <p className="text-sm text-gray-400 mt-6">
            Popular: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
        
        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-100 rounded-full right-0"></div>

          <Image
            src={hero}
            alt="Hero Image"
            width={500}
            height={500}
            className="relative object-contain z-10 w-64 sm:w-80 lg:w-[400px]"
          />
        </div>

      </div>
    </section>
  );
}