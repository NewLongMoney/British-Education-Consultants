"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-blue to-brand-blue-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-[-50%]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Partner with British Education Consultants to deliver the British National Curriculum with excellence.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-blue hover:bg-white/90 hover:text-brand-blue shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

