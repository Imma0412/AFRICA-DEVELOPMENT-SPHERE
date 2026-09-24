import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    isVideo?: boolean;
    isExternal?: boolean;
  };
  backgroundPattern?: boolean;
  gradient?: 'primary' | 'africa' | 'hero';
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundPattern = true,
  gradient = 'hero'
}: HeroSectionProps) => {
  const gradientClass = {
    primary: 'bg-gradient-primary',
    africa: 'bg-gradient-africa',
    hero: 'bg-gradient-hero'
  }[gradient];

  return (
    <section className={`relative py-20 lg:py-32 ${gradientClass} text-white overflow-hidden`}>
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-lg rotate-12"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rounded-lg -rotate-12"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 border-2 border-white/20 rounded-full"></div>

          {/* Hexagonal pattern inspired by the uploaded image */}
          <div className="absolute top-1/4 left-1/3 w-8 h-8 border-2 border-white/15 transform rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-white/15 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/2 w-10 h-10 border-2 border-white/15 transform -rotate-12"></div>
        </div>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-6"
              
            >
              <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {primaryCTA && (
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-4 group"
                >
                  <a   href={primaryCTA.href}
                      target={primaryCTA.isExternal ? '_blank' : undefined}
                      rel={primaryCTA.isExternal ? 'noopener noreferrer' : undefined}
                   >
                    {primaryCTA.text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              )}

              {secondaryCTA && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 border-white/30 text-green-800 hover:bg-white/10 hover:text-white group"
                >
                  <a href={secondaryCTA.href}
                    target={secondaryCTA.isExternal ? '_blank' : undefined}
                    rel={secondaryCTA.isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {secondaryCTA.isVideo && (
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    )}
                    {secondaryCTA.text}
                  </a>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 lg:h-12"
        >
          <path
            d="M0 120V46.29C47.06 15.4 112.83 3.2 174.15 8.9C249.35 15.4 314.09 33.56 376.59 52.95C441.58 73.07 505.38 93.47 570.94 99.07C636.5 104.67 701.26 95.37 765.59 86.07C829.93 76.77 893.84 67.47 958.15 76.11C1022.5 84.75 1087.2 111.33 1152.7 137.9C1218.2 164.47 1284.5 190.04 1351.2 207.1C1417.9 224.16 1485 232.71 1552.7 241.25V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;