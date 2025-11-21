import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../../data/portfolio';

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-text-muted">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-main" />
            {post.date}
          </span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/5">
            {post.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-primary-main transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3 font-light">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs font-mono text-text-muted border-t border-white/5 pt-4">
          <span>{post.readTime}</span>
          <span className="group-hover:translate-x-2 transition-transform duration-300 text-white">Read Article →</span>
        </div>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-main to-secondary-main">Insights</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-light">
            Thoughts on technology, design, and the future of digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;