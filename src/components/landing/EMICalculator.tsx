import { useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, Phone, IndianRupee } from "lucide-react";

const EMICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [plotSize, setPlotSize] = useState<"100" | "200">("100");
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [tenure, setTenure] = useState(15);
  const [interestRate, setInterestRate] = useState(8.5);

  const plotPrices = {
    "100": { min: 16000000, max: 25000000, default: 16000000 },
    "200": { min: 25000000, max: 50000000, default: 32000000 },
  };

  const emiDetails = useMemo(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      principal,
    };
  }, [loanAmount, tenure, interestRate]);

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    }
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plan Your <span className="text-primary">Investment</span> Smartly
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Use our EMI calculator to understand your monthly commitments
            and plan your dream plot purchase.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">EMI Calculator</h3>
              </div>

              {/* Plot Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select Plot Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setPlotSize("100");
                      setLoanAmount(plotPrices["100"].default);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      plotSize === "100"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-bold text-foreground">100 Sq. Yard</div>
                    <div className="text-sm text-muted-foreground">The Perfect Start</div>
                  </button>
                  <button
                    onClick={() => {
                      setPlotSize("200");
                      setLoanAmount(plotPrices["200"].default);
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      plotSize === "200"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="font-bold text-foreground">200 Sq. Yard</div>
                    <div className="text-sm text-muted-foreground">The Legacy</div>
                  </button>
                </div>
              </div>

              {/* Loan Amount Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Loan Amount
                  </label>
                  <span className="text-primary font-bold">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={plotPrices[plotSize].min}
                  max={plotPrices[plotSize].max}
                  step={100000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{formatCurrency(plotPrices[plotSize].min)}</span>
                  <span>{formatCurrency(plotPrices[plotSize].max)}</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Loan Tenure
                  </label>
                  <span className="text-primary font-bold">{tenure} Years</span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={5}
                  max={20}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5 Years</span>
                  <span>20 Years</span>
                </div>
              </div>

              {/* Interest Rate Display */}
              {/* Interest Rate Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-foreground">
                    Interest Rate (p.a.)
                  </label>
                  <span className="text-primary font-bold">{interestRate}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={7}
                  max={12}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>7%</span>
                  <span>12%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Your Investment Breakdown
              </h3>

              {/* EMI Display */}
              <div className="bg-primary rounded-xl p-6 mb-6 text-center">
                <p className="text-primary-foreground/80 text-sm mb-1">
                  Your Monthly EMI
                </p>
                <div className="flex items-center justify-center gap-2">
                  <IndianRupee className="h-8 w-8 text-primary-foreground" />
                  <span className="text-4xl font-bold text-primary-foreground">
                    {emiDetails.emi.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Principal Amount</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(emiDetails.principal)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Total Interest</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(emiDetails.totalInterest)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-foreground font-medium">Total Amount</span>
                  <span className="font-bold text-primary text-lg">
                    {formatCurrency(emiDetails.totalAmount)}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full" size="lg" asChild>
                <a href="tel:+919999999999">
                  <Phone className="mr-2 h-5 w-5" />
                  Talk to Investment Specialist
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                *EMI calculation is indicative. Actual EMI may vary based on bank terms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
