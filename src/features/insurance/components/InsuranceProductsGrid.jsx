import React, { useState } from 'react';
import MaxWidthWrapper from '../../../components/ui/MaxWidthWrapper';
import { Card } from '../../../components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import vehicle images
import carIcon from '../../../assets/car.png';
import bikeIcon from '../../../assets/bike.png';

const productCategories = {
    'General Insurance': [
        { name: 'Home Insurance', image: null },
        { name: 'Travel Insurance', image: null },
        { name: 'Mobile Insurance', image: null },
        { name: 'Cyber Insurance', image: null },
    ],
    'Motor Insurance': [
        { name: 'Car Insurance', image: carIcon },
        { name: 'Bike Insurance', image: bikeIcon },
        { name: 'Commercial Vehicle', image: carIcon },
        { name: 'Electric Vehicle', image: bikeIcon },
        { name: 'Vintage Car', image: carIcon },
        { name: 'Taxi Insurance', image: carIcon },
    ],
    'Health Insurance': [
        { name: 'Individual Health', image: null },
        { name: 'Family Floater', image: null },
        { name: 'Senior Citizen', image: null },
        { name: 'Critical Illness', image: null },
    ],
    'Business Insurance': [
        { name: 'Shop Insurance', image: null },
        { name: 'Office Insurance', image: null },
        { name: 'Liability Insurance', image: null },
        { name: 'Professional Indemnity', image: null },
    ],
};

export default function InsuranceProductsGrid() {
    const [activeTab, setActiveTab] = useState('Motor Insurance');

    return (
        <section className="py-16 bg-white">
            <MaxWidthWrapper>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">Insurance Products</h2>
                    <p className="text-gray-500 mt-2">Choose the plan that suits your needs</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {Object.keys(productCategories).map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`
                px-6 py-2.5 rounded-full font-medium transition-all duration-200
                ${activeTab === category
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {productCategories[activeTab].map((product, idx) => (
                        <Card key={idx} className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-gray-200">
                            <div className="p-4 flex flex-col items-center text-center gap-3">
                                {product.image ? (
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📋</span>
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-semibold text-sm text-slate-800 mb-1">{product.name}</h3>
                                    <div className="flex items-center justify-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Plans <ArrowRight size={12} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </MaxWidthWrapper>
        </section>
    );
}
