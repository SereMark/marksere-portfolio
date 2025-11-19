import { motion } from 'framer-motion';

const BLOG_POSTS = [
  {
    title: "The Future of WebGL in UI Design",
    excerpt: "exploring how 3D graphics are reshaping user interfaces and creating more immersive web experiences.",
    date: "2023-10-15",
    readTime: "5 min read",
    category: "Design"
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Deep dive into memoization, code splitting, and rendering optimization techniques for large scale applications.",
    date: "2023-09-28",
    readTime: "8 min read",
    category: "Engineering"
  },
  {
    title: "Building Scalable Systems",
    excerpt: "Architectural patterns and best practices for designing robust, scalable backend systems.",
    date: "2023-09-10",
    readTime: "6 min read",
    category: "Architecture"
  }
];

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4 text-xs font-mono text-gray-500">
        <span>{post.date}</span>
        <span className="px-2 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
          {post.category}
        </span>
      </div>

      <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary-400 transition-colors">
        {post.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex items-center text-xs font-mono text-secondary-400">
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
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <span className="text-white">Latest </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
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