import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Layers, Rocket } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Flutter & Dart",
    desc: "Deep expertise in Flutter for cross-platform mobile apps — from pixel-perfect UI to complex state management.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    desc: "I build scalable, maintainable codebases with clear separation of concerns. No spaghetti code.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I don't just code features — I understand the business problem first, then engineer the right solution.",
  },
  {
    icon: Rocket,
    title: "Ship to Production",
    desc: "From idea to Play Store. I handle the full lifecycle — architecture, development, testing, deployment.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 border-t border-border">
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
              About Me
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl mb-6">
            Building apps that{" "}
            <span className="italic text-gradient">matter.</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl leading-relaxed">
            I'm Arun Kumawat — a Flutter developer focused on building
            real-world mobile applications for businesses. I specialize in
            shipping production-ready apps across e-commerce, legal-tech,
            agri-tech, HR, and education — apps that real people use every day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="group card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
