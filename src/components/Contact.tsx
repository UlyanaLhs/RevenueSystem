import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center border border-border rounded-2xl p-8 md:p-16 bg-muted/10 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(#2563EB15_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t.contact.subtext}
            </p>

            {/* Guarantee block */}
            <div
              style={{
                backgroundColor: "#F0FDF4",
                border: "1px solid #BBF7D0",
                borderRadius: "10px",
                padding: "14px 18px",
                marginBottom: "24px",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#065F46",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {t.contact.guarantee}
              </p>
            </div>

            {/* Contact scarcity block */}
            <div
              style={{
                backgroundColor: "#0F1C2E",
                borderRadius: "12px",
                padding: "16px 20px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: "20px", flexShrink: 0 }}>📅</span>
              <p style={{ fontSize: "13px", color: "#FFFFFF", margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: "#FFFFFF" }}>{t.contactScarcity.strong}</strong>
                {t.contactScarcity.body}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 shadow-md" asChild>
                {/* [YOUR_TELEGRAM_LINK] */}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc2ECfZ1SuienMjBnYWsmsWxygnfN7cJV6fYYCw9gTOwxkcmg/viewform" target="_blank" rel="noopener noreferrer">
                  {t.contact.btnPrimary}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 bg-white" asChild>
                {/* [YOUR_TELEGRAM_LINK] */}
                <a href="https://t.me/revenue_os" target="_blank" rel="noopener noreferrer">
                  {t.contact.btnSecondary}
                </a>
              </Button>
            </div>

            <p style={{ fontSize: "13px", color: "#94A3B8", marginBottom: "24px" }}>
              {t.contact.microCopy}
            </p>

            <a
              href={`mailto:${t.contact.email}`}
              className="text-sm font-medium text-muted-foreground no-underline hover:underline"
            >
              {t.contact.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
