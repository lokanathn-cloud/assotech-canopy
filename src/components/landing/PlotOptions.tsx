import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Users, Maximize, Home } from "lucide-react";
import villa100 from "@/assets/villa-100sqyd.jpg";
import villa200 from "@/assets/villa-200sqyd.jpg";

interface PlotCardProps {
  image: string;
  title: string;
  subtitle: string;
  size: string;
  description: string;
  benefits: string[];
  delay: number;
  featured?: boolean;
}

const PlotCard = ({
  image,
  title,
  subtitle,
  size,
  description,
  benefits,
  delay,
  featured = false,
}: PlotCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        featured ? "border-primary" : "border-border"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Popular Choice
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {size}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-primary font-medium mb-3">{subtitle}</p>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <Button className="w-full" size="lg" asChild>
          <a href="#lead-form">
            View Details & Get Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

const PlotOptions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="plot-options" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Canvas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two perfectly sized options to match your vision. Design flexibility meets practical elegance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PlotCard
            image={villa100}
            title="100 Sq. Yard"
            subtitle="The Perfect Start"
            size="100 Sq. Yards"
            description="Ideal for forward-thinking families who value both space and practicality. Build smart, live large."
            benefits={[
              "Perfect for nuclear families",
              "Manageable footprint, maximum utility",
              "Optimal budget-to-space ratio",
              "Contemporary design potential",
            ]}
            delay={0.2}
          />
          <PlotCard
            image={villa200}
            title="200 Sq. Yard"
            subtitle="The Legacy"
            size="200 Sq. Yards"
            description="For those who dream big—multi-generational living with room to spare. Create your architectural masterpiece."
            benefits={[
              "Multi-generational family living",
              "Expansive garden and outdoor space",
              "Premium architectural showcase",
              "Maximum design freedom",
            ]}
            delay={0.3}
            featured
          />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Design Freedom</p>
              <p className="text-sm text-muted-foreground">Build as per your vision</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Curated Community</p>
              <p className="text-sm text-muted-foreground">Like-minded neighbors</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Maximize className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Premium Location</p>
              <p className="text-sm text-muted-foreground">NH-24 connectivity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlotOptions;
