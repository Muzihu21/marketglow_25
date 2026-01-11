import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const problems = [
  "Traffic ada, tapi tidak konversi",
  "Follower naik, tapi penjualan stagnan",
  "Budget iklan keluar, tapi ROI tidak jelas",
  "Digital terasa sibuk, tapi bisnis tidak bergerak",
];

const solutions = [
  "Menyusun strategi berbasis tujuan bisnis Anda",
  "Menentukan channel yang benar-benar efektif",
  "Mengoptimalkan setiap touchpoint digital",
];

const ProblemSolutionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Tantangan Digital Bukan Soal{" "}
            <span className="text-accent">Ramai</span>,<br />
            Tapi Soal <span className="text-accent">Tepat Sasaran</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="bg-secondary/50 rounded-2xl p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  Masalah Umum
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Banyak bisnis sudah "hadir" di digital: konten rutin di-upload, 
                iklan terus berjalan, website sudah live. Namun satu pertanyaan 
                besar tetap muncul:
              </p>

              <p className="text-lg font-display font-semibold text-foreground mb-6 italic">
                "Kenapa hasilnya tidak terasa?"
              </p>

              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold">
                  Solusi MarketGlow
                </h3>
              </div>

              <p className="text-primary-foreground/80 mb-6">
                MarketGlow hadir untuk mengubah aktivitas digital menjadi 
                strategi bisnis yang bekerja. Kami tidak sekadar menjalankan 
                campaign, tapi:
              </p>

              <ul className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{solution}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6 border-t border-primary-foreground/20">
                <p className="font-display font-semibold text-lg flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-accent" />
                  Digital bukan lagi beban biaya, tapi mesin pertumbuhan bisnis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
