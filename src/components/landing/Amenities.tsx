import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trees, Church, Baby, Dumbbell, Flower2, TreeDeciduous, Footprints, PawPrint } from "lucide-react";
interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}
const AmenityCard = ({
  icon,
  title,
  description,
  delay
}: AmenityCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 30
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.5,
    delay
  }} className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <div className="text-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>;
};
const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const amenities = [{
    icon: <Trees className="h-6 w-6" />,
    title: "Amphitheater & Community Park",
    description: "Green open spaces with stepped seating for tranquil community gatherings."
  }, {
    icon: <Church className="h-6 w-6" />,
    title: "Temple",
    description: "Spiritual wellness at your doorstep for inner peace and community bonding."
  }, {
    icon: <Baby className="h-6 w-6" />,
    title: "Children's Play Area",
    description: "Safe, secure recreational spaces designed for young explorers."
  }, {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Open Gym",
    description: "Wellness and active lifestyle hub for fitness enthusiasts."
  }, {
    icon: <Flower2 className="h-6 w-6" />,
    title: "Floral Carpets",
    description: "Nature-inspired landscaping creating Instagram-worthy spaces."
  }, {
    icon: <TreeDeciduous className="h-6 w-6" />,
    title: "Tree-Lined Avenues",
    description: "Green corridors promoting healthy living and natural beauty."
  }, {
    icon: <Footprints className="h-6 w-6" />,
    title: "Jogging Track",
    description: "Dedicated wellness paths for morning jogs and evening walks."
  }, {
    icon: <PawPrint className="h-6 w-6" />,
    title: "Pets Area",
    description: "Pet-friendly community with dedicated spaces for furry friends."
  }];
  return <section id="amenities" ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience <span className="text-primary">Premium Living</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">World-class amenities designed for your comfort and well-being.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => <AmenityCard key={amenity.title} icon={amenity.icon} title={amenity.title} description={amenity.description} delay={index * 0.1} />)}
        </div>

        {/* Lifestyle Tagline */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-secondary font-medium italic">
            "More than a community. It's a lifestyle."
          </p>
        </motion.div>
      </div>
    </section>;
};
export default Amenities;