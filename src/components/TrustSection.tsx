import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trusts = [
  "Published on Google Play Store & Apple App Store",
  "Delivered 15+ production apps for real businesses",
  "Worked across 6+ industries — e-commerce, legal, agriculture, HR, education, hospitality",
  "Integrated payments (Cashfree, Razorpay), POS systems & Bluetooth printing",
  "Worked with Firebase, local databases & Google APIs (Maps, Auth, Location)",
  "Built offline-first apps with scalable architecture & optimized performance",
  "Shipped dual-app platforms (User + Admin/Lawyer) with real-time features",
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-body text-sm tracking-widest uppercase">
              Why trust me
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl mb-12">
            Not just code — <span className="italic text-gradient">shipped products.</span>
          </h2>

          <div className="space-y-2.5">
            {trusts.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 py-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-foreground font-body text-lg leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
