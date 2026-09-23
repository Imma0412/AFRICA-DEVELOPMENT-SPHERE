import { motion } from 'framer-motion';
import { Code, Wrench, ArrowLeft, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PageLayout from './PageLayout';

interface InDevelopmentProps {
  title: string;
  description: string;
  progress?: number;
  timeline?: string;
}

const InDevelopment = ({ 
  title, 
  description, 
  progress = 60,
  timeline = "Q3 2025" 
}: InDevelopmentProps) => {
  return (
    <PageLayout>
      <section className="py-20 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 bg-gradient-africa rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Code className="w-12 h-12 text-white" />
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

            {/* In Development Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 bg-muted text-muted-foreground rounded-full text-lg font-medium">
                <Wrench className="w-5 h-5 mr-2" />
                In Active Development
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

            {/* Progress Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-8 shadow-lg mb-12"
            >
              <h3 className="text-2xl font-display font-bold text-card-foreground mb-6">
                Development Progress
              </h3>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Overall Progress</span>
                  <span className="text-sm font-medium text-card-foreground">{progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="bg-gradient-primary h-3 rounded-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">✅ Completed</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Research & Planning</li>
                    <li>• Technical Architecture</li>
                    <li>• Initial Development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">🚧 In Progress</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Core Features Development</li>
                    <li>• User Interface Design</li>
                    <li>• Testing & Optimization</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  Expected Launch: {timeline}
                </span>
              </div>
            </motion.div>

            {/* Interest Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-2xl p-8 shadow-lg max-w-lg mx-auto mb-12"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-display font-bold text-card-foreground">
                  Express Interest
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Help us shape this platform by sharing your thoughts and requirements. 
                We'll keep you updated on our progress.
              </p>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                />
                <Textarea
                  placeholder="What features or capabilities would you like to see? (Optional)"
                  rows={3}
                />
                <Button className="w-full">
                  Express Interest
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
                <a href="/about">
                  Learn More About ADS
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InDevelopment;