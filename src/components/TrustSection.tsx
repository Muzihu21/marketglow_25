import { motion } from "framer-motion";
import { Shield, Users, Target } from "lucide-react";

const trustIndicators = [
  {
    icon: Users,
    text: "Dipercaya oleh brand lokal & nasional dari berbagai industri",
  },
  {
    icon: Shield,
    text: "Tim berpengalaman di digital marketing, branding & performance ads",
  },
  {
    icon: Target,
    text: "Strategi berbasis data, insight pasar, dan tujuan bisnis nyata",
  },
];

const TrustSection = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container-tight">
        <div className="grid md:grid-cols-3 gap-6">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
