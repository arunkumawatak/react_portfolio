import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getCompanyById } from "@/data/companies";
import { getProjectsByCompany } from "@/data/projects";
import Navbar from "@/components/Navbar";

const CompanyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const company = id ? getCompanyById(id) : undefined;
  const companyProjects = id ? getProjectsByCompany(id) : [];

  if (!company) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Company Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                {company.period}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl mb-4">{company.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-2 text-primary font-body text-lg">
                <Briefcase className="w-5 h-5" />
                {company.role}
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground font-body text-sm">
                <Calendar className="w-4 h-4" />
                {company.period} · {company.duration}
              </span>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-gradient border border-border rounded-xl p-8 md:p-10 mb-12 max-w-3xl"
          >
            <h2 className="font-heading text-2xl mb-4">Overview</h2>
            <p className="text-secondary-foreground font-body text-base leading-relaxed">
              {company.overview}
            </p>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-gradient border border-border rounded-xl p-8 md:p-10 mb-12 max-w-3xl"
          >
            <h2 className="font-heading text-2xl mb-6">My Role & Responsibilities</h2>
            <ul className="space-y-3">
              {company.responsibilities.map((r, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                  className="flex items-start gap-3 text-secondary-foreground font-body text-sm leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {r}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="font-heading text-2xl mb-4">Tech Stack Used</h2>
            <div className="flex flex-wrap gap-2">
              {company.techStack.map((t) => (
                <span key={t} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-body text-sm">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Projects — Zig-zag layout */}
          {companyProjects.length > 0 && (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-primary font-body text-sm tracking-widest uppercase">
                    Projects
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl">
                  Work I <span className="italic text-gradient">delivered.</span>
                </h2>
              </motion.div>

              <div className="space-y-16">
                {companyProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className={`flex flex-col gap-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="md:w-1/2 relative rounded-xl overflow-hidden group">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-64 md:h-80 bg-secondary flex items-center justify-center rounded-xl">
                          <span className="text-muted-foreground font-body text-sm">Project Image</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>

                    <div className="md:w-1/2 flex flex-col justify-center">
                      <span className="text-primary font-body text-xs tracking-widest uppercase mb-2">
                        {project.subtitle}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl mb-4">{project.title}</h3>
                      <p className="text-secondary-foreground font-body text-sm leading-relaxed mb-4">
                        {project.solution}
                      </p>

                      {project.contribution && (
                        <div className="mb-4">
                          <h4 className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">
                            My Contribution
                          </h4>
                          <p className="text-secondary-foreground font-body text-sm leading-relaxed">
                            {project.contribution}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <span key={t} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-body text-xs">
                            {t}
                          </span>
                        ))}
                      </div>

                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:gap-2.5 transition-all duration-200 w-fit"
                      >
                        View Project
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailPage;
