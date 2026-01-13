"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Teachers Trained" },
  { number: "50+", label: "Partner Schools" },
  { number: "15+", label: "Countries Served" },
  { number: "98%", label: "Success Rate" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div
          className="absolute inset-[-50%] opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(0,51,160,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,51,160,0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            transform: "perspective(500px) rotateX(60deg)",
          }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-blue/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[50%] right-[-5%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-brand-red/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[10%] left-[30%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-brand-blue/10 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-brand-blue">UK-Aligned Education Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6"
            >
              Empowering Schools to Deliver{" "}
              <span className="text-gradient">British Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-500 mb-8 max-w-xl leading-relaxed"
            >
              We train teachers, develop school leaders, and help schools adopt international curricula through UK-aligned programmes and expert advisory services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg">
                <Link href="/contact">Partner With Us</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-red" />
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <div className="text-4xl font-extrabold text-brand-blue mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

