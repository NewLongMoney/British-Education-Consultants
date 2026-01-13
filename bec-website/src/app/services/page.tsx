"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CTA } from "@/components/sections/cta";
import {
  BookOpen,
  GraduationCap,
  Users,
  Building2,
  Globe,
  CheckCircle,
  UserSearch,
  ClipboardCheck,
} from "lucide-react";

const serviceCategories = [
  {
    id: "teacher-training",
    title: "Teacher Development",
    services: [
      {
        icon: BookOpen,
        title: "Teacher Training Programmes",
        description:
          "We design and deliver structured teacher training programmes focused on effective classroom practice, curriculum delivery, assessment, and learner outcomes, aligned with the British National Curriculum and international best practice.",
        features: [
          "British pedagogy and assessment practices",
          "Lesson planning and differentiation",
          "Classroom management and inclusion",
          "Ongoing coaching and mentoring",
        ],
      },
      {
        icon: Users,
        title: "Learning and Teaching Development",
        description:
          "We work closely with schools to strengthen teaching and learning through coaching, mentoring, lesson observation frameworks, and evidence-informed instructional strategies that drive consistent improvement.",
      },
      {
        icon: GraduationCap,
        title: "Cambridge Professional Development Qualifications (PDQ)",
        description:
          "We support educators pursuing Cambridge Professional Development Qualifications (PDQs), enhancing professional practice, leadership capability, and international recognition.",
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership & Qualifications",
    services: [
      {
        icon: Building2,
        title: "UK NPQ Teaching and Leadership Qualifications",
        description:
          "We support teachers and school leaders to access and complete UK National Professional Qualifications (NPQs), strengthening leadership capacity, teaching quality, and whole-school improvement in line with UK standards.",
        features: [
          "Senior Leadership NPQ",
          "Middle Leadership NPQ",
          "Headteacher NPQ",
          "Teaching NPQ",
        ],
      },
      {
        icon: Building2,
        title: "National College Programmes",
        description:
          "Through our partnerships, we provide access to National College–aligned leadership and governance development programmes, supporting school leaders in strategic leadership, accountability, and sustainable school improvement.",
      },
    ],
  },
  {
    id: "advisory",
    title: "School Advisory & Consultancy",
    services: [
      {
        icon: Globe,
        title: "British National Curriculum (BNC) Implementation",
        description: "We support schools to transition smoothly to the British National Curriculum through:",
        features: [
          "Curriculum mapping and alignment",
          "Subject framework development",
          "Assessment and reporting systems",
          "Policy and compliance support",
        ],
      },
      {
        icon: Building2,
        title: "International Schools Advisory Services",
        description:
          "We offer expert advisory services to schools seeking to establish, develop, or improve international education provision, including curriculum planning, quality assurance, and readiness for inspection or accreditation.",
      },
      {
        icon: ClipboardCheck,
        title: "Quality Assurance & Academic Audits",
        description: "We help schools maintain and improve standards through:",
        features: [
          "Teaching and learning observations",
          "Curriculum and assessment audits",
          "Student progress tracking",
          "School improvement recommendations",
        ],
      },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    services: [
      {
        icon: UserSearch,
        title: "International Schools Teacher Recruitment Consultancy",
        description:
          "We support international schools with the recruitment of qualified and experienced teachers, ensuring alignment with curriculum requirements, school culture, and international education standards.",
      },
    ],
  },
];

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Comprehensive education consultancy, training, and professional development services
          </motion.p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16"
          >
            We offer a comprehensive range of education consultancy, training, and professional development services designed to support teachers, school leaders, and schools in delivering high-quality international education. All our programmes are delivered in collaboration with trusted partners in the United Kingdom.
          </motion.p>

          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20 scroll-mt-32">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-slate-900 mb-8"
              >
                {category.title}
              </motion.h2>

              <div className="space-y-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                  >
                    <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <service.icon className="w-8 h-8 text-brand-blue" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                            {service.features && (
                              <ul className="grid sm:grid-cols-2 gap-2">
                                {service.features.map((feature) => (
                                  <li key={feature} className="flex items-center gap-2 text-slate-600">
                                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Partnership Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-3xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Partnership Approach</h2>
            <p className="text-slate-600 mb-6">
              All our services are delivered in collaboration with established UK partners, ensuring:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "High academic and professional standards",
                "International credibility and recognition",
                "Practical, school-focused impact",
                "Continuous alignment with UK education frameworks",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}

