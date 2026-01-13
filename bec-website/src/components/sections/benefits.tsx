"use client";

import { Check } from "lucide-react";

const benefits = [
  "UK-recognised qualifications for teachers and leaders",
  "Transform your school to international standards",
  "Continuous Professional Development (CPD)",
  "Cambridge & NPQ Leadership Programmes",
];

export function Benefits() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="flex animate-scroll">
        {/* Duplicate for seamless loop */}
        {[...benefits, ...benefits].map((benefit, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center gap-4 px-8 py-4 mx-3 bg-slate-100 rounded-full hover:bg-brand-blue hover:text-white transition-all duration-300 cursor-default group"
          >
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="whitespace-nowrap font-medium">{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

