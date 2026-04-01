import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-gradient border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground font-body text-sm">Project Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-primary font-body text-xs tracking-widest uppercase">
              {project.subtitle}
            </span>
            <h3 className="font-heading text-xl mt-1">{project.title}</h3>
          </div>
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md font-body text-xs"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-muted-foreground font-body text-xs py-0.5">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:gap-2.5 transition-all duration-200"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
