import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

type CaseCard = {
  tag: string;
  accent: string;
  title: string;
  client: string;
  metric: string;
  metricLabel: string;
  stats: { value: string; label: string }[];
  problem: string;
  solution: string;
  stack: string[];
};

function CaseCardItem({
  card,
  index,
  problemLabel,
  solutionLabel,
  inView,
}: {
  card: CaseCard;
  index: number;
  problemLabel: string;
  solutionLabel: string;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(card.accent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#fff",
        borderRadius: "14px",
        border: "1px solid #E2E8F0",
        borderTop: `4px solid ${card.accent}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 16px 40px rgba(${rgb}, 0.14), 0 0 0 1px rgba(${rgb}, 0.10)`
          : "0 2px 10px rgba(15,28,46,0.06)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Tinted header strip */}
      <div
        style={{
          backgroundColor: `rgba(${rgb}, 0.05)`,
          padding: "20px 24px 16px",
        }}
      >
        {/* Tag pill */}
        <span
          style={{
            display: "inline-block",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.07em",
            color: card.accent,
            backgroundColor: `rgba(${rgb}, 0.12)`,
            padding: "3px 10px",
            borderRadius: "100px",
            marginBottom: "12px",
          }}
        >
          {card.tag}
        </span>

        {/* Title */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#0F1C2E",
            lineHeight: 1.3,
            marginBottom: "4px",
          }}
        >
          {card.title}
        </h3>

        {/* Client name */}
        <p
          style={{
            fontSize: "13px",
            color: "#94A3B8",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          {card.client}
        </p>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", gap: "20px", flexGrow: 1 }}>

        {/* Main metric */}
        <div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: card.accent,
              lineHeight: 1,
            }}
          >
            {card.metric}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#94A3B8",
              marginTop: "4px",
            }}
          >
            {card.metricLabel}
          </div>
        </div>

        {/* Secondary stats row */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#F8FAFC",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {card.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "8px 12px",
                textAlign: "center",
                borderLeft: i > 0 ? "1px solid #E2E8F0" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F1C2E",
                  lineHeight: 1.2,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#94A3B8",
                  marginTop: "2px",
                  lineHeight: 1.3,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Problem block */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#DC2626",
              marginBottom: "6px",
            }}
          >
            {problemLabel}
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#64748B",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {card.problem}
          </p>
        </div>

        {/* Solution block */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "#059669",
              marginBottom: "6px",
            }}
          >
            {solutionLabel}
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "#64748B",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {card.solution}
          </p>
        </div>

        {/* Stack tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap" as const,
            gap: "6px",
            marginTop: "auto",
            paddingTop: "4px",
          }}
        >
          {card.stack.map((tool, i) => (
            <span
              key={i}
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#64748B",
                backgroundColor: "#F1F5F9",
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudies() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cases" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#0F1C2E", marginBottom: "12px" }}
          >
            {t.cases.title}
          </h2>
          <p
            style={{
              color: "#64748B",
              fontSize: "16px",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {t.cases.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cases.cards.map((card, index) => (
            <CaseCardItem
              key={index}
              card={card}
              index={index}
              problemLabel={t.cases.problemLabel}
              solutionLabel={t.cases.solutionLabel}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
