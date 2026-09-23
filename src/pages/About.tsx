import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import {
  Target,
  Eye,
  Users,
  Lightbulb,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Accountability & Transparency',
      description: 'Being answerable for our words and decisions, and transparent in our work and use of funds.'
    },
    {
      icon: Eye,
      title: 'Integrity',
      description: 'No favoritism in competitions or decisions — impartial, fair vetting in everything we do.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously working on new systems, programs, and technology to support African youth better.'
    },
    {
      icon: Target,
      title: 'Professionalism',
      description: 'Delivering quality work on time, regardless of personal circumstances.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Once committed, working openly and willingly within the team.'
    }
  ];


  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="About Africa Development Sphere"
        description="We are creating transformative spaces that spark ideas, develop young leaders, and connect changemakers across Africa."
        primaryCTA={{
          text: 'Meet Our Team',
          href: '/team'
        }}
        secondaryCTA={{
          text: 'Our Programs',
          href: '/events'
        }}
        gradient="africa"
      />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create transformative spaces that spark ideas, develop young leaders,
                and connect changemakers across Africa. We believe in the power of
                communication, innovation, and leadership to build a prosperous continent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through our summits, workshops, and incubator programs, we provide
                African youth with the tools, network, and mindset needed to drive
                sustainable development across the continent.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To raise a generation of visionary African leaders who communicate growth,
                drive innovation, and build Africa from the ground up.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision an Africa where young leaders are equipped with world-class
                skills, connected through powerful networks, and committed to creating
                positive change in their communities and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at ADS
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow border-0 bg-card">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Founder & Convener
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Africa Development Sphere is convened by <strong>Obafela Killa</strong>,
                who sets the overall vision, strategy, and direction for ADS —
                representing the organization to partners and stakeholders while
                overseeing every department to keep the mission on track.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="group"
              >
                <a href="/team">
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <img
                src="/images/founder-image.jpg"
                alt="Obafela Killa, Founder of ADS"
                className="w-full h-96 object-cover rounded-2xl" // Add object-cover to ensure the image fills the space without distortion
              />
              {/* Founder image placeholder - to be replaced with actual photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-6">
              Join the Movement
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Be part of building Africa's future. Connect with us and discover how
              you can contribute to the continent's transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="group"
              >
                <a href="/events">
                  Attend Our Events
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="/volunteer">
                  Volunteer With Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;