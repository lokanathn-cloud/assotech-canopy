import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    content:
      "Building my dream home at Assotech Canopy was seamless. The freedom to design exactly what my family wanted is priceless. The community here is wonderful!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Investor",
    content:
      "My investment in Assotech Canopy has given me peace of mind. The RERA approval and Assotech's 40-year track record made this an easy decision.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Homeowner",
    content:
      "The location is perfect - 15 minutes to Delhi and yet so peaceful. My children love the community park and the amphitheater is a great gathering spot.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sunita Agarwal",
    role: "Investor",
    content:
      "I've seen consistent appreciation in my plot value. Assotech's commitment to quality and timely delivery sets them apart from other developers.",
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Homeowners & Investors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 30,000+ satisfied homeowners who chose Assotech for their dream homes.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-gold fill-gold"
                  />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-foreground text-center mb-8 italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <p className="font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-primary">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-card rounded-xl border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary">30,000+</div>
              <div className="text-sm text-muted-foreground">Happy Homes</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary">40+</div>
              <div className="text-sm text-muted-foreground">Years Legacy</div>
            </div>
            <div className="text-center p-4 bg-card rounded-xl border border-border">
              <div className="text-2xl md:text-3xl font-bold text-primary">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
