"use client";
import { useState } from "react";

export default function Home() {
  const [heroEmail, setHeroEmail] = useState("");
  const [ctaEmail, setCtaEmail] = useState("");
  const [heroSuccess, setHeroSuccess] = useState(false);
  const [ctaSuccess, setCtaSuccess] = useState(false);

  function handleSignup(email, setSuccess, setEmail) {
    if (email && email.includes("@")) {
      setSuccess(true);
      setEmail("");
    }
  }

  const features = [
    {
      title: "Schedule your week",
      desc: "Plan every training day in advance. Assign workouts to specific days and start them with one tap when the time comes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
        </svg>
      ),
    },
    {
      title: "Live session tracking",
      desc: "Run drills with a built-in timer. Log makes and attempts in real time. Every set is recorded the moment you complete it.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      title: "Track every spot",
      desc: "See your shooting percentage from every zone on the court — corner 3, wing, top of the key, mid-range, and more.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
    },
    {
      title: "Build custom workouts",
      desc: "Create workouts with any combination of drills. Choose your logging type — makes, percentage, or time-based.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      ),
    },
    {
      title: "Coach tools",
      desc: "Coaches assign workouts, track player completion, and see individual shooting splits — all from one dashboard.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: "Share with friends",
      desc: "Send workouts to your crew, see each other's sessions, and keep each other accountable with a social feed.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      ),
    },
  ];

  const steps = [
    {
      num: "1", title: "Build your workout",
      desc: "Create drills, pick court zones, set your logging type.",
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    },
    {
      num: "2", title: "Schedule your week",
      desc: "Assign workouts to days and plan sessions ahead of time.",
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    },
    {
      num: "3", title: "Run the session",
      desc: "Log every set in real time with the built-in timer and input.",
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    },
    {
      num: "4", title: "See your growth",
      desc: "Review your shot chart improving across every zone week over week.",
      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E85D04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    },
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", borderBottom: "1px solid #eee" }}>
        <div style={{ fontSize: "22px", fontWeight: "600", color: "#E85D04" }}>HoopLog</div>
        <button onClick={() => document.getElementById("hero-email").focus()}
          style={{ background: "#E85D04", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", cursor: "pointer" }}>
          Join Waitlist
        </button>
      </nav>

      {/* Hero */}
      <section style={{ padding: "5rem 2rem 4rem", textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ fontSize: "13px", fontWeight: "600", color: "#E85D04", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "1rem" }}>
          Built for serious players
        </div>
        <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#1A1A2E", lineHeight: "1.1", marginBottom: "1.25rem", letterSpacing: "-1px" }}>
          Track your game.<br />
          <span style={{ color: "#E85D04" }}>Prove your progress.</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", marginBottom: "2.5rem", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
          HoopLog is the first workout tracker built exclusively for basketball players. Log your drills, track your shooting by zone, and watch yourself improve — session by session.
        </p>
        <div style={{ display: "flex", gap: "10px", maxWidth: "440px", margin: "0 auto 1rem" }}>
          <input id="hero-email" type="email" value={heroEmail} onChange={e => setHeroEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ flex: 1, padding: "12px 16px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "15px", outline: "none" }} />
          <button onClick={() => handleSignup(heroEmail, setHeroSuccess, setHeroEmail)}
            style={{ background: "#E85D04", color: "#fff", border: "none", padding: "12px 22px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
            Join Waitlist
          </button>
        </div>
        {heroSuccess && <p style={{ fontSize: "14px", color: "#2D6A4F", marginBottom: "8px" }}>You're on the list. We'll be in touch.</p>}
        <p style={{ fontSize: "13px", color: "#999" }}>Free to join. No credit card required.</p>
      </section>

      {/* Features */}
      <section style={{ background: "#f9f9f9", padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", color: "#E85D04", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.5rem" }}>Core features</div>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1A1A2E", marginBottom: "3rem" }}>Everything in one place</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #eee", borderRadius: "12px", padding: "1.5rem" }}>
                <div style={{ width: "44px", height: "44px", background: "#FFF3E0", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#1A1A2E", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.6" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", fontWeight: "600", color: "#E85D04", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "0.5rem" }}>How it works</div>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#1A1A2E", marginBottom: "3rem" }}>Simple as 1, 2, 3, 4</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "0 0.5rem" }}>
                <div style={{ width: "44px", height: "44px", background: "#1A1A2E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontSize: "16px", fontWeight: "600", color: "#fff" }}>
                  {s.num}
                </div>
                <div style={{ width: "56px", height: "56px", background: "#FFF3E0", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
                  {s.icon}
                </div>
                <h4 style={{ fontSize: "15px", fontWeight: "600", color: "#1A1A2E", marginBottom: "0.5rem" }}>{s.title}</h4>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "#1A1A2E", padding: "3rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          {[["26M+", "basketball players in the US"], ["0", "apps built for individual training"], ["Free", "to start, always"]].map(([n, l], i) => (
            <div key={i}>
              <div style={{ fontSize: "36px", fontWeight: "700", color: "#E85D04" }}>{n}</div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#1A1A2E", marginBottom: "1rem" }}>Your grind deserves a record.</h2>
        <p style={{ fontSize: "16px", color: "#555", marginBottom: "2rem", lineHeight: "1.6" }}>
          Stop relying on memory. Start tracking what matters. Join the waitlist and be first when HoopLog drops.
        </p>
        <div style={{ display: "flex", gap: "10px", maxWidth: "420px", margin: "0 auto" }}>
          <input id="cta-email" type="email" value={ctaEmail} onChange={e => setCtaEmail(e.target.value)}
            placeholder="Your email"
            style={{ flex: 1, padding: "12px 16px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "15px", outline: "none" }} />
          <button onClick={() => handleSignup(ctaEmail, setCtaSuccess, setCtaEmail)}
            style={{ background: "#E85D04", color: "#fff", border: "none", padding: "12px 22px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
            Get Early Access
          </button>
        </div>
        {ctaSuccess && <p style={{ fontSize: "14px", color: "#2D6A4F", marginTop: "8px" }}>You're in. We'll reach out soon.</p>}
      </section>

      {/* Footer */}
      <footer style={{ padding: "1.5rem 2rem", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "16px", fontWeight: "600", color: "#E85D04" }}>HoopLog</div>
        <div style={{ fontSize: "13px", color: "#999" }}>© 2026 HoopLog. All rights reserved.</div>
      </footer>

    </main>
  );
}