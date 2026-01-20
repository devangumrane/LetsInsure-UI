import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ChevronDown, Moon, User } from 'lucide-react';
import NavbarMegaMenu from './NavbarMegaMenu';


export default function Navbar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (label) => {
        setActiveLink(activeLink === label ? null : label);
    };

    return (
        <nav className="sticky top-0 z-50 h-16 w-full flex items-center border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-all">
            <MaxWidthWrapper className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-brand-brown">Lets</span>
                    <span className="text-2xl font-bold text-orange-600">Insurance</span>
                    <div className="bg-orange-100 rounded-full p-0.5 text-[8px] text-orange-600 font-bold self-start mt-1">.com</div>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <NavItem
                        label="General"
                        isActive={activeLink === "General"}
                        onClick={() => handleLinkClick("General")}
                    />
                    <NavItem
                        label="Life"
                        isActive={activeLink === "Life"}
                        onClick={() => handleLinkClick("Life")}
                    />
                    <NavItem
                        label="Claims"
                        isActive={activeLink === "Claims"}
                        onClick={() => handleLinkClick("Claims")}
                    />
                    <NavItem
                        label="Resources"
                        isActive={activeLink === "Resources"}
                        onClick={() => handleLinkClick("Resources")}
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors shadow-sm">
                        Login
                    </button>
                </div>
            </MaxWidthWrapper>

            {/* Mega Menu */}
            <NavbarMegaMenu isOpen={activeLink === "General"} />
        </nav>
    );
}

function NavItem({ label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-1 text-gray-700 font-medium hover:text-orange-600 transition-colors relative group`}
        >
            {label}
            <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
            />
            {/* Animated Underline */}
            <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#F9BD3C] transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}
            />
        </button>
    )
}
