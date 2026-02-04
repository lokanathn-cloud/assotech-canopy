import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Download, MessageCircle, Mail } from "lucide-react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Plot Your Dreams?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Take the first step towards owning your dream plot. 
            Book a site visit today and experience Assotech Canopy in person.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 font-semibold bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href="#lead-form">
                <Phone className="mr-2 h-5 w-5" />
                Book Your Site Visit Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-white/10"
              asChild
            >
              <a href="#lead-form">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </a>
            </Button>
          </div>

          {/* Contact Options */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 99999 99999</span>
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:sales@assotechcanopy.com"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>sales@assotechcanopy.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
