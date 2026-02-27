import Image from "next/image";
import company1 from "@/assest/company/company1.png"
import company2 from "@/assest/company/company2.png"
import company3 from "@/assest/company/tesla-9 1.png"
import company4 from "@/assest/company/amd-logo-1.png"
import company5 from "@/assest/company/talkit 1.png"

const companies = [
  {
    name: "Vodafone",
    logo: company1,
  },
  {
    name: "Intel",
    logo: company2,
  },
  {
    name: "Tesla",
    logo: company3,
  },
  {
    name: "AMD",
    logo: company4,
  },
  {
    name: "Talkit",
    logo: company5,
  },
];

export default function CompaniesSection() {
  return (
    <section className="bg-[#FFFFFF] py-5">
      <div className="container mx-auto  ">
        
        <p className="text-gray-500 text-sm mb-10 px-10">
          Companies we helped grow
        </p>

        <div className="flex  md:flex-wrap items-center  gap-10 md:gap-16 ">
          {companies.map((company, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={50}
                className="object-contain h-[24px] w-[182.68215942382812px] "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}