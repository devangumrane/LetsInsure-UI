import React, { useState } from 'react';

import btnAll from '../../../assets/btn-all.png';
import btnCar from '../../../assets/btn-car.png';
import btnBikeCommercial from '../../../assets/btn-bike&commercial.png';
import btnTravel from '../../../assets/btn-travel.png';
import btnHealth from '../../../assets/btn-health.png';

const insuranceTypes = [
    { label: 'All', icon: btnAll },
    { label: 'Car', icon: btnCar },
    { label: 'Bike', icon: btnBikeCommercial },
    { label: 'Commercial Vehicle', icon: btnBikeCommercial },
    { label: 'Travel', icon: btnTravel },
    { label: 'Health', icon: btnHealth },
];

export default function InsuranceTypeButtons() {
    const [activeType, setActiveType] = useState('All');

    return (
        <div className="flex flex-wrap items-center gap-3 mt-6">
            {insuranceTypes.map((type, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveType(type.label)}
                    className={`
                        flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-200
                        ${activeType === type.label
                            ? 'bg-orange-50 border-orange-300 shadow-sm'
                            : 'bg-white border-gray-200 hover:border-orange-200 hover:bg-orange-50/50'
                        }
                    `}
                >
                    <img src={type.icon} alt={type.label} className="w-5 h-5 object-contain" />
                    <span className={`text-sm font-medium whitespace-nowrap ${activeType === type.label ? 'text-slate-800' : 'text-gray-600'}`}>
                        {type.label}
                    </span>
                </button>
            ))}
        </div>
    );
}
