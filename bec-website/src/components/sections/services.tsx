"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Briefcase, BarChart3, GraduationCap } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Curriculum Implementation",
    description: "Supporting schools in transitioning to internationally benchmarked British education.",
  },
  {
    icon: Users,
    title: "Teacher Training & CPD",
    description: "Comprehensive training and continuous professional development for educators.",
  },
  {
    icon: Briefcase,
    title: "Leadership Development",
    description: "Building strong leadership capacity and effective governance structures.",
  },
  {
    icon: BarChart3,
    title: "Quality Assurance",
    description: "Academic audits to ensure and improve educational standards.",
  },
  {
    icon: GraduationCap,
    title: "NPQ Qualifications",
    description: "UK National Professional Qualifications for teaching and leadership excellence.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            What We Do
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Comprehensive education consultancy and training services
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 hover:border-brand-blue transition-all duration-300 group cursor-default">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

