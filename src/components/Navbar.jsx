import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certifications", to: "/certificates" },
  { label: "Resume", to: "/resume" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [fontIndex, setFontIndex] = useState(0);

  // 🎨 Fonts for logo animation
  const fonts = [
    "'Poppins', sans-serif",
    "'Orbitron', sans-serif",
    "'Abril Fatface', cursive",
    "'Bebas Neue', sans-serif",
    "'Caveat', cursive",
    "'Merriweather', serif",
    "'Pacifico', cursive",
    "'Exo 2', sans-serif",
  ];

  // 🔁 Cycle fonts while hovering
  useEffect(() => {
    let interval;
    if (isHovering) {
      interval = setInterval(() => {
        setFontIndex((prev) => (prev + 1) % fonts.length);
      }, 250);
    } else {
      setFontIndex(0); // reset to first font
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.8rem 2rem",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* -------- LOGO -------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
        }}
      >
        <motion.div
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          style={{
            fontWeight: "bold",
            fontSize: "1.6rem",
            color: "var(--accent)",
            cursor: "pointer",
            width: "40px",
            textAlign: "center",
            fontFamily: fonts[fontIndex],
            transition: "font-family 0.2s ease, transform 0.2s ease",
          }}
          whileHover={{
            scale: 1.15,
            textShadow: "0 0 10px var(--accent)",
          }}
        >
          AK
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            Developer \ Designer
          </span>
        </div>
      </div>

      {/* -------- HAMBURGER (Mobile) -------- */}
      <motion.div
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          width: "35px",
          height: "30px",
        }}
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
            backgroundColor: isOpen ? "var(--accent)" : "white",
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            height: "3px",
            borderRadius: "2px",
            marginBottom: "5px",
            backgroundColor: "white",
          }}
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            height: "3px",
            borderRadius: "2px",
            marginBottom: "5px",
            backgroundColor: "white",
          }}
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
            backgroundColor: isOpen ? "var(--accent)" : "white",
          }}
          transition={{ duration: 0.3 }}
          style={{
            width: "100%",
            height: "3px",
            borderRadius: "2px",
            backgroundColor: "white",
          }}
        />
      </motion.div>

      {/* -------- NAV LINKS (Desktop) -------- */}
      <div
        className="nav-links d-none d-lg-flex"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.8rem",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: 500,
              fontSize: "0.95rem",
            }}
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      {/* -------- MOBILE MENU -------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav d-lg-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                end
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.1rem",
                  margin: "0.6rem 0",
                }}
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ RESPONSIVE CSS */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@700&family=Orbitron:wght@700&family=Pacifico&family=Poppins:wght@600&display=swap');

        @media (max-width: 992px) {
          .hamburger {
            display: flex !important;
          }
          .nav-links {
            display: none !important;
          }
          .navbar {
            padding: 0.6rem 1rem;
          }
        }

        @media (max-width: 576px) {
          .navbar {
            padding: 0.5rem 0.8rem;
          }
        }
        `}
      </style>
    </nav>
  );
}
