import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import projectsData from '../../data/projects.json'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projectsData.map(p => p.category))]
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            <p className="mt-4 text-dark-400">Showcase of my recent work</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                layout
                className="bg-dark-800 rounded-lg overflow-hidden border border-dark-700 hover:border-primary-600 transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-dark-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <svg class="w-16 h-16 text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      `
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-2 text-xs font-semibold text-primary-500 uppercase tracking-wide">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-dark-100 mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-700 text-primary-500 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-700 text-dark-400 text-xs font-medium rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-dark-300 rounded-lg hover:bg-primary-600 hover:text-white transition-colors text-sm font-medium"
                      >
                        <FiGithub />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                      >
                        <FiExternalLink />
                        Live
                      </a>
                    )}
                    {!project.github && !project.live && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-dark-700 text-dark-400 rounded-lg text-sm">
                        <FiCode />
                        Confidential
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show message if no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-400 text-lg">No projects found in this category</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
