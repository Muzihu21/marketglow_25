import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Share2, 
  Palette, 
  Globe, 
  Video,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategi konten yang membangun brand & engagement bermakna.",
    features: ["Content Strategy", "Community Management", "Ads Campaign"],
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Identitas visual yang kuat, konsisten, dan profesional.",
    features: ["Logo Design", "Brand Identity", "Marketing Collateral"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Website yang cepat, profesional, dan conversion-ready.",
    features: ["Company Profile", "E-Commerce", "Landing Page"],
  },
  {
    icon: Video,
    title: "Visual & Audio Production",
    description: "Konten visual & audio yang menarik dan berdaya jual.",
    features: ["Photography", "Videography", "Motion Graphics"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Solusi Digital untuk{" "}
            <span className="text-accent">Setiap Tahap</span> Pertumbuhan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari membangun brand hingga meningkatkan penjualan, kami hadir 
            dengan solusi end-to-end.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 hover:border-accent/30">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            Lihat Semua Layanan
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
