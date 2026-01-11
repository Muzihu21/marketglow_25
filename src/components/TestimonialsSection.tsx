import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sejak bekerja sama dengan MarketGlow, strategi digital kami jadi jauh lebih terarah. Bukan cuma ramai, tapi penjualan juga naik.",
    author: "Owner Brand Retail",
    company: "Fashion & Lifestyle",
    rating: 5,
  },
  {
    quote:
      "MarketGlow benar-benar paham bisnis kami. Mereka bukan cuma eksekutor, tapi partner strategis.",
    author: "Marketing Manager",
    company: "F&B Industry",
    rating: 5,
  },
  {
    quote:
      "Website dan branding kami terasa jauh lebih profesional dan meningkatkan kepercayaan klien.",
    author: "Founder Startup",
    company: "Tech Startup",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Apa Kata Klien Tentang{" "}
            <span className="text-accent">MarketGlow</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-card hover:shadow-glow transition-all duration-300 border border-border/50 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-8 w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-border"
        >
          <p className="text-center text-muted-foreground mb-8">
            Dipercaya oleh berbagai brand dari beragam industri
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["UMKM", "Corporate", "Startup", "B2B"].map((type, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium"
              >
                {type}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
