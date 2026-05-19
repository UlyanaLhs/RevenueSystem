import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Search, Settings, ShieldCheck, Zap, Rocket } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const icons = [
    <Search className="w-8 h-8 text-primary" />,
    <Settings className="w-8 h-8 text-primary" />,
    <Zap className="w-8 h-8 text-primary" />,
    <ShieldCheck className="w-8 h-8 text-primary" />,
    <Rocket className="w-8 h-8 text-primary" />
  ];

  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-[32px] font-bold tracking-tight text-foreground mb-2">
              {t.services.comparison.title}
            </h2>
            <p className="text-[15px] text-[#64748B]">
              {t.services.comparison.subtitle}
            </p>
          </motion.div>

          {/* Scarcity Banner */}
          <div
            style={{
              background: "#FEF3C7",
              border: "1px solid #FCD34D",
              borderRadius: "12px",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              maxWidth: "800px",
              margin: "0 auto 32px",
              textAlign: "left",
            }}
          >
            <span style={{ fontSize: "24px", flexShrink: 0 }}>🔥</span>
            <p style={{ fontSize: "14px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
              <strong>{t.scarcityBanner.strong}</strong>
              {t.scarcityBanner.body}
            </p>
          </div>

          {/* Urgency Notice */}
          <div
            style={{
              background: "#FFF7ED",
              border: "1px solid #FED7AA",
              borderRadius: "12px",
              padding: "14px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              maxWidth: "800px",
              margin: "0 auto 24px",
            }}
          >
            <span style={{ fontSize: "20px", flexShrink: 0 }}>⚡</span>
            <p style={{ fontSize: "13px", color: "#92400E", margin: 0, lineHeight: 1.6 }}>
              <strong>{t.urgencyNotice.strong}</strong>
              {t.urgencyNotice.body}
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#0F1C2E", color: "#FFFFFF" }}>
                  <th style={{ backgroundColor: "#0F1C2E", padding: "16px 20px", minWidth: "180px" }} />
                  {t.services.comparison.columns.map((col, colIdx) => {
                    const isPopular = col.popular;
                    return (
                      <th
                        key={colIdx}
                        style={{
                          padding: "16px 20px",
                          fontSize: "14px",
                          fontWeight: 700,
                          backgroundColor: isPopular ? "#2563EB" : "#0F1C2E",
                          borderLeft: isPopular ? "2px solid #2563EB" : "none",
                          borderRight: isPopular ? "2px solid #2563EB" : "none",
                          minWidth: "170px",
                        }}
                      >
                        {isPopular ? (
                          <span
                            style={{
                              display: "inline-block",
                              backgroundColor: "#FFFFFF",
                              color: "#2563EB",
                              borderRadius: "999px",
                              fontSize: "10px",
                              fontWeight: 700,
                              padding: "3px 10px",
                              marginBottom: "8px",
                            }}
                          >
                            {t.services.comparison.mostPopularBadge}
                          </span>
                        ) : null}
                        <div>{col.title}</div>
                        <div style={{ opacity: 0.8, fontSize: "12px", marginTop: "4px" }}>{col.price}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {t.services.comparison.rows.map((row, rowIdx) => {
                  const isAlt = rowIdx % 2 === 1;
                  return (
                    <tr key={rowIdx} style={{ backgroundColor: isAlt ? "#FAFBFF" : "#FFFFFF" }}>
                      <td
                        style={{
                          backgroundColor: "#F8FAFC",
                          fontWeight: 600,
                          fontSize: "13px",
                          color: "#0F1C2E",
                          padding: "14px 20px",
                          minWidth: "180px",
                          textAlign: "left",
                        }}
                      >
                        {row.feature}
                      </td>
                      {row.values.map((value, valueIdx) => {
                        const isPopular = valueIdx === 2;
                        const isCheck = value === "✓";
                        const isDash = value === "—";
                        return (
                          <td
                            key={valueIdx}
                            style={{
                              padding: "14px 20px",
                              textAlign: "center",
                              fontSize: isCheck ? "16px" : "13px",
                              fontWeight: isCheck ? 700 : 500,
                              color: isCheck ? "#059669" : isDash ? "#CBD5E1" : "#374151",
                              backgroundColor: isPopular ? "#EFF6FF" : "transparent",
                              borderLeft: isPopular ? "2px solid #2563EB" : "none",
                              borderRight: isPopular ? "2px solid #2563EB" : "none",
                            }}
                          >
                            {value}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                <tr>
                  <td style={{ backgroundColor: "#F8FAFC", padding: "14px 20px" }} />
                  {t.services.comparison.ctas.map((cta, ctaIdx) => {
                    const isPopular = ctaIdx === 2;
                    return (
                      <td
                        key={ctaIdx}
                        style={{
                          textAlign: "center",
                          padding: "14px 20px",
                          backgroundColor: isPopular ? "#EFF6FF" : "#FFFFFF",
                          borderLeft: isPopular ? "2px solid #2563EB" : "none",
                          borderRight: isPopular ? "2px solid #2563EB" : "none",
                        }}
                      >
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSc2ECfZ1SuienMjBnYWsmsWxygnfN7cJV6fYYCw9gTOwxkcmg/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            padding: "10px 14px",
                            fontSize: "13px",
                            fontWeight: 700,
                            border: "1px solid #2563EB",
                            color: cta.variant === "primary" ? "#FFFFFF" : cta.color,
                            backgroundColor: cta.variant === "primary" ? "#2563EB" : "#FFFFFF",
                          }}
                        >
                          {cta.label}
                        </a>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {t.services.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all hover:border-primary/20 flex flex-col relative overflow-hidden"
            >
              {card.mostPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    backgroundColor: "#2563EB",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    padding: "4px 12px",
                    borderRadius: "100px",
                  }}
                >
                  {t.services.mostPopularLabel}
                </div>
              )}

              <div className="mb-6 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                {icons[index]}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground pr-4 mb-1">
                {card.title}
              </h3>

              {card.popularSubtitle && (
                <p style={{ fontSize: "13px", color: "#64748B", marginBottom: "12px" }}>
                  {card.popularSubtitle}
                </p>
              )}

              <div className="mb-4 self-start">
                <div className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-semibold text-foreground">
                  {card.price}
                </div>
                {card.subtext ? (
                  <p style={{ fontSize: "12px", color: "#94A3B8", marginTop: "6px" }}>
                    {card.subtext}
                  </p>
                ) : null}
              </div>

              {card.paymentNote ? (
                <p style={{ fontSize: "13px", color: "#059669", margin: "4px 0 12px", fontWeight: 500 }}>
                  {card.paymentNote}
                </p>
              ) : (
                <div
                  style={{
                    background: card.paymentBadge.background,
                    border: card.paymentBadge.border,
                    borderRadius: "8px",
                    padding: "10px 14px",
                    margin: "12px 0",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: card.paymentBadge.color,
                  }}
                >
                  <span>{card.paymentBadge.icon}</span>
                  <span>{card.paymentBadge.text}</span>
                </div>
              )}

              <p className="text-muted-foreground leading-relaxed">
                {card.desc}
              </p>

              {/* Value Stack */}
              {card.valueStack && (
                <div
                  style={{
                    background: "#F8FAFC",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    margin: "16px 0",
                    fontSize: "13px",
                  }}
                >
                  <p style={{ fontWeight: 700, color: "#374151", marginBottom: "8px" }}>
                    {card.valueStack.label}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 10px", display: "flex", flexDirection: "column", gap: "3px" }}>
                    {card.valueStack.items.map((item, i) => (
                      <li key={i} style={{ color: "#64748B" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div style={{ height: "1px", backgroundColor: "#E2E8F0", margin: "8px 0" }} />
                  <p style={{ color: "#94A3B8", textDecoration: "line-through", marginBottom: "2px" }}>
                    {card.valueStack.totalLabel} {card.valueStack.totalValue}
                  </p>
                  <p style={{ color: "#2563EB", fontWeight: 700 }}>
                    {card.valueStack.investLabel} {card.valueStack.investValue}
                  </p>
                </div>
              )}

              {/* Divider */}
              <div style={{ height: "1px", backgroundColor: "#E2E8F0", margin: "16px 0" }} />

              {/* What's included */}
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#2563EB",
                  marginBottom: "10px",
                }}
              >
                {t.services.includedLabel}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
                {card.included.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "13px",
                      color: "#374151",
                      lineHeight: 1.8,
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "#059669", fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Bonus stack */}
              {(card as any).bonuses && (
                <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #E2E8F0" }}>
                  <p style={{ fontSize: "11px", fontWeight: 700, color: "#059669", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                    {(card as any).bonuses.label}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 8px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    {(card as any).bonuses.items.map((item: string, i: number) => (
                      <li key={i} style={{ fontSize: "13px", color: "#374151", lineHeight: 1.8, display: "flex", gap: "8px" }}>
                        <span style={{ color: "#059669", fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: "13px", fontWeight: 700, color: "#059669", margin: 0 }}>
                    {(card as any).bonuses.totalText}
                  </p>
                </div>
              )}

              {/* Footnote */}
              {card.footnote && (
                card.footnote.startsWith("🛡️") ? (
                  <div
                    style={{
                      backgroundColor: "#F0FDF4",
                      border: "1px solid #BBF7D0",
                      borderRadius: "10px",
                      padding: "14px 18px",
                      marginBottom: "16px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#065F46",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {card.footnote}
                    </p>
                  </div>
                ) : (
                  <p
                    style={{
                      fontSize: "13px",
                      fontStyle: "italic",
                      color: card.footnoteColor || "#94A3B8",
                      marginBottom: "16px",
                    }}
                  >
                    {card.footnote}
                  </p>
                )
              )}

              <a
                href={card.linkHref || "#contact"}
                target={card.linkTarget || "_self"}
                rel={card.linkTarget === "_blank" ? "noreferrer" : undefined}
                className="inline-flex items-center text-sm transition-colors mt-auto group-hover:gap-2"
                style={{
                  color: card.linkColor || "#2563EB",
                  fontWeight: card.linkWeight || 700,
                }}
              >
                {card.link}
              </a>
            </motion.div>
          ))}
        </div>
        </div>

        <div style={{ backgroundColor: "#F8FAFC", padding: "64px 0" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px", color: "#0F1C2E" }}>
              {t.services.guarantees.title}
            </h3>
            <p style={{ color: "#64748B", fontSize: "15px", marginBottom: "32px" }}>
              {t.services.guarantees.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.services.guarantees.cards.map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(15,28,46,0.06)",
                  transition: "transform .2s ease, box-shadow .2s ease",
                }}
                className="hover:-translate-y-[3px] hover:shadow-[0_8px_18px_rgba(15,28,46,0.12)]"
              >
                <div style={{ fontSize: "32px", lineHeight: 1 }}>{card.icon}</div>
                <h4 style={{ fontSize: "18px", fontWeight: 700, color: "#0F1C2E", margin: "12px 0 8px" }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: "14px", color: "#64748B", lineHeight: 1.7, marginBottom: "16px", whiteSpace: "pre-line" }}>
                  {card.text}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    background: card.tagBg,
                    color: card.tagColor,
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "99px",
                  }}
                >
                  {card.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10">
          <div
            style={{
              background: "linear-gradient(135deg, #0F1C2E, #1e3a5f)",
              borderRadius: "16px",
              padding: "32px 40px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          >
            <div>
              <span
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: 700,
                  borderRadius: "99px",
                  padding: "4px 12px",
                }}
              >
                {t.services.auditToRetainer.tag}
              </span>
              <h3 style={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 700, margin: "10px 0 8px" }}>
                {t.services.auditToRetainer.title}
              </h3>
              <p style={{ color: "#FFFFFF", opacity: 0.8, fontSize: "14px", lineHeight: 1.7, maxWidth: "520px", whiteSpace: "pre-line" }}>
                {t.services.auditToRetainer.description}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4">
                <div>
                  <p style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 700, lineHeight: 1.1 }}>$997</p>
                  <p style={{ color: "#FFFFFF", opacity: 0.6, fontSize: "12px" }}>{t.services.auditToRetainer.statStart}</p>
                </div>
                <div style={{ color: "#FFFFFF", opacity: 0.4, fontWeight: 700 }}>+</div>
                <div>
                  <p style={{ color: "#60A5FA", fontSize: "28px", fontWeight: 700, lineHeight: 1.1 }}>$1,200/mo</p>
                  <p style={{ color: "#FFFFFF", opacity: 0.6, fontSize: "12px" }}>{t.services.auditToRetainer.statGrow}</p>
                </div>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2ECfZ1SuienMjBnYWsmsWxygnfN7cJV6fYYCw9gTOwxkcmg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  color: "#0F1C2E",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  fontSize: "14px",
                  marginTop: "16px",
                }}
              >
                {t.services.auditToRetainer.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
