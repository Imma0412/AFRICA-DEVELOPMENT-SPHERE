import { motion } from 'framer-motion';
import { Clock, Bell, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PageLayout from './PageLayout';

interface ComingSoonProps {
  title: string;
  description: string;
  features?: string[];
  expectedLaunch?: string;
}

const ComingSoon = ({ 
  title, 
  description, 
  features = [], 
  expectedLaunch = "2025" 
}: ComingSoonProps) => {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Clock className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6"
            >
              {title}
            </motion.h1>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-full text-lg font-medium">
                <Clock className="w-5 h-5 mr-2" />
                Coming {expectedLaunch}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>

            {/* Features (if provided) */}
            {features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  What to Expect:
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-muted/50 rounded-lg p-4 text-left"
                    >
                      <span className="text-muted-foreground">• {feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg max-w-lg mx-auto mb-12"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Bell className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-display font-bold text-card-foreground">
                  Get Notified
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Be the first to know when we launch. We'll send you exclusive updates 
                and early access opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="sm:px-6">
                  Notify Me
                </Button>
              </div>
            </motion.div>

            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group"
              >
                <a href="/">
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </a>
              </Button>
              <Button
                asChild
                size="lg"
              >
                <a href="/events">
                  Explore Current Events
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ComingSoon;