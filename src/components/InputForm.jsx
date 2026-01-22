import React from 'react';

export default function InputForm() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full">
      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-12 md:col-span-4">
          <label className="block text-sm text-gray-600 mb-1.5 font-medium">
            Registration Number
          </label>
          <input
            type="text"
            placeholder="E.G. KA04DK8337"
            className="w-full h-12 px-4 rounded border border-gray-300"
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block text-sm text-gray-600 mb-1.5 font-medium">
            Mobile Number
          </label>
          <input
            type="text"
            placeholder="+91 Enter Mobile Number"
            className="w-full h-12 px-4 rounded border border-gray-300"
          />
        </div>

        <div className="col-span-12 md:col-span-4">
          <button className="w-full h-12 bg-primary text-brand-brown font-bold rounded shadow-md">
            View Prices
          </button>
        </div>
      </div>
    </div>
  );
}
