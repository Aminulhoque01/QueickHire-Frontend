/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Briefcase,
  Palette,
  Mail,
  TrendingUp,
  BarChart,
} from "lucide-react";

const jobs = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    icon: <Mail size={22} />,
    tags: ["Marketing", "Design"],
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    icon: <Palette size={22} />,
    tags: ["Design", "Business"],
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    icon: <Mail size={22} />,
    tags: ["Marketing"],
  },
  {
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    icon: <Palette size={22} />,
    tags: ["Design"],
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    icon: <Briefcase size={22} />,
    tags: ["Marketing", "Design"],
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    icon: <Palette size={22} />,
    tags: ["Design", "Business"],
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    icon: <TrendingUp size={22} />,
    tags: ["Marketing"],
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    icon: <BarChart size={22} />,
    tags: ["Technology"],
  },
];

const tagColors: any = {
  Marketing: "bg-yellow-100 text-yellow-600",
  Design: "bg-green-100 text-green-600",
  Business: "bg-purple-100 text-purple-600",
  Technology: "bg-red-100 text-red-600",
};

export default function Home() {
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
      <div className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border 
                       hover:shadow-xl transition duration-300"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-5">
              {/* Left Logo */}
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
                {job.icon}
              </div>

              {/* Full Time Badge */}
              <span className="text-xs border border-blue-500 
                               text-blue-600 px-3 py-1 rounded-md">
                Full Time
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {job.title}
            </h3>

            {/* Company & Location */}
            <p className="text-sm text-gray-500 mb-4">
              {job.company} · {job.location}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4">
              {job.company} is looking for {job.title} to help the team grow...
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}