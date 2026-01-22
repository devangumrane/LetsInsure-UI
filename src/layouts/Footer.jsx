import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import MaxWidthWrapper from '../components/ui/MaxWidthWrapper';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-slate-800">Lets</span>
                            <span className="text-2xl font-bold text-primary">Insure</span>
                            <div className="bg-orange-100 rounded-full p-0.5 text-[8px] text-primary font-bold self-start mt-1">.com</div>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            Making insurance simple, transparent, and paperless for everyone.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon Icon={Facebook} />
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Linkedin} />
                        </div>
                    </div>

                    {/* Column 2: Products */}
                    <div>
                        <h4 className="font-bold text-slate-800 mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <FooterLink href="#">Car Insurance</FooterLink>
                            <FooterLink href="#">Bike Insurance</FooterLink>
                            <FooterLink href="#">Health Insurance</FooterLink>
                            <FooterLink href="#">Travel Insurance</FooterLink>
                            <FooterLink href="#">Mobile Insurance</FooterLink>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="font-bold text-slate-800 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="#">Blog</FooterLink>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms of Service</FooterLink>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Updates */}
                    <div>
                        <h4 className="font-bold text-slate-800 mb-4">Stay Updated</h4>
                        <p className="text-sm text-gray-500 mb-4">
                            Subscribe to our newsletter for the latest insurance news and offers.
                        </p>
                        <div className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <button className="bg-primary hover:bg-primary-hover text-white rounded-lg p-2 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} LetsInsure. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>CIN: U66000KA2016PTC098765</span>
                        <span>IRDAI Reg No: 987</span>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
}

function SocialIcon({ Icon }) {
    return (
        <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
            <Icon size={16} />
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <a href={href} className="hover:text-primary transition-colors">
                {children}
            </a>
        </li>
    );
}
