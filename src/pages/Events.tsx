import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Youtube, ArrowRight } from 'lucide-react';
import { getAllWebinars, type Webinar } from '@/lib/sanity';

function formatDate(iso?: string) {
  if (!iso) return 'Date to be announced';
  return new Date(iso).toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatTime(iso?: string) {
  if (!iso) return '';
  return new Date(iso).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' });
}

const Events = () => {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllWebinars().then((w) => {
      setWebinars(w);
      setLoading(false);
    });
  }, []);

  return (
    <PageLayout>
      <HeroSection
        title="Events & Workshops"
        subtitle="🌍 Africa Development Sphere"
        description="Join us for sessions designed to develop African leadership capacity — from webinars to our flagship annual summit."
      />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {loading ? (
            <div className="space-y-6 animate-pulse">
              <div className="h-48 bg-muted rounded-2xl" />
            </div>
          ) : webinars.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg">
              No events published yet — check back soon.
            </p>
          ) : (
            <div className="space-y-6">
              {webinars.map((w) => (
                <Card key={w._id} className="overflow-hidden border-0 bg-card shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                      {w.title}
                    </h3>
                    {w.tagline && (
                      <p className="text-muted-foreground mb-5 leading-relaxed">{w.tagline}</p>
                    )}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-3 text-primary" />
                        <span className="font-medium">{formatDate(w.date)}</span>
                      </div>
                      {w.date && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-3 text-primary" />
                          <span>{formatTime(w.date)}</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Youtube className="w-4 h-4 mr-3 text-primary" />
                        <span>YouTube Live</span>
                      </div>
                    </div>
                    {w.lumaEventUrl ? (
                      <Button asChild className="group/btn">
                        <a href={w.lumaEventUrl} target="_blank" rel="noopener noreferrer">
                          Register on Luma
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    ) : (
                      <Button disabled>Registration opening soon</Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Events;
