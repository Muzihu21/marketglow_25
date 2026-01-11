import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah MarketGlow cocok untuk bisnis kecil atau UMKM?",
    answer:
      "Ya. Kami menyesuaikan strategi dengan skala dan tujuan bisnis, baik UMKM, startup, maupun corporate. Setiap bisnis mendapat perhatian dan strategi yang sesuai dengan kebutuhan spesifiknya.",
  },
  {
    question: "Apakah MarketGlow fokus ke hasil penjualan?",
    answer:
      "Fokus utama kami adalah hasil bisnis—leads, konversi, dan pertumbuhan—bukan sekadar metrics kosmetik seperti likes atau followers. Kami bekerja untuk memberikan dampak nyata pada bisnis Anda.",
  },
  {
    question: "Apakah bisa konsultasi sebelum kerja sama?",
    answer:
      "Tentu. Kami menyediakan sesi konsultasi gratis untuk memahami kebutuhan bisnis Anda terlebih dahulu. Ini membantu kami dan Anda untuk menentukan strategi yang paling tepat.",
  },
  {
    question: "Berapa lama hasil bisa terlihat?",
    answer:
      "Tergantung strategi dan channel yang digunakan, namun kami selalu menetapkan ekspektasi yang realistis sejak awal. Biasanya hasil awal dapat terlihat dalam 1-3 bulan pertama kerja sama.",
  },
  {
    question: "Layanan apa saja yang ditawarkan MarketGlow?",
    answer:
      "Kami menyediakan layanan lengkap: Social Media Management, Branding & Design, Website Development, dan Visual & Audio Production. Semua layanan dirancang untuk mendukung pertumbuhan bisnis secara menyeluruh.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Pertanyaan yang Sering{" "}
              <span className="text-accent">Diajukan</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Temukan jawaban untuk pertanyaan umum tentang layanan dan cara 
              kerja MarketGlow.
            </p>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:shadow-card transition-all"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
