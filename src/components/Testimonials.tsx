import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#0F1C2E" }}
        >
          {t.testimonials.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {t.testimonials.cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 flex flex-col gap-4 relative"
              style={{ boxShadow: "0 2px 16px rgba(15,28,46,0.07)", borderRadius: "12px" }}
              data-testid={`testimonial-card-${i}`}
            >
              {card.company && (
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#94A3B8",
                    backgroundColor: "#F1F5F9",
                    borderRadius: "4px",
                    padding: "3px 8px",
                  }}
                >
                  {card.company}
                </span>
              )}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: "#F59E0B", fontSize: "16px" }}>★</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                "{card.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: card.color }}
                >
                  {card.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate" style={{ color: "#0F1C2E" }}>
                    {card.name}
                  </p>
                  <p className="text-xs text-slate-400 truncate">{card.title}</p>
                </div>
                <span
                  className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#EFF6FF", color: "#2563EB" }}
                >
                  {card.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
