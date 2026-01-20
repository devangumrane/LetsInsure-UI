import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { ShieldCheck, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        label: 'Policies Sold',
        value: '5 Crores+',
        icon: CheckCircle
    },
    {
        label: 'Vehicles Insured',
        value: '4 Crores+',
        icon: Users
    },
    {
        label: 'Lives Insured',
        value: '2.5 Crores+',
        icon: Users
    },
    {
        label: 'Claims Settled',
        value: '22 Lacs+',
        icon: CheckCircle
    },
    {
        label: 'Paid-in Claims',
        value: '8500 Crores+',
        icon: ShieldCheck
    },
];

export default function TrustSection() {
    return (
        <section className="py-20 bg-white">
            <MaxWidthWrapper>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Why <span className="text-primary">7 Crore+ Customers</span> trust Digit Insurance?
                    </h2>
                    <div className="w-24 h-1.5 bg-primary/20 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Illustration Placeholder */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-md aspect-video bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-blue-100/50 skew-x-12 transform -translate-x-1/2"></div>
                            <ShieldCheck size={120} className="text-blue-500/20 relative z-10" />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm border border-white/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="text-green-600" size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Super Fast Claims</p>
                                        <p className="text-xs text-slate-500">Settled in minutes, not days.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                                <p className="font-semibold text-slate-700">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
