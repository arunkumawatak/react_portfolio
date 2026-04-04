import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const reasons = [
  {
    title: "Production-first mindset",
    desc: "Built and deployed 6 live apps on Play Store used in real business operations — not demos or side projects.",
  },
  {
    title: "Handles complex business logic",
    desc: "Implemented GST-based pricing, multi-role workflows, credit systems, and real-world edge cases across multiple apps.",
  },
  {
    title: "Full ownership delivery",
    desc: "Handled everything from requirement understanding to deployment — including architecture, APIs, testing, and store release.",
  },
  {
    title: "Real-world integrations",
    desc: "Integrated payments, POS machines, geofencing, NFC, and real-time systems in production environments.",
  },
];

const DifferentiationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-body text-sm tracking-widest uppercase">
              Why me
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl">
            What makes me <span className="italic text-gradient">different.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                {r.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
