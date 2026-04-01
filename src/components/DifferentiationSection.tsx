import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "I ship, not just code",
    desc: "Every project I've built is live — on real stores, used by real people. I don't make demos.",
  },
  {
    title: "Cross-domain fluency",
    desc: "E-commerce, legal-tech, agri-tech, HR, education, gaming — I understand diverse business domains.",
  },
  {
    title: "Full lifecycle ownership",
    desc: "From architecture to App Store publishing. I handle the entire journey, not just a feature branch.",
  },
  {
    title: "Integration specialist",
    desc: "Payment gateways, video calls, geofencing, real-time notifications — I've built them all in production.",
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
