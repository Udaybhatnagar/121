import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inputClasses =
  "w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-medium text-sm";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email is required";
    if (!form.phone.trim() || form.phone.trim().length < 10)
      e.phone = "Valid phone number is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const text = `Hi TechHub Technology! I'd like to get in touch.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}`;

    const url = `https://wa.me/9368465315?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0a0c10] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[30%] h-[60%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-500 text-[11px] uppercase tracking-[0.3em] font-black mb-6"
          >
            <span className="w-8 h-[2px] bg-cyan-500" />
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-none"
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">
              Talk
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl leading-relaxed"
          >
            Fill out the form below and we'll get back to you on WhatsApp
            within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">
                Contact Information
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                We're ready to help you transform your business with cutting-edge
                technology solutions.
              </p>
            </div>

            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 8527657955",
                href: "tel:+918527657955",
                color: "cyan",
              },
              {
                icon: Mail,
                label: "Email",
                value: "hello@techhubtechnology.in",
                href: "mailto:hello@techhubtechnology.in",
                color: "blue",
              },
              {
                icon: MessageSquare,
                label: "WhatsApp",
                value: "+91 9368465315",
                href: "https://wa.me/9368465315",
                color: "indigo",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 transition-colors duration-300">
                  <item.icon size={20} className="text-cyan-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-1">
                    {item.label}
                  </div>
                  <div className="text-slate-800 font-bold text-sm">{item.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Hours */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <div className="text-[10px] uppercase tracking-widest font-black text-cyan-400 mb-3">
                Business Hours
              </div>
              <div className="text-lg font-black mb-1">Mon – Sat</div>
              <div className="text-gray-400 text-sm">10:00 AM – 8:00 PM IST</div>
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 max-w-xs leading-relaxed mb-8">
                    We've opened WhatsApp for you. We'll respond to your message
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-cyan-600 font-bold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-1">
                      Send us a message
                    </h3>
                    <p className="text-slate-400 text-sm">
                      We'll reply via WhatsApp within 24 hours.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={`${inputClasses} pl-11`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="rahul@company.com"
                          className={`${inputClasses} pl-11`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`${inputClasses} pl-11`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or how we can help..."
                      className={`${inputClasses} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-cyan-500 text-white font-black uppercase tracking-widest text-sm py-4 rounded-2xl shadow-xl transition-colors duration-300"
                  >
                    <Send size={17} />
                    Send via WhatsApp
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
