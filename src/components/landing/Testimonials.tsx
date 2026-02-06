import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section className="section-padding bg-background py-12 md:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Trusted by <span className="text-primary">Homeowners & Investors</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join 40,000+ satisfied homeowners who chose Assotech.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative bg-card rounded-xl p-6 md:p-8 shadow-md border border-border text-center">
            <Quote className="h-8 w-8 text-primary/20 mx-auto mb-4" />
            <blockquote className="text-lg md:text-xl text-foreground italic mb-4">
              "Building at Assotech Canopy was seamless. The freedom to design our dream home is priceless. The community is wonderful!"
            </blockquote>
            <p className="text-sm text-muted-foreground">— Satisfied Homeowner</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;