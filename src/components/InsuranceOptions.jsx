import React from 'react';
import carIcon from '../assets/car.png';
import bikeIcon from '../assets/bike.png';
import healthIcon from '../assets/health.png';
import termIcon from '../assets/term.png';
import businessIcon from '../assets/business.png';
import homeIcon from '../assets/home.png';
import investmentIcon from '../assets/investment.png';

const options = [
    { label: 'Home', icon: homeIcon, isImage: true },
    { label: 'Car', icon: carIcon, isImage: true },
    { label: 'Bike', icon: bikeIcon, isImage: true },
    { label: 'Health', icon: healthIcon, isImage: true },
    { label: 'Term', icon: termIcon, isImage: true },
    { label: 'Investment', icon: investmentIcon, isImage: true },
    { label: 'Business', icon: businessIcon, isImage: true },
];

export default function InsuranceOptions() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 w-full max-w-[800px]">
            {options.map((opt, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm border border-gray-100 transition-all duration-300 group-hover:scale-110 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] group-hover:border-[#F9BD3C] group-hover:shadow-[0_2px_8px_rgba(249,189,60,0.4)]`}>
                        {opt.isImage ? (
                            <img src={opt.icon} alt={opt.label} className="w-18 h-18 object-contain" />
                        ) : (
                            <opt.icon size={24} className={opt.color} strokeWidth={2} />
                        )}
                    </div>
                    <span className="text-xs font-medium text-gray-700">{opt.label}</span>
                </div>
            ))}
        </div>
    );
}
