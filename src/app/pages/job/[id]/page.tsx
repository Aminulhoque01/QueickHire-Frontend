"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetJobByIdQuery } from "@/redux/features/services/jobApi";
import toast from "react-hot-toast";

export default function JobDetailsPage() {
  const params = useParams();
  const jobId = params.id;

  const { data: job, isLoading, isError } = useGetJobByIdQuery(jobId as string);
  const jobData = job?.data;
  console.log(jobData)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting application:", { jobId, ...formData });

    setIsModalOpen(false);

    toast.success("Application submitted successfully 🎉");

    setFormData({
        name: "",
        email: "",
        resumeLink: "",
        coverNote: "",
    });
    };
  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (isError || !jobData) return <p className="text-center mt-10">Job not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Job Card */}
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-lg overflow-hidden">
        {jobData.image && (
          <div className="relative w-full md:w-1/3 h-64 md:h-auto">
            <Image src={jobData.image} alt={jobData.title} fill className="object-cover" />
          </div>
        )}

        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{jobData.title}</h1>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Company:</span> {jobData.company || "N/A"}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Location:</span> {jobData.workPlace || "N/A"}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Category:</span> {jobData.category?.name || "N/A"}
          </p>

          <div className="text-gray-700 mb-6 leading-relaxed"><span className="font-semibold">Description:</span> {jobData.description || "No description available."}</div>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={() => setIsModalOpen(true)}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Apply for {jobData.title}</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="resumeLink"
                placeholder="Resume Link"
                value={formData.resumeLink}
                onChange={handleChange}
                className="border px-4 py-2 rounded"
                required
              />
              <textarea
                name="coverNote"
                placeholder="Cover Note"
                value={formData.coverNote}
                onChange={handleChange}
                className="border px-4 py-2 rounded resize-none"
                rows={4}
                required
              ></textarea>

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}