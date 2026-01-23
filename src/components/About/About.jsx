import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import personalData from '../../data/personal.json'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '15+', label: 'Technologies' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-dark-300 leading-relaxed"
            >
              {personalData.bio}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-6 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-600 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights */}
           <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">

  <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
    <h3 className="text-xl font-semibold text-primary-500 mb-3">What I Do</h3>
    <ul className="space-y-2 text-dark-300">
      <li>• Full-stack web application development</li>
      <li>• Cross-platform mobile app development</li>
      <li>• Real-time features & API integration</li>
      <li>• E-commerce & business automation</li>
    </ul>
  </div>

  <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
    <h3 className="text-xl font-semibold text-primary-500 mb-3">How I Work</h3>
    <ul className="space-y-2 text-dark-300">
      <li>• Clean architecture</li>
      <li>• Scalable code</li>
      <li>• Performance focused</li>
      <li>• Client-first approach</li>
    </ul>
  </div>

</motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
