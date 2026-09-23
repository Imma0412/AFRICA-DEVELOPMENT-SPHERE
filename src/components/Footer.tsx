import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  /* ArrowRight*/
} from 'lucide-react';
import { Button } from '@/components/ui/button';
/* import { Input } from '@/components/ui/input';*/

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Volunteer', path: '/volunteer' }
  ];

  const socialLinks = [
    // { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/africadevelopmentsphere?stkn=YXNrZTkzZXJtZmFv' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/africadevelopmentsummit' }
    // { name: 'YouTube', icon: Youtube, url: '#' },
    // { name: 'Facebook', icon: Facebook, url: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      {/*  <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                Stay Connected with Africa's Future
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                Get the latest updates on events, opportunities, and African innovation stories.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                variant="secondary"
                className="sm:px-8 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/36f40bbb-ba3d-497a-b173-bf46d0e6d0cb.png"
                alt="ADS Logo"
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-display font-bold text-lg">
                  Africa Development Sphere
                </h3>
                <p className="text-sm text-primary-foreground/70">
                  Building Africa's Future
                </p>
              </div>
            </div>

            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Raising a generation of visionary African leaders who communicate growth,
              drive innovation, and build Africa from the ground up.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                <span>ads.admin@kocontentstudios.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+234 813 564 7207</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          >
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <h4 className="font-display font-semibold text-lg mb-6">Connect & Values</h4>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Core Values */}
            <div>
              <h5 className="font-semibold mb-3">Our Values</h5>
              <div className="text-sm text-primary-foreground/70 space-y-1">
                <p>• Accountability & Transparency</p>
                <p>• Integrity</p>
                <p>• Innovation</p>
                <p>• Professionalism</p>
                <p>• Collaboration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Africa Development Sphere. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;