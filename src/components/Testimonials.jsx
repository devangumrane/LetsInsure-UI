import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Ramesh Gupta",
        rating: 5,
        text: "Claims settlement was surprisingly fast. I didn't expect it to be this smooth!",
        platform: "Google"
    },
    {
        name: "Priya Sharma",
        rating: 5,
        text: "The app is very user friendly. Renewed my car insurance in just 2 minutes.",
        platform: "Facebook"
    },
    {
        name: "Amit Patel",
        rating: 4,
        text: "Good prices compared to others. Support team is very helpful.",
        platform: "Google"
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <MaxWidthWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Customers Have to Say about Us</h2>
                    <div className="flex items-center justify-center gap-4 mt-4 text-xl">
                        <span className="font-bold text-4xl">4.7/5</span>
                        <div className="flex text-[#F9BD3C]">
                            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                        </div>
                        <span className="text-gray-500">(265K+ Customer Ratings)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <Card key={idx} className="p-8 shadow-md hover:shadow-lg transition-shadow border-gray-100 bg-gray-50">
                            <div className="flex mb-4 text-[#F9BD3C]">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-gray-700 font-medium text-lg italic mb-6">"{review.text}"</p>
                            <div className="flex items-center justify-between">
                                <div className="font-bold text-slate-900">{review.name}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">{review.platform}</div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button className="bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-hover transition-colors">
                        Read All Reviews
                    </button>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
