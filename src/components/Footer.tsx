import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Facebook 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-tight py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                Market<span className="text-accent">Glow</span>
              </span>
            </a>
            <p className="text-background/70 text-sm mb-6">
              Partner strategis digital marketing yang membantu bisnis 
              bertumbuh dengan arah yang jelas dan hasil yang terukur.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Tentang Kami", href: "#about" },
                { label: "Layanan", href: "#services" },
                { label: "Portofolio", href: "#" },
                { label: "Blog", href: "#" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Layanan
            </h4>
            <ul className="space-y-3">
              {[
                "Social Media Management",
                "Branding & Design",
                "Website Development",
                "Visual & Audio Production",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-background/70 text-sm">
                  hello@marketglow.id
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-background/70 text-sm">
                  +62 812 3456 7890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-background/70 text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} MarketGlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
