import React, { useState } from "react";
import MaxWidthWrapper from "../components/ui/MaxWidthWrapper";
import { ChevronRight, ShieldCheck, Star } from "lucide-react";
import { navbarMenuConfig } from "./constants/navbarMenuConfig";

export default function NavbarMegaMenu({ activeMenu }) {
  if (!activeMenu) return null;

  const menu = navbarMenuConfig[activeMenu];
  if (!menu) return null;

  // default: first category selected
  const [activeCategory, setActiveCategory] = useState(
    menu.categories[0]
  );

  return (
    <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-50">
      <MaxWidthWrapper>
        <div className="flex py-8 gap-8">

          {/* Column 1 — Intro */}
          <div className="w-1/4 pr-4 border-r border-gray-100">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-orange-500 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {menu.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  {menu.description}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 — Primary options */}
          <div className="w-1/4 border-r border-gray-100 px-4">
            <ul className="space-y-4">
              {menu.categories.map((item, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setActiveCategory(item)}
                  className={`flex items-center justify-between cursor-pointer group
                    ${activeCategory.label === item.label
                      ? "text-[#F9BD3C] font-medium"
                      : "text-gray-700 hover:text-[#F9BD3C]"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {item.isAsset ? (
                        <img
                          src={item.icon}
                          alt={item.label}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <item.icon size={20} />
                      )}
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <ChevronRight size={14} />
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contextual links */}
          <div className="w-1/4 border-r border-gray-100 px-4">
            <ul className="space-y-4 mt-1">
              {activeCategory.children.map((child, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-600 hover:text-[#F9BD3C] cursor-pointer"
                >
                  {child}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — App promo (static) */}
          <div className="w-1/4 pl-4 flex flex-col items-center">
            <div className="bg-gray-50 rounded-lg p-6 w-full flex flex-col items-center">
              <div className="border-2 border-gray-800 rounded-[2rem] p-1 w-32 h-56 bg-white shadow-lg mb-4" />
              <div className="flex items-center gap-4 w-full justify-center border-t border-gray-200 pt-4">
                <div className="flex items-center gap-1 text-sm font-bold">
                  4.8 <Star size={10} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </MaxWidthWrapper>
    </div>
  );
}
