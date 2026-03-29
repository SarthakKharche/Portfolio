import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitStatus(null);

    // Use environment variables for EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setIsSending(false);
        setSubmitStatus('success');
        formRef.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
        setIsSending(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-8 font-poppins">Get In <span className="text-gradient">Touch</span></h2>
            <p className="text-white/50 mb-12 max-w-md font-light">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <a href="mailto:sarthakkharche06@gmail.com" className="group flex items-center gap-6 p-4 glass rounded-2xl border-white/5 hover:border-accent-neon/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:text-accent-neon transition-colors">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-sm font-medium">sarthakkharche06@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919175962875" className="group flex items-center gap-6 p-4 glass rounded-2xl border-white/5 hover:border-accent-neon/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:text-accent-neon transition-colors">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-sm font-medium">+91 91759 62875</p>
                </div>
              </a>


              <div className="flex items-center gap-6 pt-4">
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/sarthak-kharche-78a115338/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl hover:text-accent-neon hover:bg-white/10 transition-all">
                    <FiLinkedin />
                  </a>
                  <a href="https://github.com/SarthakKharche" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl hover:text-accent-neon hover:bg-white/10 transition-all">
                    <FiGithub />
                  </a>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] text-white/40 uppercase tracking-widest"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-neon opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-neon"></span>
                  </span>
                  Exploring: <span className="text-white/80 font-bold ml-1">Cloud Computing</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-white/5 space-y-6 relative overflow-hidden"
            >
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`absolute inset-0 z-50 flex flex-col items-center justify-center p-8 text-center backdrop-blur-md ${
                      submitStatus === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FiCheckCircle className="text-5xl text-green-400 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-white/60 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                      </>
                    ) : (
                      <>
                        <FiAlertCircle className="text-5xl text-red-400 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Oops!</h3>
                        <p className="text-white/60 text-sm">Something went wrong. Please try again later or email me directly.</p>
                        <button 
                          type="button"
                          onClick={() => setSubmitStatus(null)}
                          className="mt-6 text-xs underline opacity-50 hover:opacity-100"
                        >
                          Try again
                        </button>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Name</label>
                  <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-neon transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Email</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-neon transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/30 uppercase tracking-widest">Message</label>
                <textarea name="message" required rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-neon transition-colors resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-neon rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-neon-purple transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
