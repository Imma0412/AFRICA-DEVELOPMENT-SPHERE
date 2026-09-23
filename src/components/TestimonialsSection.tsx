import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'; // Added Chevron icons
import { Button } from './ui/button';

interface Testimonial {
  name: string;
  role?: string;
  content: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

const TestimonialsSection = ({
  title = "Stories of Transformation",
  subtitle = "Hear from African leaders who are building the future",
  testimonials
}: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the scroll container
  const testimonialCardRef = useRef<HTMLDivElement>(null); // Ref for a single testimonial card to measure width
  const [cardWidth, setCardWidth] = useState(0); // State to store the calculated card width
  const animationRef = useRef<number | null>(null); // Ref for continuous animation

  // Calculate card width on mount and resize
  useEffect(() => {
    const calculateCardWidth = () => {
      if (testimonialCardRef.current) {
        // Get the width of the card including its right margin/gap
        const cardRect = testimonialCardRef.current.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(testimonialCardRef.current);
        const marginRight = parseFloat(computedStyle.marginRight);
        setCardWidth(cardRect.width + marginRight);
      }
    };

    calculateCardWidth(); // Initial calculation
    window.addEventListener('resize', calculateCardWidth); // Recalculate on resize

    return () => window.removeEventListener('resize', calculateCardWidth);
  }, [testimonials]); // Recalculate if testimonials change

  // Continuous scrolling animation with seamless loop
  const startContinuousScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    if (!isPaused && !isDragging && testimonials.length > 0 && cardWidth > 0) {
      let lastFrameTime = performance.now();
      const scrollSpeed = 0.0648; // pixels per millisecond

      const animate = (currentTime: number) => {
        const frameDelta = currentTime - lastFrameTime;
        const pixelsToMove = frameDelta * scrollSpeed;

        if (containerRef.current) {
          const currentX = parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '') || '0');
          const newX = currentX - pixelsToMove;

          // Calculate the total width of one set of testimonials
          const singleSetWidth = testimonials.length * cardWidth;

          // Seamless reset when we've scrolled past one complete set
          if (Math.abs(newX) >= singleSetWidth) {
            const resetX = newX + singleSetWidth;
            containerRef.current.style.transform = `translateX(${resetX}px)`;
          } else {
            containerRef.current.style.transform = `translateX(${newX}px)`;
          }
          
          lastFrameTime = currentTime;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isPaused, isDragging, testimonials.length, cardWidth]);

  const stopContinuousScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  // Effect to manage continuous scroll based on pause state and index changes
  useEffect(() => {
    startContinuousScroll();
    return () => stopContinuousScroll(); // Clear on unmount
  }, [startContinuousScroll, stopContinuousScroll, currentIndex]); // Restart scroll when index changes

  // Pause/Resume functions
  const handlePause = useCallback(() => {
    setIsPaused(true);
    stopContinuousScroll();
  }, [stopContinuousScroll]);

  const handleResume = useCallback(() => {
    setIsPaused(false);
    startContinuousScroll();
  }, [startContinuousScroll]);

  // Navigation functions
  const goToNext = () => {
    if (containerRef.current) {
      const currentX = parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '') || '0');
      const newX = currentX - cardWidth;
      containerRef.current.style.transform = `translateX(${newX}px)`;
    }
    handleResume(); // Resume scroll after manual navigation
  };

  const goToPrev = () => {
    if (containerRef.current) {
      const currentX = parseFloat(containerRef.current.style.transform.replace('translateX(', '').replace('px)', '') || '0');
      const newX = currentX + cardWidth;
      containerRef.current.style.transform = `translateX(${newX}px)`;
    }
    handleResume(); // Resume scroll after manual navigation
  };

  // Calculate the x offset for the motion.div
  // For seamless scrolling, we start at 0 and let the animation handle the movement
  const xOffset = 0;



  return (
    <section className="py-16 lg:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Scroll container with navigation buttons and pause logic */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex space-x-6 cursor-grab"
            style={{
              transform: 'translateX(0px)',
              transition: 'none' // Remove all transitions for seamless animation
            }}
            onMouseEnter={handlePause} // Pause on hover for desktop
            onMouseLeave={handleResume} // Resume on mouse leave for desktop
            onTouchStart={() => setIsDragging(true)} // Start dragging on touch
            onTouchEnd={() => setIsDragging(false)} // Stop dragging on touch end
            onTouchCancel={() => setIsDragging(false)} // Handle touch cancel as well
          >
            {/* Duplicate testimonials for infinite scroll effect */}
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                ref={index === 0 ? testimonialCardRef : null} // Only apply ref to the first card to measure its width
                className="flex-shrink-0 w-80 lg:w-96 bg-card border border-border rounded-lg p-6 shadow-lg"
                style={{
                  // Ensure cards are positioned correctly when width is not yet calculated
                  minWidth: cardWidth === 0 ? '320px' : undefined, // Fallback min-width
                  maxWidth: cardWidth === 0 ? '384px' : undefined, // Fallback max-width
                }}
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm lg:text-base">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-card-foreground text-lg">
                    {testimonial.name}
                  </h4>
                  {testimonial.role && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          {testimonials.length > 1 && ( // Only show buttons if there's more than one testimonial
            <>
              <Button
                size="icon"
                variant="outline"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm z-10 p-2 rounded-full shadow-md hover:bg-card"
                onClick={goToPrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm z-10 p-2 rounded-full shadow-md hover:bg-card"
                onClick={goToNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-16 lg:w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 lg:w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
