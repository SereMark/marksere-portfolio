import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { uiIcons } from '../utils/icons';
import { BLOG_POSTS } from '../data/portfolio';

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 relative ${
                post.isComingSoon ? 'cursor-default' : 'cursor-pointer'
              }`}
            >
              {post.isComingSoon && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-blue-600 text-sm font-medium mb-1">Coming Soon</div>
                    <div className="w-8 h-0.5 bg-blue-600 mx-auto opacity-60" />
                  </div>
                </div>
              )}
              
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <uiIcons.calendar /> {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;