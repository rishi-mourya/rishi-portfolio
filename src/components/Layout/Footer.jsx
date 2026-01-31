import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import personalData from '../../data/personal.json'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, url: personalData.social.github, label: 'GitHub' },
    { icon: FiLinkedin, url: personalData.social.linkedin, label: 'LinkedIn' },
    // { icon: FiTwitter, url: personalData.social.twitter, label: 'Twitter' },
    { icon: FaFacebook, url: personalData.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, url: personalData.social.instagram, label: 'Instagram' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-3">
              <span className="text-gradient">Rishi Mourya</span>
            </h3>
            <p className="text-dark-400 text-sm mb-4">
              Full Stack Developer passionate about creating beautiful and functional web and mobile experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-dark-400">
              <li>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {personalData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalData.contact.phone}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {personalData.contact.phone}
                </a>
              </li>
              <li>{personalData.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-400">
            <p>
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
            {/* <p className="flex items-center gap-1">
              Made with <FiHeart className="text-primary-500" /> using React & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
