import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { PlayCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
    { id: 1, title: 'Understand Health Insurance', duration: '2:30', thumb: 'bg-blue-100' },
    { id: 2, title: 'How to file a claim?', duration: '3:45', thumb: 'bg-green-100' },
    { id: 3, title: 'Car Insurance Benefits', duration: '1:50', thumb: 'bg-orange-100' },
    { id: 4, title: 'Why Choose LetsInsure?', duration: '4:10', thumb: 'bg-purple-100' },
];

export default function VideoSection() {
    const [activeVideo, setActiveVideo] = useState(videos[0]);

    return (
        <section className="py-20 bg-slate-50">
            <MaxWidthWrapper>
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 md:w-3/4">That's it. That's LetsInsure.</h2>
                        <div className="w-16 h-1 bg-primary mt-4 rounded-full"></div>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-primary font-bold hover:underline mt-4 md:mt-0">
                        View All Videos <ChevronRight size={16} />
                    </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 bg-white p-2 rounded-3xl shadow-sm border border-gray-100">
                    {/* Main Video Player */}
                    <div className="w-full lg:w-2/3 relative aspect-video bg-black rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <PlayCircle size={48} className="text-white fill-white/50" />
                            </button>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
                                <p className="text-sm opacity-80">{activeVideo.duration}</p>
                            </div>
                        </div>
                        {/* Simulated Thumbnail */}
                        <div className={cn("w-full h-full opacity-60", activeVideo.thumb)}></div>
                    </div>

                    {/* Sidebar Playlist */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2 h-full lg:h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => setActiveVideo(video)}
                                className={cn(
                                    "flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors border",
                                    activeVideo.id === video.id
                                        ? "bg-orange-50 border-orange-200"
                                        : "hover:bg-gray-50 border-transparent"
                                )}
                            >
                                <div className={cn("w-20 h-14 rounded-lg flex-shrink-0 relative", video.thumb)}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <PlayCircle size={20} className="text-white/80 fill-black/20" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className={cn("font-medium text-sm line-clamp-2", activeVideo.id === video.id ? "text-primary" : "text-slate-700")}>
                                        {video.title}
                                    </h4>
                                    <p className="text-xs text-gray-400 mt-1">{video.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
