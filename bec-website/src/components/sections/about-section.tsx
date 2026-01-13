"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Who We Are
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Your trusted partner in educational transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl text-slate-600 leading-relaxed">
            British Education Consultants is an education advisory and school transformation firm specialising in the British National Curriculum. We support schools in transitioning from local systems to internationally benchmarked British education through structured implementation, training, and ongoing quality assurance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

