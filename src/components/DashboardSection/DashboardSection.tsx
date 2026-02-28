import Image from "next/image";
import dashboard from "@/assest/company/Dashboard Company.png";

export default function DashboardSection() {
  return (
    <div className="bg-[#FFFFFF] py-10">
      <section className="relative container mx-auto overflow-hidden rounded-xl bg-[#4640DE]">

        {/* Top Left White Cut */}
        <div className="absolute -top-60 -left-60 w-[300px] h-[500px] bg-[#FFFFFF] rotate-45"></div>

        {/* Bottom Right White Cut */}
        <div className="absolute -bottom-60 -right-60 w-[300px] h-[500px] bg-[#FFFFFF] rotate-45"></div>

        <div className="relative grid md:grid-cols-2 items-center px-16 py-20">
          
          {/* LEFT CONTENT */}
          <div className="text-white z-15">
            <h1 className="text-5xl font-bold leading-tight">
              Start posting <br /> jobs today
            </h1>

            <p className="mt-6 text-lg text-indigo-100">
              Start posting jobs for only $10.
            </p>

            <button className="mt-8 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 transition">
              Sign Up For Free
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 flex justify-end">
            <Image
              src={dashboard}
              alt="Dashboard Preview"
              width={650}
              height={500}
              className="translate-y-20 object-contain"
              priority
            />
          </div>

        </div>
      </section>
    </div>
  );
}