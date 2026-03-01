/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import {
//   ArrowRight,
//   Megaphone,
//   Briefcase,
//   Code2,
//   Monitor,
//   Wallet,
//   Users,
//   BarChart3,
//   Wrench,
// } from "lucide-react";
// import { useGetCategoriesQuery } from "@/redux/features/services/categoryApi";

// const categories = [
//   { name: "Design", jobs: 235, icon: Wrench },
//   { name: "Sales", jobs: 756, icon: BarChart3 },
//   { name: "Marketing", jobs: 140, icon: Megaphone },
//   { name: "Finance", jobs: 325, icon: Wallet },
//   { name: "Technology", jobs: 436, icon: Monitor },
//   { name: "Engineering", jobs: 542, icon: Code2 },
//   { name: "Business", jobs: 211, icon: Briefcase },
//   { name: "Human Resource", jobs: 346, icon: Users },
// ];

// export default function ExploreCategory() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const {data:category}=useGetCategoriesQuery({});

//   console.log(category)

//   return (
//     <section className="bg-[#FFFFFF] py-16">
//       <div className="container mx-auto px-8">
        
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//           <h2 className="text-3xl font-bold">
//             Explore by <span style={{ color: "#26A4FF" }}>category</span>
//           </h2>

//           <button className="flex items-center gap-2 font-medium hover:gap-3 transition-all"
//             style={{ color: "#4640DE" }}>
//             Show all jobs
//             <ArrowRight size={18} />
//           </button>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.map((item, index) => {
//             const Icon = item.icon;
//             const isActive = activeIndex === index;

//             return (
//               <div
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group
//                   ${
//                     isActive
//                       ? "text-white shadow-lg"
//                       : "bg-white hover:shadow-md"
//                   }`}
//                 style={{
//                   backgroundColor: isActive ? "#4640DE" : "",
//                 }}
//               >
//                 <Icon
//                   size={28}
//                   className={`mb-6 ${
//                     isActive ? "text-white" : "text-[#4640DE]"
//                   }`}
//                 />

//                 <h3 className="font-semibold text-lg">{item.name}</h3>

//                 <p
//                   className={`mt-1 text-sm ${
//                     isActive ? "text-gray-200" : "text-gray-500"
//                   }`}
//                 >
//                   {item.jobs} jobs available
//                 </p>

//                 <div className="mt-4 flex justify-end">
//                   <ArrowRight
//                     size={18}
//                     className={`transition-transform group-hover:translate-x-1 ${
//                       isActive ? "text-white" : "text-gray-400"
//                     }`}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import {
  ArrowRight,
  Megaphone,
  Briefcase,
  Code2,
  Monitor,
  Wallet,
  Users,
  BarChart3,
  Wrench,
} from "lucide-react";
import { useGetCategoriesQuery } from "@/redux/features/services/categoryApi";

export default function ExploreCategory() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { data: category, isLoading } = useGetCategoriesQuery({});
  
  const iconMap: any = {
    Design: Wrench,
    Sales: BarChart3,
    Marketing: Megaphone,
    Finance: Wallet,
    Technology: Monitor,
    Engineering: Code2,
    Business: Briefcase,
    "Human Resource": Users,
  };

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="bg-[#FFFFFF] py-16">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Explore by <span style={{ color: "#26A4FF" }}>category</span>
          </h2>

          <button
            className="flex items-center gap-2 font-medium hover:gap-3 transition-all"
            style={{ color: "#4640DE" }}
          >
            Show all jobs
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category?.data?.map((item: any, index: number) => {
            const Icon = iconMap[item.name] || Briefcase;
            const isActive = activeIndex === index;

            return (
              <div
                key={item._id}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 group
                  ${
                    isActive
                      ? "text-white shadow-lg"
                      : "bg-white hover:shadow-md"
                  }`}
                style={{
                  backgroundColor: isActive ? "#4640DE" : "",
                }}
              >
                <Icon
                  size={28}
                  className={`mb-6 ${
                    isActive ? "text-white" : "text-[#4640DE]"
                  }`}
                />

                <h3 className="font-semibold text-lg">{item.name}</h3>

                <p
                  className={`mt-1 text-sm ${
                    isActive ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  {item.jobCount} jobs available
                </p>

                <div className="mt-4 flex justify-end">
                  <ArrowRight
                    size={18}
                    className={`transition-transform group-hover:translate-x-1 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}