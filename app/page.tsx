"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const batches = [
  { label: "Batch 1", price: "$4,000", active: false },
  { label: "Batch 2", price: "$4,250", active: false },
  { label: "Batch 3", price: "$4,500", active: false },
  { label: "Batch 4", price: "$4,750", active: true },
  { label: "Batch 5", price: "$5,000", active: false },
  { label: "Batch 6", price: "$5,250", active: false },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: navScrolled ? "12px 0" : "20px 0",
          background: navScrolled ? "rgba(13,17,23,0.95)" : "transparent",
          backdropFilter: navScrolled ? "blur(12px)" : "none",
          borderBottom: navScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInDown 0.6s ease forwards" : "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#F97316",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: 900,
              }}
            >
              ₵
            </div>
            <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "white" }}>
              Sta
              <span style={{ color: "#F97316" }}>k</span>
              e
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInDown 0.6s ease 0.1s forwards" : "none",
              marginLeft: "18px",
            }}
            className="desktop-nav"
          >
            {["Properties", "Digital Assets", "Stake & Earn"].map((item) => (
              <span
                key={item}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.9rem",
                  fontWeight: 400,
                  cursor: "pointer",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInDown 0.6s ease 0.2s forwards" : "none",
              marginLeft: "auto",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              className="desktop-login"
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              Login
            </span>
            <button
              style={{
                background: "#F97316",
                color: "white",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "9px 22px",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#ea6c0a";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 25px rgba(249,115,22,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#F97316";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Sign Up
            </button>

            {/* Mobile hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0,1,2].map(i => (
                <div key={i} style={{ width: "22px", height: "2px", background: "white", borderRadius: "2px" }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={"mobile-menu" + (mobileMenuOpen ? " open" : "")}
          style={{
            background: "rgba(13,17,23,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {["Properties", "Digital Assets", "Stake & Earn", "Login"].map((item) => (
            <span key={item} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", cursor: "pointer" }}>
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            zIndex: 0,
          }}
        />
        {/* Overlay (slightly darker) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(3,37,65,0.40) 0%, rgba(13,17,23,0.75) 35%, rgba(13,17,23,0.9) 70%, rgba(13,17,23,1) 100%)",
            zIndex: 1,
          }}
        />

        {/* Hero Text Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "140px 24px 60px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
              maxWidth: "700px",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInUp 0.8s ease forwards" : "none",
            }}
          >
            Discover{" "}
            <span style={{ color: "#F97316" }}>high-growth</span>
            <br />
            property investments
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
              lineHeight: 1.65,
              maxWidth: "440px",
              marginBottom: "36px",
              opacity: mounted ? 1 : 0,
              animation: mounted ? "fadeInUp 0.8s ease 0.15s forwards" : "none",
            }}
          >
            Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.
          </p>

          <button
            style={{
              background: "radial-gradient(circle at center, #FFB07A 0%, #F97316 60%)",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "15px 34px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.25s ease",
              animation: mounted ? "fadeInUp 0.8s ease 0.3s forwards, pulseGlow 3s ease-in-out 1.5s infinite" : "none",
              opacity: mounted ? 1 : 0,
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "radial-gradient(circle at center, #ff9a4d 0%, #ea6c0a 100%)";
              btn.style.transform = "translateY(-2px)";
              btn.style.boxShadow = "0 14px 40px rgba(249,115,22,0.5)";
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget as HTMLButtonElement;
              btn.style.background = "radial-gradient(circle at center, #FFB07A 0%, #F97316 60%)";
              btn.style.transform = "translateY(0)";
              btn.style.boxShadow = "none";
            }}
          >
            Start Earning Now
            <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>→</span>
          </button>
        </div>

        {/* Bottom Hero: Property Image + Info Panel */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px 0",
            width: "100%",
          }}
        >
          <div className="hero-bottom-grid">
            {/* Property Image with Jigsaw */}
            <div
              style={{
                position: "relative",
                borderRadius: "18px",
                overflow: "visible",
                opacity: mounted ? 1 : 0,
                animation: mounted ? "slideInLeft 0.9s ease 0.4s forwards" : "none",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "18px",
                  overflow: "hidden",
                  lineHeight: 0,
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/Frame 1.png"
                  alt="Premium Property"
                  width={820}
                  height={440}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "18px" }}
                  priority
                />
                {/* Jigsaw overlay */}
                {/* Jigsaw overlay (centered, smaller) */}
                <div
                  className="jigsaw"
                  style={{
                    position: "absolute",
                    left: "56%",
                    top: "63%",
                    transform: "translate(-50%, -50%) translate(var(--jigsaw-dx, 0px), var(--jigsaw-dy, 0px))",
                    width: "177px",
                    height: "260px",
                    backgroundImage: "url('/jigsaw.png')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: 0.96,
                    borderRadius: "12px",
                    mixBlendMode: "normal",
                    pointerEvents: "none",
                    boxShadow: "0 20px 60px rgba(4,18,45,0.6)",
                  }}
                />
              </div>

              {/* Orange chevrons / arrows */}
              <div
                className="arrow-container"
                style={{
                  position: "absolute",
                  right: "-25px",
                  bottom: "85px",
                  zIndex: 20,
                  animation: "arrowBounce 1.4s ease-in-out infinite",
                  transform: "rotate(6deg)",
                  width: "320px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={300}
                  height={100}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Bottom fade for image */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "140px",
                  background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(13,17,23,1) 85%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Right info panel */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "25px",
                opacity: mounted ? 1 : 0,
                animation: mounted ? "slideInRight 0.9s ease 0.5s forwards" : "none",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: "white",
                    marginBottom: "4px",
                  }}
                >
                  Access
                  <br />
                  premium
                  <br />
                  property
                  <br />
                  ownership
                </p>
                <p
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                    fontWeight: 900,
                    color: "#F97316",
                    lineHeight: 1,
                  }}
                >
                  for $150
                </p>
              </div>

              {/* Returns card */}
              <div
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                  border: "1px solid white",
                  borderRadius: "12px",
                  padding: "12px 14px",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  transition: "padding 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, transform 0.15s ease",
                  width: "min-content",
                  minWidth: "180px",
                  transform: "translateY(-4px)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  // keep white border visible, add subtle lift and increase padding (height)
                  el.style.borderColor = "rgba(255,255,255,0.36)";
                  el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
                  el.style.padding = "16px 18px";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(255,255,255,0.28)";
                  el.style.boxShadow = "none";
                  el.style.padding = "12px 14px";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "17px",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      background: "#F97316",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "9px",
                      fontWeight: 900,
                    }}
                  >
                    ₵
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "white",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    All Time Returns
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px", flexWrap: "nowrap" }}>
                  <span
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.25rem)",
                      fontWeight: 600,
                      color: "white",
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                    }}
                  >
                    AED 165,000
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "#22c55e",
                      whiteSpace: "nowrap",
                      lineHeight: 1,
                      verticalAlign: "baseline",
                    }}
                  >
                    +111%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Progression Section */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "28px 24px 40px",
            width: "100%",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "28px 32px",
                backdropFilter: "blur(30px)",
                boxShadow: "inset 0 -6px 30px rgba(249,115,22,0.03)",
                opacity: mounted ? 1 : 0,
                animation: mounted ? "fadeInUp 0.8s ease 0.65s forwards" : "none",
                overflow: "hidden",
              }}
            >
            {/* orange glow top-left (inside glass card) */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "-40px",
                width: "340px",
                height: "220px",
                background: "radial-gradient(closest-side, rgba(249,115,22,0.55), rgba(249,115,22,0.18), transparent)",
                filter: "blur(30px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            {/* orange glow bottom-right (inside glass card) */}
            <div
              style={{
                position: "absolute",
                bottom: "-60px",
                right: "-60px",
                width: "360px",
                height: "240px",
                background: "radial-gradient(closest-side, rgba(249,115,22,0.55), rgba(249,115,22,0.18), transparent)",
                filter: "blur(30px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "22px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F97316",
                }}
              >
                Price Progression (200 Tokens)
              </span>
              <div style={{ display: "flex", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.95)",
                    color: "#6b7280",
                    border: "1px solid rgba(0,0,0,0.06)",
                    letterSpacing: "0.01em",
                  }}
                >
                  SOLD OUT 1-3
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background: "#bbf7d0",
                    color: "#166534",
                    border: "1px solid rgba(16,185,129,0.12)",
                    letterSpacing: "0.01em",
                  }}
                >
                  ACTIVE 4
                </span>
              </div>
            </div>

            {/* Batch cards */}
            <div className="batches-grid">
              {batches.map((batch, i) => (
                <div
                  key={batch.label}
                  style={{
                    background: batch.active ? "rgba(10,14,22,0.95)" : "rgba(13,17,23,0.55)",
                    border: batch.active ? "1.5px solid #F97316" : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "14px 14px",
                    transition: "all 0.2s ease",
                    cursor: "default",
                    opacity: mounted ? 1 : 0,
                    animation: mounted ? `fadeInUp 0.5s ease ${0.7 + i * 0.06}s forwards` : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!batch.active) {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.18)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!batch.active) {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: batch.active ? "#F97316" : "rgba(255,255,255,0.45)",
                      marginBottom: "6px",
                      fontWeight: 500,
                    }}
                  >
                    {batch.label}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: batch.active ? "#F97316" : "white",
                    }}
                  >
                    {batch.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* styles moved to app/globals.css */}
    </main>
  );
}
