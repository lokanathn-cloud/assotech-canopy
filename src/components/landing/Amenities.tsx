import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trees, Church, Baby, Dumbbell, Flower2, TreeDeciduous, Footprints, ShoppingCart } from "lucide-react";

// Import amenity images
import amenityPark from "@/assets/amenity-park.webp";
import amenityTemple from "@/assets/amenity-temple.jpg";
import amenityPlayground from "@/assets/amenity-playground.jpg";
import amenityGym from "@/assets/amenity-gym.jpg";
import amenityFloral from "@/assets/amenity-floral.jpg";
import amenityAvenue from "@/assets/amenity-avenue.jpg";
import amenityJogging from "@/assets/amenity-jogging.jpg";
import amenityShopping from "@/assets/amenity-shopping.png";

interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  delay: number;
}

const AmenityCard = ({
  icon,
  title,
  description,
  image,
  delay
}: AmenityCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <div className="text-primary-foreground">{icon}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const amenities = [
    {
      icon: <Trees className="h-5 w-5" />,
      title: "Amphitheater & Community Park",
      description: "Green open spaces with stepped seating for tranquil community gatherings.",
      image: amenityPark
    },
    {
      icon: <Church className="h-5 w-5" />,
      title: "Temple",
      description: "Spiritual wellness at your doorstep for inner peace and community bonding.",
      image: amenityTemple
    },
    {
      icon: <Baby className="h-5 w-5" />,
      title: "Children's Play Area",
      description: "Safe, secure recreational spaces designed for young explorers.",
      image: amenityPlayground
    },
    {
      icon: <Dumbbell className="h-5 w-5" />,
      title: "Open Gym",
      description: "Wellness and active lifestyle hub for fitness enthusiasts.",
      image: amenityGym
    },
    {
      icon: <Flower2 className="h-5 w-5" />,
      title: "Floral Carpets",
      description: "Nature-inspired landscaping creating Instagram-worthy spaces.",
      image: amenityFloral
    },
    {
      icon: <TreeDeciduous className="h-5 w-5" />,
      title: "Tree-Lined Avenues",
      description: "Green corridors promoting healthy living and natural beauty.",
      image: amenityAvenue
    },
    {
      icon: <Footprints className="h-5 w-5" />,
      title: "Jogging Track",
      description: "Dedicated wellness paths for morning jogs and evening walks.",
      image: amenityJogging
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Convenient Shopping",
      description: "Easy access to retail stores for all your daily essentials.",
      image: amenityShopping
    }
  ];

  return (
    <section id="amenities" ref={ref} className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience <span className="text-primary">Premium Living</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class amenities designed for your comfort and well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={amenity.title}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
              image={amenity.image}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Lifestyle Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl text-secondary font-medium italic">
            "More than a community. It's a lifestyle."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
