import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Youtube, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedWebinar, type Webinar } from '@/lib/sanity';

function formatWeekdayMonth(iso?: string) {
  if (!iso) return { day: '--', month: 'TBA', weekday: 'Date to be announced' };
  const d = new Date(iso);
  return {
    day: d.toLocaleString('en-US', { day: 'numeric' }),
    month: d.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
    weekday: d.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

function formatTime(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' });
}

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

const UpcomingEvents = () => {
  const [webinar, setWebinar] = useState<Webinar | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedWebinar().then((w) => {
      setWebinar(w);
      setLoading(false);
    });
  }, []);

  if (!loading && !webinar) return null;

  const dateParts = webinar ? formatWeekdayMonth(webinar.date) : null;

  return (
    <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Happening Soon
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-4">
            Upcoming Event
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for our next session — free and open to everyone.
          </p>
        </motion.div>

        {loading ? (
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-72 bg-muted rounded-3xl" />
          </div>
        ) : webinar && dateParts ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-3xl bg-card shadow-2xl overflow-hidden border border-border/50">
              {/* Decorative gradient glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative grid md:grid-cols-[auto_1fr] gap-0">
                {/* Date block panel */}
                <div className="flex md:flex-col items-center justify-center gap-4 md:gap-2 bg-gradient-primary text-white px-8 py-8 md:py-12 md:w-48 relative overflow-hidden">
                  <AnimatedNetworkBackground color="rgba(255,255,255,0.5)" density={35} />
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'backOut', delay: 0.1 }}
                    className="relative z-10 text-center"
                  >
                    <div className="text-5xl md:text-6xl font-display font-extrabold leading-none">
                      {dateParts.day}
                    </div>
                    <div className="text-sm font-bold tracking-widest mt-1">
                      {dateParts.month}
                    </div>
                  </motion.div>
                  <div className="relative z-10 hidden md:block w-10 border-t border-white/30 my-2" />
                  <div className="relative z-10 flex items-center gap-1.5 text-xs font-medium text-white/85">
                    <Youtube className="w-3.5 h-3.5" />
                    YouTube Live
                  </div>
                </div>

                {/* Content panel */}
                <div className="p-8 lg:p-10">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide rounded-full mb-4">
                    Webinar
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-card-foreground mb-3">
                    {webinar.title}
                  </h3>
                  {webinar.tagline && (
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base lg:text-lg">
                      {webinar.tagline}
                    </p>
                  )}

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    className="flex flex-wrap gap-x-6 gap-y-3 mb-8"
                  >
                    <motion.div
                      variants={rowVariants}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">{dateParts.weekday}</span>
                    </motion.div>
                    {webinar.date && (
                      <motion.div
                        variants={rowVariants}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <span>{formatTime(webinar.date)}</span>
                      </motion.div>
                    )}
                  </motion.div>

                  {webinar.speakers && webinar.speakers.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-center gap-3 mb-8"
                    >
                      <div className="flex -space-x-3">
                        {webinar.speakers.map((s) => (
                          <div
                            key={s._id}
                            title={s.name}
                            className="w-10 h-10 rounded-full bg-gradient-primary text-white text-xs font-bold flex items-center justify-center ring-2 ring-card"
                          >
                            {initials(s.name)}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {webinar.speakers.map((s) => s.name).join(' · ')}
                      </span>
                    </motion.div>
                  )}

                  {webinar.lumaEventUrl ? (
                    <Button asChild className="w-full sm:w-auto group/btn" size="lg">
                      <a href={webinar.lumaEventUrl} target="_blank" rel="noopener noreferrer">
                        Register on Luma
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <Button disabled className="w-full sm:w-auto" size="lg">
                      Registration opening soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
};

export default UpcomingEvents;