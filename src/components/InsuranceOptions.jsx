import React from "react";
import carIcon from "../assets/car.png";
import bikeIcon from "../assets/bike.png";
import healthIcon from "../assets/health.png";
import termIcon from "../assets/term.png";
import businessIcon from "../assets/business.png";
import homeIcon from "../assets/home.png";
import investmentIcon from "../assets/investment.png";

const options = [
  { key: "home", label: "Home", icon: homeIcon },
  { key: "car", label: "Car", icon: carIcon },
  { key: "bike", label: "Bike", icon: bikeIcon },
  { key: "health", label: "Health", icon: healthIcon },
  { key: "term", label: "Term", icon: termIcon },
  { key: "investment", label: "Investment", icon: investmentIcon },
  { key: "business", label: "Business", icon: businessIcon },
];

export default function InsuranceOptions({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-6 mt-8 w-full max-w-[820px]">
      {options.map((opt) => {
        const isActive = active === opt.key;

        return (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`
                w-16 h-16 rounded-full flex items-center justify-center
                bg-white border transition-all duration-300
                ${
                  isActive
                    ? "border-[#F9BD3C] scale-110 shadow-[0_2px_10px_rgba(249,189,60,0.45)]"
                    : "border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                }
                group-hover:border-[#F9BD3C]
                group-hover:scale-110
                group-hover:shadow-[0_2px_10px_rgba(249,189,60,0.45)]
              `}
            >
              <img
                src={opt.icon}
                alt={opt.label}
                className="w-8 h-8 object-contain"
              />
            </div>

            <span
              className={`text-xs font-medium transition-colors ${
                isActive ? "text-gray-900" : "text-gray-700"
              }`}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
