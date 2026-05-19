import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
const logoImg = "/assets/logo.jpg";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ backgroundColor: "#F8FAFC", padding: "64px 0" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#0F1C2E", marginBottom: "16px" }}
          >
            {t.about.title}
          </h2>
          <div
            style={{
              width: "40px",
              height: "3px",
              backgroundColor: "#2563EB",
              borderRadius: "2px",
              margin: "0 auto",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "32px",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "48px 40px",
            background: "white",
            border: "1px solid #E2E8F0",
            borderRadius: "20px",
          }}
          className="about-card"
        >
          {/* Logo */}
          <img
            src={logoImg}
            alt={t.about.photoAlt}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "contain",
              background: "#0F1C2E",
              padding: "8px",
              flexShrink: 0,
            }}
          />

          {/* Text content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "#0F1C2E", marginBottom: "2px" }}>
              {t.about.name}
            </p>
            <p style={{ fontSize: "14px", color: "#2563EB", fontWeight: 600, marginBottom: "8px" }}>
              {t.about.role}
            </p>
            <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.6 }}>
              {t.about.bio[0]}
            </p>
          </div>

          {/* LinkedIn button */}
          <a
            href="https://www.linkedin.com/in/revenuesystem"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#0077B5",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            🔗 LinkedIn
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-card {
            flex-direction: column !important;
            padding: 32px 24px !important;
            text-align: center;
          }
          .about-card a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
