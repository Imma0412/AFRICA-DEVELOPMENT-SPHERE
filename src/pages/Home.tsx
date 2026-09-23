import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import UpcomingEvents from '@/components/UpcomingEvents';
import {
  Lightbulb,
  Users,
  Target,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Communication',
      description: 'Empowering African youths and women with clear, impactful communication skills that drive change and inspire action.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Fostering creative solutions to African challenges through technology, entrepreneurship, and forward-thinking.'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Developing visionary leaders who understand Africa\'s potential and have the courage to build its future.'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Communicating Growth. Building Africa."
        subtitle="🌍 Africa Development Sphere"
        description="Raising a generation of visionary African leaders who communicate growth, drive innovation, and build Africa from the ground up."
        primaryCTA={{
          text: 'Join Our Next Event',
          href: '/events'
        }}
        secondaryCTA={{
          text: 'Join as a Volunteer',
          href: '/volunteer'
        }}
      />

      {/* Strategic Pillars */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-6">
              Our Strategic Pillars
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Three core areas where we develop Africa's next generation of leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow border-0 bg-card">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Component */}
      <UpcomingEvents />

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-africa text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6">
              Ready to Build Africa's Future?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Join a growing community of African leaders turning vision into
              reality. Your journey to transformative leadership starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 group"
              >
                <a href="/events">
                  Join Our Next Event
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white/30 text-green-800 hover:bg-white/10"
              >
                <a href="/about">
                  Learn More About Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;