import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiFlutter, SiReact, SiHtml5, SiCss3, SiJavascript, SiBootstrap,
  SiSass, SiMui, SiPython, SiFirebase, SiMysql, SiCplusplus,
  SiGithub, SiWordpress
} from 'react-icons/si'
import skillsData from '../../data/skills.json'

const iconMap = {
  SiFlutter, SiReact, SiHtml5, SiCss3, SiJavascript, SiBootstrap,
  SiSass, SiMui, SiPython, SiFirebase, SiMysql, SiCplusplus,
  SiGithub, SiWordpress
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding bg-dark-950" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            <p className="mt-4 text-dark-400">Technologies I work with regularly</p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-primary-500 mb-6">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill.icon]
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-600 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {IconComponent && (
                              <IconComponent className="text-3xl text-primary-500" />
                            )}
                            <span className="text-lg font-medium text-dark-100">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-dark-400 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                            className="h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-dark-400 text-lg">
              Always learning and exploring new technologies to deliver the best solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
