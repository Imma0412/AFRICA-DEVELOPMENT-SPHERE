import { motion } from 'framer-motion';

const PreviousSponsors = () => {
  // 6 placeholder sponsor containers for easy replacement
  const sponsors = [
    { name: 'Sponsor Logo 1', placeholder: true },
    { name: 'Sponsor Logo 2', placeholder: true },
    { name: 'Sponsor Logo 3', placeholder: true },
    { name: 'Sponsor Logo 4', placeholder: true },
    { name: 'Sponsor Logo 5', placeholder: true },
    { name: 'Sponsor Logo 6', placeholder: true }
  ];

  // Create multiple copies for truly seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
            Previous Sponsors & Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proud to have worked with leading organizations who believe in Africa's potential
          </p>
        </motion.div>

        {/* Continuous scroll container */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [-33.33 + '%', -66.66 + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-8 lg:space-x-12"
          >
            {duplicatedSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 w-32 lg:w-40 h-16 lg:h-20 bg-background border-2 border-dashed border-border rounded-lg p-4 flex items-center justify-center hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="text-center">
                  <div className="text-xs lg:text-sm text-muted-foreground font-medium">
                    {sponsor.name}
                  </div>
                  <div className="text-xs text-muted-foreground/60 mt-1">
                    Replace with logo
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-16 lg:w-24 h-full bg-gradient-to-r from-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 lg:w-24 h-full bg-gradient-to-l from-background/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default PreviousSponsors;