import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ChevronRight, ShieldCheck, Download, Star } from 'lucide-react';
import homeIcon from '../assets/home.png';
import carIcon from '../assets/car.png';
import bikeIcon from '../assets/bike.png';
import healthIcon from '../assets/health.png';
import termIcon from '../assets/term.png'; // Using Term for 'Travel' placeholder or generic if needed, or stick to Lucide for missing ones
import businessIcon from '../assets/business.png';
import { Plane, Truck, HelpCircle, Hammer, HardHat, Sofa, Users } from 'lucide-react'; // Fallback icons

const generalProducts = [
    { label: 'Car Insurance', icon: carIcon, isAsset: true },
    { label: 'Two Wheeler Insurance', icon: bikeIcon, isAsset: true },
    { label: 'Commercial Vehicle Insurance', icon: Truck, isAsset: false },
    { label: 'Health Insurance', icon: healthIcon, isAsset: true },
    { label: 'Property Insurance', icon: homeIcon, isAsset: true },
    { label: 'Travel Insurance', icon: Plane, isAsset: false },
    { label: 'Business Insurance', icon: businessIcon, isAsset: true, active: true }, // Highlighted in image
    { label: 'Frequently Asked Questions', icon: HelpCircle, isAsset: false },
];

const secondaryProducts = [
    'Workmen Compensation Insurance',
    'Contractors All Risk Insurance',
    'Contractors Plant & Machinery Insurance',
    'D&O Liability Insurance',
    'Erection All Risk Insurance',
    'Fidelity Insurance',
    'General Liability Insurance',
    'Machinery Breakdown Insurance'
];

export default function NavbarMegaMenu({ isOpen }) {
    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <MaxWidthWrapper>
                <div className="flex flex-col lg:flex-row py-8 gap-8">

                    {/* Column 1: Intro */}
                    <div className="w-full lg:w-1/4 pr-4 border-r border-gray-100">
                        <div className="flex flex-col gap-4">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-orange-500 w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">General Products</h3>
                                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                                    Simple & Transparent! Policies that match all your insurance needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Main List */}
                    <div className="w-full lg:w-1/4 border-r border-gray-100 px-4">
                        <ul className="space-y-4">
                            {generalProducts.map((item, idx) => (
                                <li key={idx} className={`flex items-center justify-between group cursor-pointer ${item.active ? 'text-[#F9BD3C] font-medium' : 'text-gray-700 hover:text-[#F9BD3C]'}`}>
                                    <div className="flex items-center gap-3">
                                        {/* Icon Container */}
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            {item.isAsset ? (
                                                <img src={item.icon} alt={item.label} className="w-full h-full object-contain" />
                                            ) : (
                                                <item.icon size={20} strokeWidth={1.5} />
                                            )}
                                        </div>
                                        <span className="text-sm">{item.label}</span>
                                    </div>
                                    <ChevronRight size={14} className={`text-gray-300 group-hover:text-[#F9BD3C] ${item.active ? 'text-[#F9BD3C]' : ''}`} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Secondary List */}
                    <div className="w-full lg:w-1/4 border-r border-gray-100 px-4">
                        <ul className="space-y-5 mt-1">
                            {secondaryProducts.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-600 hover:text-[#F9BD3C] cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: App Download */}
                    <div className="w-full lg:w-1/4 pl-4 flex flex-col items-center">
                        <div className="bg-gray-50 rounded-lg p-6 w-full flex flex-col items-center">
                            {/* Mock Phone UI */}
                            <div className="border-2 border-gray-800 rounded-[2rem] p-1 w-32 h-56 bg-white shadow-lg mb-4 flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute top-2 w-8 h-1 bg-gray-800 rounded-full"></div>
                                <div className="text-[10px] text-center px-2">
                                    <div className="font-bold mb-2">LetsInsure</div>
                                    <div className="flex gap-1 justify-center mb-2">
                                        <div className="w-2 h-2 bg-orange-100 rounded-full"></div>
                                        <div className="w-2 h-2 bg-orange-100 rounded-full"></div>
                                        <div className="w-2 h-2 bg-orange-100 rounded-full"></div>
                                    </div>
                                    <div className="text-gray-400">Simplifying Insurance</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 w-full justify-center border-t border-gray-200 pt-4">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1 text-sm font-bold">
                                        4.8 <Star size={10} fill="currentColor" className="text-black" />
                                    </div>
                                    <div className="text-[10px] text-gray-500">Rated App</div>
                                </div>
                                <div className="w-[1px] h-8 bg-gray-300"></div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-1 text-sm font-bold">
                                        4.2 <Star size={10} fill="currentColor" className="text-black" />
                                    </div>
                                    <div className="text-[10px] text-gray-500">Rated App</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-sm font-bold text-gray-800 mb-2">Scan to download</p>
                            {/* QR Placeholder */}
                            <div className="w-24 h-24 bg-white border border-gray-200 p-1 mx-auto">
                                <div className="w-full h-full bg-black flex items-center justify-center text-white text-[8px]">QR CODE</div>
                            </div>
                        </div>
                    </div>

                </div>
            </MaxWidthWrapper>
        </div>
    );
}
