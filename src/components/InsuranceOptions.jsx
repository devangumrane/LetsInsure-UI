import React from 'react';
import carIcon from '../assets/car.png';
import bikeIcon from '../assets/bike.png';
import healthIcon from '../assets/health.png';
import termIcon from '../assets/term.png';
import businessIcon from '../assets/business.png';
import homeIcon from '../assets/home.png';
import investmentIcon from '../assets/investment.png';

const options = [
  { label: 'Home', icon: homeIcon },
  { label: 'Car', icon: carIcon },
  { label: 'Bike', icon: bikeIcon },
  { label: 'Health', icon: healthIcon },
  { label: 'Term', icon: termIcon },
  { label: 'Investment', icon: investmentIcon },
  { label: 'Business', icon: businessIcon },
];

export default function InsuranceOptions() {
  return (
    <div className="flex flex-wrap items-center gap-6 mt-8 w-full max-w-[820px]">
      {options.map((opt, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <div
            className="
              w-16 h-16 rounded-full flex items-center justify-center
              bg-white border border-gray-100
              shadow-[0_2px_8px_rgba(0,0,0,0.08)]
              transition-all duration-300
              group-hover:scale-110
              group-hover:border-[#F9BD3C]
              group-hover:shadow-[0_2px_10px_rgba(249,189,60,0.45)]
            "
          >
            <img
              src={opt.icon}
              alt={opt.label}
              className="w-8 h-8 object-contain"
            />
          </div>

          <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
            {opt.label}
          </span>
        </div>
      ))}
    </div>
  );
}
