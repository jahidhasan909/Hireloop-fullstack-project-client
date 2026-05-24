"use client";

import { Card } from "@heroui/react";

/* ── Icons ─────────────────────────────────────────────────────────────────── */
const BriefcaseIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <circle cx="11" cy="13" r="3" />
    <path d="m16 17-1.5-1.5" />
  </svg>
);

const BarChartIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6"  y1="20" x2="6"  y2="16" />
  </svg>
);

const UserSearchIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="8" r="4" />
    <path d="M2 20c0-4 3.58-7 8-7" />
    <circle cx="18" cy="17" r="3" />
    <path d="m22 21-1.5-1.5" />
  </svg>
);

const StarIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────────────── */
const stats = [
  { Icon: BriefcaseIcon,  value: "50K", label: "Active Jobs" },
  { Icon: BarChartIcon,   value: "12K", label: "Companies" },
  { Icon: UserSearchIcon, value: "2M",  label: "Job Seekers" },
  { Icon: StarIcon,       value: "97%", label: "Satisfication Rate" },
];

/* ── Component ──────────────────────────────────────────────────────────────── */
export default function BannerGrid() {
  return (
    <section
      className="w-full absolute bottom-0 flex flex-col items-center"
      style={{ fontFamily: "'DM Sans', sans-serif"}}
    >
      {/* "Assisting over…" text */}
      <div className="text-center  px-4 mb-8 sm:mb-10">
        <p
          className="text-white/65 text-4xl font-light  leading-snug"
          style={{
            
            letterSpacing: "-0.01em",
            textShadow: "0 2px 30px rgba(0,0,0,0.9)",
          }}
        >
          Assisting over{" "}
          <strong className="text-white  font-bold">15,000 job seekers</strong>
          <br />
          find their dream positions.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="w-full px-3 sm:px-6 lg:px-10">
        <div className=" max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5">
          {stats.map(({ Icon, value, label }) => (
            <Card
              key={label}
              className="group cursor-default"
              style={{
                background: "rgba(10, 10, 18, 0.75)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.10)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)";
              }}
            >
              {/* Card inner content — plain div, no CardBody */}
              <div className="p-5 sm:p-6 flex flex-col gap-6">
                <span className="text-white group-hover:text-white/65 transition-colors duration-200">
                  <Icon size={25} />
                </span>
                <div>
                  <p
                    className="text-white font-black leading-none mb-1.5 tracking-tight"
                    style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.6rem)" }}
                  >
                    {value}
                  </p>
                  <p className="text-white text-xs sm:text-sm font-normal">
                    {label}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}