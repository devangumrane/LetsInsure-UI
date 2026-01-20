import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import InsuranceOptions from './InsuranceOptions';
import InputForm from './InputForm';
import heroImg from '../assets/Hero-img.png';

export default function Hero() {
    return (
        <section className="w-full bg-[#FAFAFA] pt-10 pb-20 overflow-hidden relative min-h-[500px]">
            <MaxWidthWrapper className="relative z-10">

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    {/* Left Content */}
                    <div className="w-full lg:w-[65%]">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Now you will be confident <br />
                            <span className="text-primary">in the future</span>
                        </h1>

                        <p className="mt-4 text-gray-600 text-lg max-w-lg">
                            It's easy to get a quick quote that fits your budget.<br />
                            Trusted by 7 Crore+ Indians
                        </p>

                        <InsuranceOptions />
                    </div>

                    {/* Right Content - Illustration */}
                    <div className="hidden lg:block lg:w-[35%] relative h-full min-h-[300px]">
                        <div className="absolute right-[-40px] top-[-20px] w-[120%] h-auto flex items-center justify-center">
                            <img
                                src={heroImg}
                                alt="Family"
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Input Function Section */}
                <div className="mt-8 w-full">
                    <InputForm />
                </div>

                {/* Footer / Policy Links */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium hover:bg-gray-50">
                            Renew Policy <span className="text-gray-400">›</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-gray-700 font-medium hover:bg-gray-50">
                            Download Policy <span className="text-gray-400">›</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="terms" className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the <a href="#" className="font-bold text-gray-800 underline decoration-gray-400 underline-offset-2">Terms & Conditions</a>
                        </label>
                    </div>
                </div>

                <div className="mt-4 text-sm text-gray-400 flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full border border-gray-400 flex items-center justify-center text-[8px]">i</span>
                    This product belongs to Lets Insurance.
                </div>

            </MaxWidthWrapper>
        </section>
    );
}
