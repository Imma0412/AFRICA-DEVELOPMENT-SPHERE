import { motion } from 'framer-motion';

const SpeakersSection = () => {
  const speakers = [
    {
      id: 1,
      name: 'David O.Ogunbanjo',
      position: 'CEO, OMobile',
      image: '/images/david-ogunbanjo.jpg'
    },
    {
      id: 2,
      name: 'Shola Jegede',
      position: 'Founder & CEO, NextMVP',
      image: '/images/shola-jegede.jpg'
    },
    {
      id: 3,
      name: 'Covenant Odedele',
      position: 'Founder, Students on LinkedIn',
      image: '/images/covenant-odedele.jpg'
    },
    {
      id: 4,
      name: 'Tofarati Opeewe',
      position: 'Account Manager with AIESEC',
      image: '/images/tofa.jpg'
    },
    {
      id: 5,
      name: 'Password',
      position: 'Founder, Password Tv',
      image: '/images/password.jpg'
    },
    {
      id: 6,
      name: 'Olivia Umeh',
      position: 'Content Creator',
      image: '/images/olivia-umeh.jpg'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-4">
            2025 Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join visionary leaders, innovators, and changemakers who are shaping Africa's future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(0, 153, 0, 0.3)'
              }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <div className="w-48 h-56 lg:w-56 lg:h-64 mx-auto rounded-lg overflow-hidden border-4 border-background shadow-lg group-hover:border-secondary/20 transition-all duration-300">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300"></div>
              </div>

              <h3 className="text-xl lg:text-2xl font-display font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {speaker.name}
              </h3>

              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                {speaker.position}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;