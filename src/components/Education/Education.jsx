import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi'
import educationData from '../../data/education.json'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="section-padding bg-dark-950" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            <p className="mt-4 text-dark-400">My academic background</p>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-dark-800 p-6 md:p-8 rounded-lg border border-dark-700 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <FiAward className="text-3xl text-primary-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-primary-500 mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-dark-300 mb-4">
                      <div className="font-semibold">{edu.institution}</div>
                      <span className="hidden md:inline text-dark-500">•</span>
                      <div className="flex items-center gap-1 text-sm">
                        <FiCalendar className="text-xs" />
                        <span>{edu.startYear} - {edu.endYear}</span>
                      </div>
                      <span className="hidden md:inline text-dark-500">•</span>
                      <div className="flex items-center gap-1 text-sm">
                        <FiMapPin className="text-xs" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-dark-300 mb-4">{edu.description}</p>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-primary-500 mb-2">
                          Highlights:
                        </h4>
                        <ul className="space-y-1 text-sm text-dark-300">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
