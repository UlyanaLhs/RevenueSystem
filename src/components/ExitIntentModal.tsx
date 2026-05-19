import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const SESSION_KEY = "exit_intent_shown";

export function ExitIntentModal() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 10 && !sessionStorage.getItem(SESSION_KEY)) {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const close = () => setOpen(false);

  const handleCtaClick = () => {
    close();
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSc2ECfZ1SuienMjBnYWsmsWxygnfN7cJV6fYYCw9gTOwxkcmg/viewform", "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
          data-testid="exit-intent-overlay"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "40px 36px",
              maxWidth: "480px",
              width: "100%",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
            data-testid="exit-intent-modal"
          >
            <button
              onClick={close}
              data-testid="button-close-exit-modal"
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#94A3B8",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <X size={20} />
            </button>

            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#EFF6FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>

            <h2
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#0F1C2E",
                marginBottom: "12px",
                lineHeight: 1.3,
              }}
            >
              {t.exitIntent.title}
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#64748B",
                lineHeight: 1.6,
                marginBottom: "28px",
              }}
            >
              {t.exitIntent.subtext}
            </p>
            <button
              onClick={handleCtaClick}
              data-testid="button-exit-intent-cta"
              style={{
                width: "100%",
                backgroundColor: "#2563EB",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "14px 24px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D4ED8")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
            >
              {t.exitIntent.button}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
