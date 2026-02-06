import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import canopyLogo from "@/assets/canopy-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: "Home",
    href: "#hero"
  }, {
    label: "About Project",
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
  }, {
    label: "Download Brochure",
    href: "#lead-form"
  }];
  const socialLinks = [{
    icon: <Facebook className="h-5 w-5" />,
    href: "#",
    label: "Facebook"
  }, {
    icon: <Instagram className="h-5 w-5" />,
    href: "#",
    label: "Instagram"
  }, {
    icon: <Linkedin className="h-5 w-5" />,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: <Twitter className="h-5 w-5" />,
    href: "#",
    label: "Twitter"
  }];
  return <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Assotech */}
          <div>
            <img src={canopyLogo} alt="Assotech Canopy" className="h-12 w-auto mb-4 rounded" />
            <p className="text-background/70 text-sm mb-4">
              Assotech Group, with 38+ years of excellence, has delivered 40,000+ units 
              across 45+ successful projects. Assotech Canopy represents our commitment to premium living.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span className="px-2 py-1 bg-background/10 rounded text-xs">CREDAI Member</span>
              <span className="px-2 py-1 bg-background/10 rounded text-xs">RERA Approved</span>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Project Info</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <p>
                  Assotech Canopy, Crossing Republik,<br />
                  NH-24, Ghaziabad, Uttar Pradesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+917668645668" className="hover:text-background transition-colors">
                  +91 7668645668
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:Vikas.s1@assotechlimited.com" className="hover:text-background transition-colors">
                  Vikas.s1@assotechlimited.com
                </a>
              </div>
              <p className="pt-2">
                <strong className="text-background">Office Hours:</strong><br />
                Mon-Sat: 10:00 AM - 7:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.label}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="text-sm text-background/70">
              <p className="font-semibold text-background mb-2">RERA Registration</p>
              <p>UPRERAPRJ922718</p>
              <a href="https://up-rera.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Verify on UP RERA Portal →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Assotech Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;