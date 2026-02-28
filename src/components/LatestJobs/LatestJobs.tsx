import Image from "next/image";
import company1 from "@/assest/latest/Company.png"
import Nomad from "@/assest/latest/Nomad.png"
import company2 from "@/assest/latest/Company2.png"
import brand from "@/assest/latest/brand.png"
import Company3 from "@/assest/latest/Company3.png"
import interactive from "@/assest/latest/intreactive.png"
import Company4 from "@/assest/latest/Company4.png"
import Company5 from "@/assest/latest/Company5.png"

const jobs = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: company1,
  },
  {
    id: 2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: Nomad,
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    logo:company2,
  },
  {
    id: 4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    logo: brand,
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: Company3,
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: interactive,
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: Company4,
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: Company5,
  },
];

export default function LatestJobs() {
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
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-14 h-14 relative">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {job.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {job.company} • {job.location}
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
        </div>
      </div>
    </div>
  );
}