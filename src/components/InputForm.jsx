import React from "react";

const FORM_MAP = {
  home: ["Pincode", "Mobile Number"],
  car: ["Registration Number", "Mobile Number"],
  bike: ["Registration Number", "Mobile Number"],
  health: ["Pincode", "Mobile Number"],
  term: ["Mobile Number"],
  investment: ["Mobile Number"],
  business: ["Pincode", "Mobile Number"],
};

export default function InputForm({ type }) {
  const fields = FORM_MAP[type] || [];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full">
      {/* OUTER GRID */}
      <div className="grid grid-cols-12 gap-4 items-end">
        
        {/* INPUTS AREA — always left */}
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            {fields.map((label, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6"
              >
                <label className="block text-sm text-gray-600 mb-1.5 font-medium">
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={`Enter ${label}`}
                  className="w-full h-12 px-4 rounded border border-gray-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA — always right */}
        <div className="col-span-12 md:col-span-4">
          <button className="w-full h-12 bg-primary text-brand-brown font-bold rounded shadow-md">
            View Prices
          </button>
        </div>
      </div>
    </div>
  );
}
