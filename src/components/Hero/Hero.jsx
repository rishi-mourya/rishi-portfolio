import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import personalData from '../../data/personal.json'

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, url: personalData.social.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalData.social.linkedin, label: 'LinkedIn' },
    // { icon: FiTwitter, url: personalData.social.twitter, label: 'Twitter' },
    { icon: FaFacebook, url: personalData.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, url: personalData.social.instagram, label: 'Instagram' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.br></motion.br>
             <motion.br></motion.br>
            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-500 font-mono text-lg"
            >
              Hi, my name is
            </motion.p> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-display"
            >
              <span className="text-gradient">{personalData.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-semibold text-dark-300"
            >
              {personalData.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-dark-400 max-w-lg"
            >
              {personalData.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 pt-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 bg-dark-800 text-dark-300 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div class="text-6xl font-bold text-gradient">${personalData.name.split(' ').map(n => n[0]).join('')}</div>`
                    }}
                  />
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-primary-600/30 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <FiArrowDown className="text-primary-500 text-3xl" />
      </motion.a>
    </section>
  )
}

export default Hero
