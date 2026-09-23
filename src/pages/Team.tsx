import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import {
  Linkedin,
  Twitter,
  Globe,
  Award,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const founder = {
    name: 'Obafela Killa',
    role: 'Founder & Convener',
    bio: 'Sets the overall vision, strategy, and direction for Africa Development Sphere — representing ADS to partners and stakeholders, and overseeing every department to keep the mission on track.',
    image: '/images/obafelakilla.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/obafelakilla',
      twitter: 'https://x.com/obafela_killa',
      website: 'https://www.obafelakilla.com'
    }
  };

  const leads = [
    { name: 'Grace Jhenkazah', role: 'Co-organizer & Partnerships Lead', bio: 'Partners with the Convener on strategy and key decisions, and leads partnerships and sponsor outreach.', initials: 'GJ' },
    { name: 'Adeola Ibirogba', role: 'Programs Lead', bio: 'Plans and runs workshops, events, competitions, grants, and incubation.', initials: 'AI' },
    { name: 'Divine Aghede', role: 'Operations Lead', bio: 'Runs project management, timelines, and internal coordination.', initials: 'DA' },
    { name: 'Precious Oyenuga', role: 'Marketing & Communications Lead', bio: 'Owns brand, content, publicity, and social media.', initials: 'PO' },
    { name: 'Emmanuel Omirin', role: 'Technology Lead', bio: 'Manages the website, platforms, virtual events, and ticketing.', initials: 'EO' },
    { name: 'Glory', role: 'Community & Volunteers Lead', bio: 'Grows and manages the ADS community, and recruits and coordinates volunteers.', initials: 'GL' }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Meet Our Team"
        description="The passionate individuals behind Africa Development Sphere, working to build the next generation of African leaders."
        primaryCTA={{
          text: 'Join Our Team',
          href: '/volunteer'
        }}
        secondaryCTA={{
          text: 'About ADS',
          href: '/about'
        }}
        gradient="africa"
      />

      {/* Founder Section */}
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
              Our Founder
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the vision for Africa's transformative leadership development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 border-0 bg-card">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover mx-auto"
                      />
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-card-foreground mb-2">
                      {founder.name}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      {founder.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {founder.bio}
                    </p>

                    <div className="flex items-center justify-center lg:justify-start space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2"
                        asChild
                      >
                        <a href={founder.social.linkedin} aria-label="LinkedIn" target="_blank">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2"
                        asChild
                      >
                        <a href={founder.social.twitter} aria-label="Twitter" target="_blank">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2"
                        asChild
                      >
                        <a href={founder.social.website} aria-label="Website" target="_blank">
                          <Globe className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Department Leads */}
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
              Department Leads
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              The team guiding our mission and strategy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leads.map((lead, index) => (
              <motion.div
                key={lead.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: 'easeOut' }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow border-0 bg-card">
                  <CardContent className="p-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-white font-display font-bold text-lg">
                      {lead.initials}
                    </div>
                    <h3 className="text-xl font-display font-bold text-card-foreground mb-1">
                      {lead.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      {lead.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {lead.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Target className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Help us build Africa's future by developing the next generation of leaders.
              There are many ways to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
              >
                <a href="/volunteer">
                  Become a Volunteer
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white/30 text-green-800 hover:bg-white/10"
              >
                <a href="/events">
                  See Our Events
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Team;