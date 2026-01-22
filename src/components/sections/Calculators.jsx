import React from 'react';
import MaxWidthWrapper from '../ui/MaxWidthWrapper';
import { Calculator, PieChart, Landmark } from 'lucide-react';
import { Card } from '../ui/card';

const calculatorCategories = [
    {
        title: "Financial Calculators",
        icon: Landmark,
        items: ["Income Tax Calculator", "Retirement Calculator", "Pension Calculator", "EMI Calculator"]
    },
    {
        title: "Tax & Investment",
        icon: PieChart, // Placeholder for tax/investment
        items: ["TDS Calculator", "GST Calculator", "SIP Calculator", "FD Calculator"]
    },
    {
        title: "Insurance Calculators",
        icon: Calculator,
        items: ["Car Insurance Calculator", "Bike Insurance Calculator", "Health Insurance Calculator", "Life Insurance Calculator"]
    }
];

export default function Calculators() {
    return (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
            <MaxWidthWrapper>
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-slate-900">Tools & Calculators</h2>
                    <div className="w-12 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {calculatorCategories.map((cat, idx) => (
                        <Card key={idx} className="bg-white border-gray-200">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <cat.icon className="text-primary" size={24} />
                                    <h3 className="font-bold text-slate-800">{cat.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {cat.items.map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="flex items-center px-4 py-2 bg-gray-50 rounded-lg text-sm text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors font-medium group">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
