import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import experienceData from '../../data/experience.json'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            <p className="mt-4 text-dark-400">My professional journey</p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-dark-700"></div>

              {/* Experience Items */}
              {experienceData.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-dark-900"></div>

                  {/* Content Card */}
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-600 transition-colors">
                      {/* Header */}
                      <div className="mb-4">
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-500 text-xs font-semibold rounded-full mb-2">
                            Current
                          </span>
                        )}
                        <h3 className="text-xl font-bold text-primary-500 mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-dark-300 mb-2">
                          <FiBriefcase className="text-sm" />
                          <span className="font-semibold">{exp.company}</span>
                          <span className="text-dark-500">•</span>
                          <span className="text-sm">{exp.type}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="text-xs" />
                            <span>{exp.startDate} - {exp.endDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin className="text-xs" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-300 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-primary-500 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1 text-sm text-dark-300">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-dark-700 text-primary-500 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
