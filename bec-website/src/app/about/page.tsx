"use client";

import { motion } from "framer-motion";
import { CTA } from "@/components/sections/cta";

const values = [
  {
    title: "Excellence in Teaching and Learning",
    description: "Upholding high standards in curriculum delivery, assessment, and classroom practice.",
  },
  {
    title: "Continuous Professional Growth",
    description: "Committing to continuous development for teachers and school leaders.",
  },
  {
    title: "Effective Leadership",
    description: "Developing confident, ethical leaders who drive improvement and sustainability.",
  },
  {
    title: "Integrity and Accountability",
    description: "Working with honesty, transparency, and responsibility.",
  },
  {
    title: "Collaboration and Partnership",
    description: "Believing that meaningful improvement is achieved through strong partnerships.",
  },
  {
    title: "Global Standards, Local Impact",
    description: "Applying international best practice while respecting local culture and needs.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-blue to-brand-blue-light text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-brand-red/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Empowering schools, teachers, and leaders to deliver British National Curriculum excellence
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We are an education consultancy and professional development organisation committed to raising the quality of education in local and international schools through the delivery of internationally recognised curricula, with a strong focus on the British National Curriculum.
            </p>
            <p className="text-slate-600 leading-relaxed mb-12">
              We work in close partnership with teachers, school leaders, school owners, and governing bodies to build the capacity required to deliver high-quality teaching and learning that meets international standards while remaining firmly rooted in local context and identity.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              Our mission is to strengthen local education by training teachers and school leaders to deliver the British National Curriculum and other international programmes with quality and consistency. Through teacher development, leadership training, school conversion, and continuous professional development, we support schools in meeting international standards of teaching and learning.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed mb-12">
              To see local schools delivering the British National Curriculum with excellence, led by confident teachers and school leaders, and preparing learners for success in a global world.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-brand-blue mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Leadership</h2>
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Moses Oriko</h3>
              <p className="text-brand-blue font-semibold mb-4">Education Consultant & International Education Specialist</p>
              <p className="text-slate-600 leading-relaxed">
                Moses Oriko is an experienced education consultant with strong ties to UK and Chinese education institutions, including Cambridge-linked programmes. He has worked with international education firms such as Tuopu International Education and previously served as Academic Principal at Ulink College in Suzhou, China.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                His work bridges British education standards with international delivery, supporting schools and students in accessing top global education pathways.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}

