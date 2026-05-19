import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ROW_COLORS = ["#2563EB", "#059669", "#7C3AED", "#D97706"];

export function TypicalProjectTimelines() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "white", padding: "80px 0" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#0F1C2E",
                marginBottom: "8px",
              }}
            >
              {t.typicalTimelines.title}
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#64748B",
              }}
            >
              {t.typicalTimelines.subtitle}
            </p>
          </motion.div>

          {t.typicalTimelines.rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="timeline-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "20px 28px",
                marginBottom: "12px",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Number circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: ROW_COLORS[i],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>

              {/* Center text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#0F1C2E",
                    marginBottom: "4px",
                  }}
                >
                  {row.name}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748B",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {row.description}
                </p>
              </div>

              {/* Timeline badge */}
              <div
                style={{
                  background: "white",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  textAlign: "center",
                  flexShrink: 0,
                  minWidth: "140px",
                }}
              >
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: ROW_COLORS[i],
                  }}
                >
                  {row.timeline}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#94A3B8",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  timeline
                </div>
              </div>
            </motion.div>
          ))}

          {/* Why box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            style={{
              background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
              border: "1px solid #BFDBFE",
              borderRadius: "12px",
              padding: "24px 28px",
              marginTop: "24px",
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: "24px", flexShrink: 0 }}>💡</span>
            <div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1D4ED8",
                  marginBottom: "6px",
                }}
              >
                {t.typicalTimelines.whyTitle}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#374151",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {t.typicalTimelines.whyBody}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .timeline-row:hover {
          border-color: #2563EB !important;
          box-shadow: 0 4px 16px rgba(37,99,235,0.08);
        }
      `}</style>
    </section>
  );
}
