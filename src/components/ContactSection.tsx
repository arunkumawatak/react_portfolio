import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message too short";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Arun Kumawat",
        },
        "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                Let's talk
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl mb-6">
              Got a product idea?
              <br />
              <span className="italic text-gradient">Let's build it.</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-8 leading-relaxed">
              I'm available for freelance projects, full-time roles, and
              interesting collaborations. If you need a Flutter developer who
              ships — let's connect.
            </p>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-colors mb-10"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <div className="flex gap-6 mt-2">
              <a
                href="mailto:arunkumawatak@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-body text-sm"
              >
                <Mail className="w-4 h-4" />
                arunkumawatak@gmail.com
              </a>
            </div>
            <div className="flex gap-6 mt-4">
              <a href="https://github.com/arunkumawatak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-body text-sm">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a href="https://linkedin.com/in/arunkumawatak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-body text-sm">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card-gradient border border-border rounded-xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-body text-sm mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                  placeholder="Your name"
                  maxLength={100}
                />
                {errors.name && <p className="text-destructive font-body text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground font-body text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow"
                  placeholder="you@example.com"
                  maxLength={100}
                />
                {errors.email && <p className="text-destructive font-body text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground font-body text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                  maxLength={2000}
                />
                {errors.message && <p className="text-destructive font-body text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === "success" && <CheckCircle className="w-4 h-4" />}
                {status === "error" && <AlertCircle className="w-4 h-4" />}
                {status === "idle" && <Send className="w-4 h-4" />}
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent!"}
                {status === "error" && "Failed — Try Again"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
