/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAppliedJobsQuery } from "@/redux/features/services/applicationApi";
import React from "react";
 

export default function ApplyJobsPage() {
  const { data, isLoading, isError } = useGetAppliedJobsQuery({});


  if (isLoading) return <p className="text-center mt-10">Loading your applied jobs...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Failed to load applied jobs.</p>;

  const jobs = data?.data || [];
  console.log("dfgdf",jobs.title)

  if (jobs.length === 0) {
    return <p className="text-center mt-10">You have not applied to any jobs yet.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Applied Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((app: any) => (
        <div key={app._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-200">
            <h2 className="text-xl font-semibold mb-2">{app.jobId?.title}</h2>
            <p className="text-gray-600 mb-1">Company: {app.jobId?.company}</p>
            <p className="text-gray-600 mb-1">Location: {app.jobId?.workPlace}</p>
            {app.jobId?.category && <p className="text-gray-500 text-sm">Category: {app.jobId.category.name}</p>}
        </div>
))}
      </div>
    </div>
  );
}