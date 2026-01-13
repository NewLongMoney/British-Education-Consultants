"use client";

import { motion } from "framer-motion";
import { Star, Building2, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "British Expertise",
    description: "Deep knowledge of British National Curriculum and international standards.",
  },
  {
    icon: Building2,
    title: "School-Based",
    description: "Real-world solutions tailored to your school's unique context.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Strong connections with UK institutions and education networks.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Impact",
    description: "Long-term improvements with clear, trackable outcomes.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-brand-red/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Why British Education Consultants
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Experience the difference of working with education experts
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 cursor-default group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

