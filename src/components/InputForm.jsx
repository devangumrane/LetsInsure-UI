import React from "react";
import { insuranceFormConfig } from "./insuranceFormConfig";

export default function InputForm({ insuranceType }) {
  const config = insuranceFormConfig[insuranceType];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8 w-full">
      {/* --------------------
          FIELDS + CTA
      -------------------- */}
      <div className="grid grid-cols-12 gap-4 items-end">
        {/* INPUTS — always left */}
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-12 gap-4">
            {config.fields.map((field, idx) => (
              <div key={idx} className="col-span-12 md:col-span-6">
                <label className="block text-sm text-gray-600 mb-1.5 font-medium">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="
              w-full h-12 px-4 rounded border border-gray-300
              text-gray-900
              focus:outline-none focus:ring-2 focus:ring-primary
              placeholder:text-gray-300
            "
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA — always right */}
        <div className="col-span-12 md:col-span-4">
          <button
            className="
        w-full h-12 bg-primary hover:bg-primary-hover
        text-brand-brown font-bold rounded
        shadow-md transition-colors
      "
          >
            View Prices
          </button>
        </div>
      </div>

      {/* --------------------
          FOOTER ROW
      -------------------- */}
      <div
        className="
          mt-6 flex flex-col gap-4
          md:flex-row md:items-center md:justify-between
        "
      >
        {/* LEFT: Action buttons */}
        <div className="flex flex-wrap gap-3">
          {config.actions.includes("new") && (
            <ActionBtn label="It's a New Vehicle" />
          )}
          {config.actions.includes("renew") && (
            <ActionBtn label="Renew Policy" />
          )}
          {config.actions.includes("download") && (
            <ActionBtn label="Download Policy" />
          )}
          {config.actions.includes("port") && (
            <ActionBtn label="Port My Policy" />
          )}
        </div>

        {/* RIGHT: Terms */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            className="
              w-4 h-4 text-orange-600
              border-gray-300 rounded
              focus:ring-orange-500
            "
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the{" "}
            <a
              href="#"
              className="font-bold text-gray-800 underline
                         decoration-gray-400 underline-offset-2"
            >
              Terms & Conditions
            </a>
          </label>
        </div>
      </div>

      {/* --------------------
          DISCLAIMER
      -------------------- */}
      <div className="mt-4 text-sm text-gray-400 flex items-center gap-1">
        <span
          className="
            w-3 h-3 rounded-full border border-gray-400
            flex items-center justify-center text-[8px]
          "
        >
          i
        </span>
        This product belongs to Lets Insurance.
      </div>
    </div>
  );
}

function ActionBtn({ label }) {
  return (
    <button
      className="
        flex items-center gap-2 px-4 py-2
        bg-white border border-gray-200
        rounded-full shadow-sm
        text-gray-700 font-medium
        hover:bg-gray-50
      "
    >
      {label}
      <span className="text-gray-400">›</span>
    </button>
  );
}
