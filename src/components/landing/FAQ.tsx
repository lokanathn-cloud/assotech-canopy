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
  {
    question: "How is the connectivity to Delhi and Noida?",
    answer:
      "Assotech Canopy is strategically located on NH-24 with excellent connectivity. It's just 15 minutes from Akshardham Temple (Delhi), 10 minutes from major schools and hospitals, and has quick access to Noida Expressway. The upcoming Jewar Airport is approximately 30 minutes away.",
  },
  {
    question: "What is the expected appreciation potential?",
    answer:
      "The Crossing Republik micro-market has shown consistent land appreciation of 12-15% annually over the past decade. With the upcoming Jewar Airport and improved infrastructure, experts project continued strong growth in this corridor.",
  },
  {
    question: "Can I build according to my own design?",
    answer:
      "Absolutely! Design freedom is our core USP. You can build your dream home exactly as you envision. Your architectural plans must follow GDA guidelines, but within those parameters, you have complete creative control over your home's design.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "We offer flexible payment plans including construction-linked payment, time-linked payment, and customized plans. A booking amount secures your plot, with the remaining amount payable as per the chosen plan. Contact our sales team for detailed payment schedules.",
  },
  {
    question: "What amenities are included in the township?",
    answer:
      "Assotech Canopy features world-class amenities including an Amphitheater, Community Park, Temple, Children's Play Area, Open Gym, Floral Carpets landscaping, Tree-Lined Avenues, Jogging Track, and a dedicated Pets Area. All amenities are part of the 360-acre integrated township.",
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
