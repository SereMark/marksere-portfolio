import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/portfolio';

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass-card p-6 rounded-xl hover:border-primary-main/30 hover:shadow-glow-primary transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4 text-xs font-mono text-gray-500">
        <span>{post.date}</span>
        <span className="px-3 py-1 rounded-full bg-primary-main/10 text-primary-light border border-primary-main/20">
          {post.category}
        </span>
      </div>

      <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary-main transition-colors">
        {post.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center text-xs font-mono text-text-muted">
        <span>{post.readTime}</span>
        <span className="mx-2">•</span>
        <span className="group-hover:translate-x-1 transition-transform">Read More →</span>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-display-lg font-bold font-display mb-6">
            <span className="text-white">Latest </span>
            <span className="text-gradient">
              Insights
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;