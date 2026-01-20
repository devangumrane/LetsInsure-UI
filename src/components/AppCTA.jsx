import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Star, Smartphone } from 'lucide-react';

export default function AppCTA() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <MaxWidthWrapper>
                <div className="flex flex-col md:flex-row items-center border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm bg-gradient-to-r from-white to-gray-50">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Exclusive Features on LetsInsure App</h2>
                        <div className="space-y-4">
                            <FeatureItem title="Check Vehicle PUC" desc="Track your Pollution Certificate status easily." />
                            <FeatureItem title="Claim Filing & Status Tracking" desc="Paperless claims directly from your phone." />
                            <FeatureItem title="Wellness Benefits" desc="Access exclusive health & wellness perks." />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <AppStoreButton type="playstore" />
                            <AppStoreButton type="appstore" />
                        </div>
                    </div>

                    {/* Phone Mockup Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
                        <div className="border-4 border-gray-900 rounded-[3rem] overflow-hidden w-64 h-[500px] shadow-2xl relative bg-white">
                            {/* Simulated App UI */}
                            <div className="w-full h-full bg-slate-100 flex flex-col">
                                <div className="h-40 bg-primary/20 p-6 flex items-end">
                                    <h3 className="font-bold text-2xl text-primary">Hello, User</h3>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="h-24 bg-white rounded-xl shadow-sm"></div>
                                    <div className="h-24 bg-white rounded-xl shadow-sm"></div>
                                    <div className="h-24 bg-white rounded-xl shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="absolute bottom-4 left-4 md:left-0 bg-white p-4 shadow-lg rounded-xl border border-gray-100 hidden md:block">
                            <div className="w-24 h-24 bg-black flex items-center justify-center text-white text-[10px]">QR CODE</div>
                            <p className="text-[10px] text-center mt-2 text-gray-500">Scan to Download</p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

function FeatureItem({ title, desc }) {
    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Smartphone className="text-primary" size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
                <p className="text-slate-500">{desc}</p>
            </div>
        </div>
    )
}

function AppStoreButton({ type }) {
    return (
        <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition-opacity">
            <div className="text-left">
                <div className="text-[10px] uppercase">{type === 'playstore' ? 'Get it on' : 'Download on the'}</div>
                <div className="font-bold text-lg leading-none">{type === 'playstore' ? 'Google Play' : 'App Store'}</div>
            </div>
        </button>
    )
}
