import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the RERA approval status of Assotech Canopy?",
    answer:
      "Assotech Canopy is fully RERA-approved with registration number UPRERAPRJ922718. You can verify this on the official UP RERA portal. All our projects comply with government regulations ensuring your investment is secure.",
  },
  {
    question: "What plot sizes are available?",
    answer:
      "We offer two plot sizes: 100 Sq. Yards (The Perfect Start) ideal for nuclear families, and 200 Sq. Yards (The Legacy) perfect for multi-generational living. Assotech Canopy features 156 premium plots across 6.75 acres. Both options provide complete design freedom within GDA guidelines. Pricing starts from ₹1.60 Cr.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We support home loans from all major banks including HDFC, ICICI, Axis, SBI, and more. Our team assists with loan processing and documentation. Current home loan interest rates in India typically range from 8-9.5% p.a. Use our EMI calculator to estimate your monthly payments.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common <span className="text-primary">Questions</span> Answered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Assotech Canopy. Can't find your answer?
            Contact our team directly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg mb-3 border border-border px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
