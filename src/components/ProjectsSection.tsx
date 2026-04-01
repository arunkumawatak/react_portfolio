import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featured = getFeaturedProjects();

  return (
    <section id="projects" ref={ref} className="py-24 border-t border-border">
      <div className="container">
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
                Case Studies
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl">
              Production apps, <span className="italic text-gradient">real impact.</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:hidden text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-primary/30 text-primary px-8 py-4 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
