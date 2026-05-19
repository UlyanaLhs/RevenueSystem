import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function DigitalProducts() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="digital-products" ref={ref} style={{ backgroundColor: "#F8FAFC", padding: "80px 0" }}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 4vw, 32px)",
              fontWeight: 700,
              color: "#0F1C2E",
              marginBottom: "12px",
            }}
          >
            {t.digitalProducts.title}
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#64748B",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {t.digitalProducts.subtitle}
          </p>
        </motion.div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            maxWidth: "500px",
            margin: "0 auto",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {t.digitalProducts.platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              platform={platform}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformCard({
  platform,
  index,
  inView,
}: {
  platform: { icon: string; name: string; sub: string; btn: string; href: string };
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 200px",
        maxWidth: "220px",
        backgroundColor: "#fff",
        border: `1px solid ${hovered ? "#2563EB" : "#E2E8F0"}`,
        borderRadius: "12px",
        padding: "24px",
        textAlign: "center",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 16px rgba(37,99,235,0.1)" : "0 1px 4px rgba(15,28,46,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ fontSize: "28px" }}>{platform.icon}</span>
      <p style={{ fontSize: "16px", fontWeight: 700, color: "#0F1C2E", margin: 0 }}>
        {platform.name}
      </p>
      <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>
        {platform.sub}
      </p>
      <a
        href={platform.href}
        style={{
          marginTop: "8px",
          display: "inline-block",
          fontSize: "13px",
          fontWeight: 600,
          color: "#2563EB",
          border: "1px solid #2563EB",
          borderRadius: "6px",
          padding: "6px 16px",
          textDecoration: "none",
          transition: "background-color 0.15s",
          backgroundColor: hovered ? "#EFF6FF" : "transparent",
        }}
      >
        {platform.btn}
      </a>
    </motion.div>
  );
}
