import React from 'react';
import MaxWidthWrapper from '../ui/MaxWidthWrapper';
import { Card } from '../ui/card';
import { ArrowRight } from 'lucide-react';

import challansImg from '../../assets/challans.png';
import creditScoreImg from '../../assets/credit-score.png';
import abhaImg from '../../assets/generate-abha-id.png';
import vaahanImg from '../../assets/vaahan-owner-details.png';

const services = [
    {
        title: 'Check / Pay Challans',
        desc: 'Traffic Fines? Clear them now.',
        image: challansImg,
        action: 'Pay Now'
    },
    {
        title: 'Vehicle Owner Details',
        desc: 'Get full details of any vehicle.',
        image: vaahanImg,
        action: 'Check Details'
    },
    {
        title: 'Free Credit Score',
        desc: 'Check your credit score instantly.',
        image: creditScoreImg,
        action: 'Check Score'
    },
    {
        title: 'Generate ABHA ID',
        desc: 'Create your unique Health ID.',
        image: abhaImg,
        action: 'Create ID'
    },
];

export default function ServicesSection() {
    return (
        <section className="py-16 bg-slate-50">
            <MaxWidthWrapper>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">You now can pay challans here</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden relative group cursor-pointer h-full">
                            <div className="p-6 flex flex-col h-full justify-between items-start">
                                <div className="mb-4 h-20 flex items-center">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <div className="mb-4">
                                    <h3 className="font-bold text-lg text-slate-800 mb-1">{service.title}</h3>
                                    <p className="text-sm text-gray-500">{service.desc}</p>
                                </div>
                                <div className="text-sm font-bold text-blue-600 flex items-center group-hover:translate-x-1 transition-transform mt-auto">
                                    {service.action} <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
