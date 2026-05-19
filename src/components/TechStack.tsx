import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();
  
  const tools = [
    "n8n",
    "Make.com",
    "OpenAI API",
    "Claude API",
    "Airtable",
    "Notion",
    "Bannerbear"
  ];

  return (
    <section id="tech" className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
              {t.tech.title}
            </h2>
            <p className="text-slate-300 text-lg">
              {t.tech.subtitle}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          {tools.map((tool) => (
            <div 
              key={tool}
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium text-lg backdrop-blur-sm"
            >
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
