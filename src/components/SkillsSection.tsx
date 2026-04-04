import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const skillCategories = [
  {
    title: "Core Engineering",
    skills: [
      "Flutter & Dart (Production apps with complex UI + business logic)",
      "State Management (Provider, GetX, Riverpod — based on project scale)",
      "API Integration with error handling, retries & edge case management",
      "Firebase (Auth, Firestore, FCM) with real-time sync"
    ],
  },
  {
    title: "Systems & Architecture",
    skills: [
      "Clean Architecture with modular, scalable codebases",
      "Multi-role systems (Admin, Manager, User) with access control",
      "Offline-first design with local caching & sync strategies",
      "Handling complex business logic (GST, pricing engines, workflows)"
    ],
  },
  {
    title: "Integrations & Real-world Systems",
    skills: [
      "Payment Gateways (Cashfree, Razorpay) with production flows",
      "POS integration & device communication (PineLabs)",
      "Geofencing, GPS tracking & real-world accuracy handling",
      "WebRTC / Agora for real-time calls and communication"
    ],
  },
  {
    title: "Deployment & Ownership",
    skills: [
      "Play Store & App Store publishing (end-to-end)",
      "App signing, builds & release management",
      "Performance optimization & crash handling",
      "Full lifecycle ownership (requirement → production)"
    ],
  },
];

const SkillsSection = () => {
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
              Technical Depth
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl">
            Not skill bars — <span className="italic text-gradient">real capabilities.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-primary font-body text-xs tracking-widest uppercase mb-6">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-foreground font-body text-sm flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
