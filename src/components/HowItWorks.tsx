import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {t.process.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10"
              >
                <div className="flex md:block items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center shrink-0 mb-6 border-4 border-white shadow-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                      {step.time}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
