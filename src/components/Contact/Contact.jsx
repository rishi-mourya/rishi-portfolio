import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import personalData from '../../data/personal.json'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalData.contact.email,
      link: `mailto:${personalData.contact.email}`
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalData.contact.phone,
      link: `tel:${personalData.contact.phone}`
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalData.contact.location,
      link: null
    }
  ]

  return (
    <section id="contact" className="section-padding bg-dark-950" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
            <p className="mt-4 text-dark-400">Let's discuss your next project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-500 mb-4">
                  Let's work together
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-600 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                      <info.icon className="text-xl text-primary-500" />
                    </div>
                    <div>
                      <div className="text-sm text-dark-400 mb-1">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-dark-100 font-medium hover:text-primary-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-dark-100 font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="p-6 bg-primary-600/10 border border-primary-600/30 rounded-lg"
              >
                <h4 className="text-lg font-semibold text-primary-500 mb-2">
                  Currently Available
                </h4>
                <p className="text-dark-300 text-sm">
                  Open to freelance projects, full-time opportunities, and collaborations.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-600 focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:border-primary-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <FiSend />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
