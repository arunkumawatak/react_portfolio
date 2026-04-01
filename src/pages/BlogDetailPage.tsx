import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getBlogById } from "@/data/blogs";
import Navbar from "@/components/Navbar";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogById(id) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-heading text-2xl mt-10 mb-4">
            {block.replace("## ", "")}
          </h2>
        );
      }

      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="font-heading text-xl mt-8 mb-3">
            {block.replace("### ", "")}
          </h3>
        );
      }

      if (block.includes("\n- ") || block.startsWith("- ")) {
        const lines = block.split("\n");
        const title = !lines[0].startsWith("- ") ? lines[0] : null;
        const items = lines.filter((l) => l.startsWith("- "));
        return (
          <div key={i} className="mb-4">
            {title && (
              <p
                className="text-foreground font-body text-base leading-relaxed mb-2"
                dangerouslySetInnerHTML={{
                  __html: title.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            )}
            <ul className="space-y-2 ml-4">
              {items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 text-secondary-foreground font-body text-base leading-relaxed"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item
                        .replace("- ", "")
                        .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      }

      if (/^\d+\.\s/.test(block) || block.includes("\n1. ")) {
        const lines = block.split("\n").filter((l) => /^\d+\.\s/.test(l));
        return (
          <ol key={i} className="space-y-2 ml-4 mb-4">
            {lines.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-secondary-foreground font-body text-base leading-relaxed"
              >
                <span className="text-primary font-body text-sm font-medium mt-0.5 shrink-0">
                  {j + 1}.
                </span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: item
                      .replace(/^\d+\.\s/, "")
                      .replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
                  }}
                />
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p
          key={i}
          className="text-secondary-foreground font-body text-base leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
          }}
        />
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-8">
              <time className="text-muted-foreground font-body text-sm tracking-wider uppercase">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h1 className="font-heading text-3xl md:text-5xl mt-4 mb-6">{post.title}</h1>
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-body text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-px w-full bg-border" />
            </div>

            <div className="mt-8">{renderContent(post.content)}</div>
          </motion.article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
