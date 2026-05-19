import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function SocialProof() {
  const { t } = useLanguage();

  return (
    <section className="py-6 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
            {t.socialProof}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
