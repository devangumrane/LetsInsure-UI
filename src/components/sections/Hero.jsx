import React, { useState } from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import InsuranceOptions from "../../features/insurance/components/InsuranceOptions";
import InputForm from "../../features/insurance/components/InputForm";
import heroImg from "../../assets/Hero-img.png";

import HealthFlow from "../../features/health-flow/components/HealthFlow";

export default function Hero() {
  // 🔑 Single source of truth
  const [insuranceType, setInsuranceType] = useState("home");

  return (
    <section className="w-full bg-[#FAFAFA] pt-10 pb-20 relative">
      <MaxWidthWrapper>
        {/* --------------------
            TOP CONTENT
        -------------------- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left */}
          <div className="w-full lg:w-[65%]">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Now you will be confident <br />
              <span className="text-primary">in the future</span>
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              It's easy to get a quick quote that fits your budget.
              <br />
              Trusted by 7 Crore+ Indians
            </p>

            {/* ICON CONTROLLER */}
            <InsuranceOptions
              active={insuranceType}
              onChange={setInsuranceType}
            />
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:block lg:w-[35%] relative">
            <img
              src={heroImg}
              alt="Family"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* --------------------
            STATE-DRIVEN FORM
        -------------------- */}
        <div className="mt-8">
          {insuranceType === "health" ? (
            <HealthFlow />
          ) : (
            <InputForm insuranceType={insuranceType} />
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
