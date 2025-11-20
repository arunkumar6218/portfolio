import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer - Intern",
      company: "Ether Services",
      location: "On-site",
      duration: "June 2025 - November 2025",
      description:
        "Developed end-to-end web features using Python and front-end technologies. Created APIs, connected databases, and built interactive user interfaces. Worked on debugging, testing, and improving the overall user experience.",
    },
    {
      title: "Front-End Developer - Intern",
      company: "Cognifyz Technologies",
      location: "Remote",
      duration: "August 2025 - September 2025",
      description:
        "Built responsive UI screens using HTML, CSS, JavaScript, and React. Developed reusable components, optimized performance, and ensured a smooth user experience across devices.",
    },
  ];

  return (
    <div
      id="experience"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "4rem 1rem",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          position: "relative",
          padding: "3rem 2rem",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "3rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Experience
        </h2>

        {/* --- Vertical Timeline Line --- */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "6rem",
            width: "4px",
            height: "85%",
            background: "linear-gradient(var(--accent), var(--accent-2))",
            transform: "translateX(-50%)",
            borderRadius: "10px",
            boxShadow: "0 0 15px var(--accent)",
          }}
        ></div>

        {/* Timeline Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent:
                  index % 2 === 0 ? "flex-start" : "flex-end",
                position: "relative",
              }}
            >
              {/* Dot connector */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "1rem",
                  width: "16px",
                  height: "16px",
                  background: "var(--accent)",
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 12px var(--accent)",
                }}
              ></div>

              {/* Experience Card */}
              <div
                style={{
                  width: "48%",
                  background: "rgba(255,255,255,0.05)",
                  padding: "1.6rem 2rem",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 20px rgba(0,255,200,0.12)",
                }}
              >
                <h3
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <FaBriefcase /> {exp.title}
                </h3>

                <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.4rem" }}>
                  <strong>{exp.company}</strong> — {exp.location}
                </p>

                <p style={{ color: "rgba(255,255,255,0.75)" }}>{exp.duration}</p>

                <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.4rem" }}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
