import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Heart, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Pragmatis & Realistis",
    description:
      "Kami merancang strategi yang masuk akal, bisa dijalankan, dan sesuai kondisi bisnis Anda.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description:
      "Setiap keputusan didasarkan pada data, riset, dan insight—bukan asumsi.",
  },
  {
    icon: Heart,
    title: "Customer-Centric Approach",
    description:
      "Kami fokus memahami perilaku target market agar pesan brand benar-benar relevan.",
  },
  {
    icon: Trophy,
    title: "Result-Oriented Mindset",
    description:
      "Fokus kami adalah growth bisnis: leads, konversi, dan penjualan—bukan vanity metrics.",
  },
];

const WhyMarketGlowSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Kenapa MarketGlow?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Bisnis Anda Butuh{" "}
            <span className="text-accent">Partner Strategis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bukan sekadar vendor eksekusi. Kami adalah partner yang tumbuh 
            bersama bisnis Anda.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMarketGlowSection;
