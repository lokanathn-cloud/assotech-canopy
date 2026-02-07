import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, School, Building, Plane, Car } from "lucide-react";

interface LocationItemProps {
  icon: React.ReactNode;
  title: string;
  distance: string;
  delay: number;
}

const LocationItem = ({ icon, title, distance, delay }: LocationItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
    >
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <div className="text-primary">{icon}</div>
      </div>
      <div className="flex-1">
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-primary font-semibold">{distance}</p>
      </div>
    </motion.div>
  );
};

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    {
      icon: <Building className="h-5 w-5" />,
      title: "Akshardham Temple, Delhi",
      distance: "15 mins drive",
    },
    {
      icon: <School className="h-5 w-5" />,
      title: "Prominent Schools",
      distance: "10 mins drive",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Hospitals & Medical Facilities",
      distance: "10 mins drive",
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Ghaziabad Junction Railway",
      distance: "15 mins drive",
    },
    {
      icon: <Plane className="h-5 w-5" />,
      title: "Jewar Airport (Upcoming)",
      distance: "30 mins drive",
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Noida Expressway",
      distance: "Quick Access",
    },
  ];

  return (
    <section id="location" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prime Location on <span className="text-primary">NH-24</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gateway to Prosperity — Strategically located for seamless connectivity
            to Delhi, Noida, and the upcoming Jewar Airport.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8687711661896!2d77.4340479!3d28.6336949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa78b22ec49%3A0x4432a22c2f5c6861!2sAssotech%20Canopy!5e0!3m2!1sen!2sin!4v1770443881114!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Assotech Canopy Location"
              className="w-full h-[400px]"
            />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-6 border border-border mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Crossing Republik</h3>
                  <p className="text-sm text-muted-foreground">Ghaziabad, NH-24</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Situated on the bustling NH-24 corridor, Assotech Canopy offers
                unparalleled connectivity while maintaining the serenity of a
                planned township.
              </p>
            </div>

            <div className="space-y-3">
              {locations.map((location, index) => (
                <LocationItem
                  key={location.title}
                  icon={location.icon}
                  title={location.title}
                  distance={location.distance}
                  delay={0.4 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
