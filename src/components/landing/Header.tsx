import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import canopyLogo from "@/assets/canopy-logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    label: "Home",
    href: "#hero"
  }, {
    label: "About",
    href: "#value-proposition"
  }, {
    label: "Plot Options",
    href: "#plot-options"
  }, {
    label: "Amenities",
    href: "#amenities"
  }, {
    label: "Location",
    href: "#location"
  }, {
    label: "FAQ",
    href: "#faq"
  }];
  return <>
      <motion.header initial={{
      y: -100
    }} animate={{
      y: 0
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <img alt="Assotech Canopy Logo" className="h-10 md:h-12 w-auto rounded" src="/lovable-uploads/6a12ad01-c303-4b2f-99af-9d3eb27c5839.png" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map(link => <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white"}`}>
                  {link.label}
                </a>)}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+917668645668" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-foreground" : "text-white"}`}>
                <Phone className="h-4 w-4" />
                +91 7668645668
              </a>
              <Button size="lg" className="font-semibold" asChild>
                <a href="#lead-form">Get Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.nav initial={{
          x: "100%"
        }} animate={{
          x: 0
        }} exit={{
          x: "100%"
        }} transition={{
          type: "tween"
        }} className="absolute right-0 top-0 bottom-0 w-72 bg-card shadow-xl">
              <div className="p-6 pt-20">
                <div className="flex flex-col gap-4">
                  {navLinks.map(link => <a key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </a>)}
                  <hr className="my-4 border-border" />
                  <a href="tel:+917668645668" className="flex items-center gap-2 text-foreground">
                    <Phone className="h-5 w-5" />
                    +91 7668645668
                  </a>
                  <Button className="w-full mt-4" asChild>
                    <a href="#lead-form">Get Quote</a>
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card border-t border-border shadow-lg">
        <div className="flex gap-2 p-3">
          <Button variant="outline" className="flex-1" asChild>
            <a href="tel:+917668645668">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </Button>
          <Button className="flex-1" asChild>
            <a href="#lead-form">Get Details
          </a>
          </Button>
        </div>
      </div>
    </>;
};
export default Header;