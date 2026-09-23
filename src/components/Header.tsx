import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { name: 'About', path: '/about', hasDropdown: false },
    { name: 'Events', path: '/events', hasDropdown: false },
    { name: 'Team', path: '/team', hasDropdown: false },
    { name: 'Volunteer', path: '/volunteer', hasDropdown: false }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
        : 'bg-gradient-hero text-white'
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/36f40bbb-ba3d-497a-b173-bf46d0e6d0cb.png"
              alt="ADS Logo"
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <div className="hidden sm:block">
              <h1 className={`font-display font-bold text-lg lg:text-xl transition-colors ${isScrolled ? 'text-foreground' : 'text-white'
                }`}>
                Africa Development Sphere
              </h1>
              <p className={`text-xs lg:text-sm font-medium transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/90'
                }`}>
                Empowering Young Leaders
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${location.pathname === item.path
                  ? (isScrolled ? 'bg-primary text-primary-foreground' : 'bg-white/20 text-white')
                  : (isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10')
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className={`lg:hidden border-t border-border mt-4 pt-4 pb-6 ${isScrolled ? 'bg-background' : 'bg-card' // Choose a background that contrasts with text
                }`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg font-medium ${location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;