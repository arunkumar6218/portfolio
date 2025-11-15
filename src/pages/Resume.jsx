import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance of myself.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 ARUNKUMAR!
            </h3>
            <p style={{ margintop: 10, fontSize: 15, color: "#ccc" }}>
              Bachelor of Science (B.Sc) - Information Technology
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Coimbatore, Tamilnadu, India
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📧 arunkumarm6218@gmail.com | 📞 +91 9150806218
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📞 +91 9150806218
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 360,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
             Enthusiastic Front-End Developer with good skills in HTML, CSS, JavaScript, React, MySqL and Python. 
             Eager to expand expertise in back-end and database knowledges to become a full-stack developer. 
             Passionate about building responsive, user-friendly web applications and learning modern frameworks to deliver complete end-to-end solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>Bachelor of Science (B.Sc) - Information Technology</strong> — SKACAS
              (Sri Krishna Adithya College of Arts And Science), 2022-2025 <br />
              <span style={{ color: "#aaa" }}>GPA: 7.0</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>HSC (12th) — Shree Baldevdas Kikani Vidhyamandhir Hr Sec School</strong> (Tamil Nadu
              Board, 2021-2022) <br />
              <span style={{ color: "#aaa" }}>Percentage: 55.6%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>SSLC (10th) — Shree Baldevdas Kikani Vidhyamandhir Hr Sec School</strong> (Tamil Nadu
              Board, 2019-2020)
              <br />
              <span style={{ color: "#aaa" }}>Percentage: 63.2%</span>
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>💼 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ Smart Time Table Generator using GA</li>
            <li>2️⃣ Portfolio Website - React</li>
            <li>3️⃣ Tic Tac Toe</li>
            <li>4️⃣ E-commerce Website (In Progress)</li>
          </ul>
        </motion.div>

        {/* Skills */}
       {/* Skills Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  style={{ marginTop: 40 }}
>
  <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>⚙️ SKILLS</h4>

  {/* Technical Skills */}
  <div style={{ marginBottom: 30 }}>
    <h5 style={{ color: "#00b4ff", marginBottom: 10 }}>💻 Technical Skills</h5>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {[
        "Python",
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Django",
        "Bootstrap",
        "MySQL",
        "PostgreSQL",
      ].map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "6px 12px",
            borderRadius: 8,
            fontSize: 13,
            color: "#ccc",
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>

  {/* Tools & Design */}
  <div style={{ marginBottom: 30 }}>
    <h5 style={{ color: "#00b4ff", marginBottom: 10 }}>🧰 Tools & Design</h5>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {[
        "Figma",
        "Canva",
        "Framer",
        "Wireframe",
        "Prototype",
        "VS Code",
        "Git",
        "GitHub",
      ].map((tool) => (
        <motion.span
          key={tool}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "6px 12px",
            borderRadius: 8,
            fontSize: 13,
            color: "#ccc",
          }}
        >
          {tool}
        </motion.span>
      ))}
    </div>
  </div>

  {/* Soft Skills */}
  <div>
    <h5 style={{ color: "#00b4ff", marginBottom: 10 }}>🤝 Soft Skills</h5>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {[
        "Problem Solving",
        "Teamwork",
        "Adaptability",
        "Creativity",
        "Time Management",
        "Resilience",
        "Critical Thinking",
        "Self-Motivated",
        "Curiosity",
      ].map((soft) => (
        <motion.span
          key={soft}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "6px 12px",
            borderRadius: 8,
            fontSize: 13,
            color: "#ccc",
          }}
        >
          {soft}
        </motion.span>
      ))}
    </div>
  </div>
</motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/arunkumar6218" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/arunkumarm6218" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/Arunkumar.pdf"
            title="Arunkumar's Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/Arunkumar.pdf"
          download
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          style={{
            textAlign: "center",
            display: "inline-block",
            marginTop: 20,
            background: "#00b4ff",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
            letterSpacing: 0.3,
          }}
        >
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
