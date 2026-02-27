import Image from "next/image"
import hero from "@/assest/hero/heroImage.png"

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8FD] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-10 py-12 grid lg:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Discover <br />
            more than{" "}
            <span className="text-blue-600">5000+ Jobs</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-lg">
            Great platform for the job seeker that searching for
            new career heights and passionate about startups.
          </p>

          {/* SEARCH BOX */}
          <div className="lg:w-[700] mt-8 bg-white shadow-lg rounded-lg p-4 flex flex-col lg:flex-row gap-4  ">
            
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition">
              Search my job
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            Popular: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
        
        {/* RIGHT IMAGE WITH BACKGROUND */}
        <div className="relative flex justify-center items-center">
          
          {/* Background Shape */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-blue-100 rounded-full right-0"></div>

          {/* Hero Image */}
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
  )
}