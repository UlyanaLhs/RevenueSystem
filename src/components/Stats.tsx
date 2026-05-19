import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

function useCountUp(target: string, duration: number, triggered: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!triggered) return;

    const prefix = target.startsWith("$") ? "$" : "";
    const suffix = target.endsWith("%") ? "%" : target.endsWith("+") ? "+" : "";
    const raw = target.replace(/[$+%]/g, "").replace("K", "");
    const isK = target.includes("K");
    const numeric = parseFloat(raw);

    if (isNaN(numeric)) {
      setDisplay(target);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * numeric);
      setDisplay(`${prefix}${current}${isK ? "K" : ""}${suffix}`);
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return display;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const display = useCountUp(value, 1500, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center" data-testid={`stat-item-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <span
        className="text-4xl md:text-5xl font-extrabold tracking-tight"
        style={{ color: "#2563EB" }}
      >
        {display}
      </span>
      <span className="mt-2 text-sm md:text-base text-slate-500 font-medium">{label}</span>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section style={{ backgroundColor: "#F8FAFC", paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {t.stats.items.map((item) => (
            <StatItem key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
