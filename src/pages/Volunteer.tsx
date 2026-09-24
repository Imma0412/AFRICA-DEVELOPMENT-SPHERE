import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Users, Share2, ClipboardList, Code, LifeBuoy, ArrowRight } from 'lucide-react';

const Volunteer = () => {
 const roles = [
  {
    icon: ClipboardList,
    title: 'Programs Assistant',
    description: 'Event-planning experience required.'
  },
  {
    icon: Users,
    title: 'Community Management Assistant',
    description: 'Help grow and manage the ADS community.'
  },
  {
    icon: Palette,
    title: 'Graphic Designer',
    description: 'Produce visual assets for events and campaigns.'
  },
  {
    icon: Share2,
    title: 'Social Media Manager',
    description: 'Schedule and publish content, engage the audience.'
  },
  {
    icon: ClipboardList,
    title: 'Project Assistant',
    description: 'Administration, task tracking, and operations.'
  },
  {
    icon: Code,
    title: 'Full-Stack Developer',
    description: 'Help build and maintain ADS digital platforms.'
  },
  {
    icon: LifeBuoy,
    title: 'Technical Support',
    description: 'Troubleshoot issues and support our tech setup.'
  }
];


  return (
    <PageLayout>
      <HeroSection
        title="Volunteer with ADS"
        subtitle="🌍 Africa Development Sphere"
        description="Join our community of volunteers helping to build Africa's future. We run a mix of experienced and developing volunteers — experienced volunteers lead, while those growing their skills gain hands-on experience and portfolio credit."
        primaryCTA={{
          text: 'Apply to Volunteer',
          href: 'https://forms.gle/k7ENF6tZpivghMA99',
          isExternal: true
        }}
        secondaryCTA={{
          text: 'See Our Next Event',
          href: '/events'
        }}
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-6">
              Roles We're Recruiting
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Limited support (data, logistics, etc.) may be provided where needed.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow border-0 bg-card">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <role.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-card-foreground mb-2">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Interested in Volunteering?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Fill out our short application to let us know where you'd like to help.
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <a href="https://forms.gle/k7ENF6tZpivghMA99" target="_blank" rel="noopener noreferrer">
                Apply to Volunteer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Volunteer;
