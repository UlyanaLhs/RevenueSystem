import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
const cvScreeningImg = "/assets/cv-screening.png";
const invoiceTrackerImg = "/assets/invoice-tracker.png";
const leadQualImg = "/assets/lead-qual.png";
const coldOutreachImg = "/assets/cold-outreach.png";
const clientLifecycleImg = "/assets/client-lifecycle.png";
const churnRetentionImg = "/assets/churn-retention.png";

const CARD_META = [
  {
    badgeColor: "#7C3AED",
    screenshotAttr: "cv-screening",
    image: cvScreeningImg,
  },
  {
    badgeColor: "#059669",
    screenshotAttr: "invoice-tracker",
    image: invoiceTrackerImg,
  },
  {
    badgeColor: "#2563EB",
    screenshotAttr: "lead-qualification",
    image: leadQualImg,
  },
  {
    badgeColor: "#DC2626",
    screenshotAttr: "cold-outreach",
    image: coldOutreachImg,
  },
  {
    badgeColor: "#D97706",
    screenshotAttr: "client-lifecycle",
    image: clientLifecycleImg,
  },
  {
    badgeColor: "#7C3AED",
    screenshotAttr: "churn-retention",
    image: churnRetentionImg,
  },
];

export function HowIBuild() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#0F1C2E", padding: "80px 0" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "white",
              marginBottom: "8px",
            }}
          >
            {t.howIBuild.title}
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.6,
              whiteSpace: "pre-line",
            }}
          >
            {t.howIBuild.subtitle}
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
          className="how-i-build-grid"
        >
          {t.howIBuild.cards.map((card, i) => {
            const meta = CARD_META[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="how-i-build-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "transform 0.25s, border-color 0.25s",
                }}
              >
                {/* Screenshot area */}
                <div
                  data-screenshot={meta.screenshotAttr}
                  style={{
                    height: "220px",
                    background: "#1a2942",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={meta.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top left",
                    }}
                  />
                  {/* Adapted label */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      right: "12px",
                      background: "rgba(0,0,0,0.55)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "10px",
                      fontWeight: 500,
                      fontStyle: "italic",
                      padding: "3px 8px",
                      borderRadius: "99px",
                      pointerEvents: "none",
                    }}
                  >
                    Adapted and deployed for client use
                  </span>

                  {/* Category badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: meta.badgeColor,
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "99px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Content area */}
                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {card.stack.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.7)",
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "99px",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Result metric */}
                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "13px",
                      color: "#60A5FA",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {card.result}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .how-i-build-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .how-i-build-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .how-i-build-card:hover {
          transform: translateY(-4px);
          border-color: rgba(37,99,235,0.5) !important;
        }
      `}</style>
    </section>
  );
}
