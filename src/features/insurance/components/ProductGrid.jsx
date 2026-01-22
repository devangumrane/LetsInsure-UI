import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Card, CardContent } from './ui/card';
import { ArrowRight, Car, Bike, Heart, Building2, Plane, Smartphone, Home, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
    { label: 'Car Insurance', icon: Car, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Bike Insurance', icon: Bike, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Health Insurance', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
    { label: 'Business Insurance', icon: Building2, color: 'text-purple-500', bg: 'bg-purple-50' },
    { label: 'Travel Insurance', icon: Plane, color: 'text-sky-500', bg: 'bg-sky-50' },
    { label: 'Mobile Insurance', icon: Smartphone, color: 'text-pink-500', bg: 'bg-pink-50' },
    { label: 'Property Insurance', icon: Home, color: 'text-orange-500', bg: 'bg-orange-50' },
    { label: 'Group Health', icon: UserPlus, color: 'text-teal-500', bg: 'bg-teal-50' },
];

export default function ProductGrid() {
    return (
        <section className="py-16 bg-white">
            <MaxWidthWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Insurance Products</h2>
                    <p className="text-gray-500 mt-2">Choose the plan that suits your needs</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-gray-100 cursor-pointer overflow-hidden group">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${product.bg} mb-2 group-hover:scale-110 transition-transform`}>
                                        <product.icon size={32} className={product.color} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="font-semibold text-slate-800">{product.label}</h3>
                                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Plans <ArrowRight size={16} className="ml-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
