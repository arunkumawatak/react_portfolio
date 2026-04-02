import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { companies } from "@/data/companies";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-[150px] bg-primary pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                Experience
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl">
              3+ years of <span className="italic text-gradient">shipping.</span>
            </h2>
          </div>

          <Link
            to="/experience"
            className="hidden md:inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            View Full Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Summary cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {companies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group card-gradient border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary font-body text-xs tracking-widest uppercase font-medium">
                      {company.duration}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg group-hover:text-primary transition-colors">
                    {company.role}
                  </h3>
                  <p className="text-foreground font-body text-sm mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    {company.name}
                  </p>
                </div>

                <Link
                  to={`/company/${company.id}`}
                  className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:gap-2.5 transition-all duration-200 shrink-0 mt-1"
                >
                  Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground font-body text-xs tracking-wide">
                  {company.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {company.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md font-body text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:hidden text-center"
        >
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 border border-primary/30 text-primary px-8 py-4 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200"
          >
            View Full Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
