import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, MapPin, Clock, Ruler, Shield } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, label, delay }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-4"
    >
      <div className="text-primary mb-2">{icon}</div>
      <div className="text-xl md:text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    {
      icon: <Building2 className="h-6 w-6" />,
      value: "38+ Years",
      label: "40,000+ Units",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      value: "6.75 Acres",
      label: "156 Premium Plots",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: "15 mins",
      label: "To Delhi",
    },
    {
      icon: <Ruler className="h-6 w-6" />,
      value: "100 & 200",
      label: "Sq. Yards",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      value: "₹1.60 Cr+",
      label: "Starting Price",
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      <section
        className={`bg-card border-y border-border transition-all duration-300 ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <div className="container-custom py-6 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
