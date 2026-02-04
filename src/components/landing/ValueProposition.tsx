import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, TrendingUp, Palette, Shield, Users, BarChart3 } from "lucide-react";

const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const endUserBenefits = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Freedom",
      description: "Build exactly what you envision. Your canvas, your rules.",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Independent Living",
      description: "No shared walls, complete privacy, absolute control.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Generational",
      description: "Space for the entire family under one roof.",
    },
  ];

  const investorBenefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Land Appreciation",
      description: "Historical growth of 12-15% annually in this corridor.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "RERA Security",
      description: "Fully compliant, government-approved investment.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Portfolio Diversification",
      description: "Real estate that hedges against market volatility.",
    },
  ];

  return (
    <section
      id="value-proposition"
      ref={ref}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Assotech Canopy?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're building your dream home or securing your financial future,
            Canopy offers unmatched value.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* End User Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">For Dream Builders</h3>
                <p className="text-sm text-muted-foreground">End-Users & Homeowners</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-foreground mb-4">
              The Freedom to Build Your Legacy
            </h4>
            <p className="text-muted-foreground mb-6">
              Imagine a home that's entirely yours—designed by you, built to your dreams.
              No compromises, no shared spaces, just pure freedom.
            </p>

            <div className="space-y-4">
              {endUserBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <div className="text-primary">{benefit.icon}</div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">{benefit.title}</h5>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Investor Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">For Wealth Maximizers</h3>
                <p className="text-sm text-muted-foreground">Investors & Portfolio Builders</p>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-foreground mb-4">
              Land Appreciation That Secures Your Future
            </h4>
            <p className="text-muted-foreground mb-6">
              Land in Crossing Republik has shown consistent appreciation.
              Secure your investment today and watch your wealth grow.
            </p>

            <div className="space-y-4">
              {investorBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <div className="text-gold">{benefit.icon}</div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">{benefit.title}</h5>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
