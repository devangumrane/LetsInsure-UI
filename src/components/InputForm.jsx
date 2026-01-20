import React from 'react';


export default function InputForm() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                {/* Registration Number */}
                <div className="col-span-1 md:col-span-4">
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">Registration Number</label>
                    <input
                        type="text"
                        placeholder="eg : KA120JK845"
                        className="w-full h-12 px-4 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-300"
                    />
                </div>

                {/* Mobile Number */}
                <div className="col-span-1 md:col-span-4">
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">Mobile Number</label>
                    <input
                        type="text"
                        placeholder="Enter Mobile No."
                        className="w-full h-12 px-4 rounded border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-gray-300"
                    />
                </div>

                {/* CTA Button */}
                <div className="col-span-1 md:col-span-4">
                    <button className="w-full h-12 bg-primary hover:bg-primary-hover text-brand-brown font-bold rounded shadow-md transition-colors text-base">
                        View Prices
                    </button>
                </div>
            </div>
        </div>
    );
}
