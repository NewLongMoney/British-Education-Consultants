"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Globe, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@britisheducationconsultants.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+254 XXX XXX XXX",
  },
  {
    icon: Globe,
    title: "Location",
    value: "Serving Africa, Middle East & Asia",
  },
];

const helpItems = [
  "School conversion to British National Curriculum",
  "Teacher training and CPD programmes",
  "Leadership development and NPQ qualifications",
  "International school advisory services",
  "Teacher recruitment consultancy",
  "Quality assurance and academic audits",
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Partner with British Education Consultants to transform your school
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                We're here to help you transform your school and deliver the British National
                Curriculum with excellence. Let's start a conversation.
              </p>

              <div className="space-y-4 mb-12">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-5 bg-slate-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">How We Can Help</h3>
                <ul className="space-y-3">
                  {helpItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-brand-green" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-500">
                        Thank you for your message. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your full name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" placeholder="+254 XXX XXX XXX" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization">School/Organization</Label>
                          <Input id="organization" placeholder="Your school or organization" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest">I'm Interested In *</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teacher-training">Teacher Training Programmes</SelectItem>
                            <SelectItem value="leadership">Leadership Development & NPQs</SelectItem>
                            <SelectItem value="school-conversion">School Conversion to BNC</SelectItem>
                            <SelectItem value="advisory">Advisory Services</SelectItem>
                            <SelectItem value="recruitment">Teacher Recruitment</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your needs..."
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

