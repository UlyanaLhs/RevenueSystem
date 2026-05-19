import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function StickyCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector("footer");
      const footerTop = footer ? footer.getBoundingClientRect().top + window.scrollY : Infinity;
      const nearFooter = window.scrollY + window.innerHeight >= footerTop - 80;
      setVisible(scrollY > 300 && !nearFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc2ECfZ1SuienMjBnYWsmsWxygnfN7cJV6fYYCw9gTOwxkcmg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          data-testid="button-sticky-cta"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            backgroundColor: "#2563EB",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "14px 24px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            zIndex: 1000,
            letterSpacing: "0.01em",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {t.stickyCta}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
