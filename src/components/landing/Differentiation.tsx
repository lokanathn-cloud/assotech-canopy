import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

interface ComparisonRowProps {
  feature: string;
  canopy: boolean;
  others: boolean;
  delay: number;
}

const ComparisonRow = ({ feature, canopy, others, delay }: ComparisonRowProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="grid grid-cols-3 gap-4 py-4 border-b border-border last:border-0"
    >
      <div className="text-foreground font-medium">{feature}</div>
      <div className="flex justify-center">
        {canopy ? (
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Check className="h-5 w-5 text-primary" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
            <X className="h-5 w-5 text-destructive" />
          </div>
        )}
      </div>
      <div className="flex justify-center">
        {others ? (
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Check className="h-5 w-5 text-primary" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
            <X className="h-5 w-5 text-destructive" />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Differentiation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    { feature: "Independent Plot Ownership", canopy: true, others: false },
    { feature: "Complete Design Freedom", canopy: true, others: false },
    { feature: "No Shared Walls", canopy: true, others: false },
    { feature: "Curated Community", canopy: true, others: false },
    { feature: "RERA Approved", canopy: true, others: true },
    { feature: "Part of 360-Acre Township", canopy: true, others: false },
    { feature: "38+ Years Developer Legacy", canopy: true, others: false },
    { feature: "Land Appreciation Potential", canopy: true, others: false },
  ];

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
            Why We're <span className="text-primary">Different</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Assotech Canopy stands apart from traditional high-rise apartments
            and speculative land investments.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border"
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 pb-4 border-b-2 border-primary/20 mb-4">
            <div className="text-sm font-semibold text-muted-foreground">Feature</div>
            <div className="text-center">
              <div className="text-primary font-bold">Assotech Canopy</div>
              <div className="text-xs text-muted-foreground">Premium Plots</div>
            </div>
            <div className="text-center">
              <div className="text-secondary font-bold">Others</div>
              <div className="text-xs text-muted-foreground">Apartments/Land</div>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <ComparisonRow
              key={item.feature}
              feature={item.feature}
              canopy={item.canopy}
              others={item.others}
              delay={0.3 + index * 0.05}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-lg text-muted-foreground">
            Experience the difference of owning your own plot.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiation;
