import { motion } from "framer-motion";
import { Search, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Understand",
    description:
      "Kami memulai dengan memahami bisnis Anda: riset pasar, analisis kompetitor, dan pemetaan target audience.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Execute",
    description:
      "Strategi dieksekusi secara terarah melalui konten, iklan, desain, dan website yang selaras.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Optimize",
    description:
      "Kami memantau data, mengevaluasi performa, dan mengoptimasi strategi agar hasil terus meningkat.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-primary overflow-hidden">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Proses Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Bagaimana MarketGlow Bekerja <br />
            <span className="text-accent">untuk Bisnis Anda</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-foreground/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/50 transition-colors">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-accent text-accent-foreground font-display font-bold text-sm px-4 py-2 rounded-full">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold text-primary-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center -translate-y-1/2 z-10">
                    <svg
                      className="w-4 h-4 text-accent-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
