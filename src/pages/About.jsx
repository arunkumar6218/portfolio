import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong> ARUNKUMAR!</strong><br/>
          An aspiring{" "}
          <strong>Full Stack Developer</strong> and{" "}
          <strong>Ui / Ux Designer</strong>,<br/>
          I'm a recently completed my UG degree of Bachelor of Science in Information Technology  with a passion for creative technology and user-focused design.
          As a fresher, I'm eager to begin my professional journey in the developing industry, where I can learn new methodologies and technologies.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
         I have hands-on knowledge in tools like Figma, Canva, Framer and Photoshop, and foundational understanding in programmming languages like Python, MySQL, Django, Postgre, HTML, CSS, Bootstrap, React and JavaScript.
        </p>

        <p>
           💡Skills: HTML, CSS, Bootstrap, React, JavaScript, MySQL, Postgre, Django, Python.<br/>
🧰Tools: Figma, Photoshop, Canva, VS code, Framer, Github.
        </p>

        <p>
          💼Interests: Front-End Developer, Web Developer, Software Developer, Ui Developer,  Ui/Ux Designer, Full Stack Developer.
        </p><br/>
        <p>I sincerely looking for an opportunity to growing up my career in this tech world!🌐</p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Sc in Information Technology
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Sri Krishna Adithya College of Arts And Science</strong><br/> Coimbatore, Tamilnadu, India
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                 Bharathiar University | GPA: 7.0
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 - 2025 ( Completed )</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Shree Baldevdas Kikani Vidhyamandhir Hr Sec School</strong><br/>Coimbatore, Tamilnadu, India
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  TN State Board | Percentage: 55.6%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2021 - 2022 ( Completed ) </p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Shree Baldevdas Kikani Vidhyamandhir Hr Sec School</strong><br/>Coimbatore, Tamilnadu, India
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  TN State Board | Percentage: 63.2%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2019 - 2020 ( Completed )</p>
              </div>
            </motion.div>
          </div>

          {/* --- Experience Section --- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.0, duration: 0.8 }}
  style={{ marginTop: "3rem" }}
>
  <h3
    style={{
      fontSize: "1.6rem",
      marginBottom: "1.5rem",
      background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    Experience
  </h3>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
    }}
  >
    {/* --- Experience Card 1 --- */}
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(0,255,200,0.15)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "14px",
        padding: "1.5rem 2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 15px rgba(0,255,200,0.05)",
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
      }}
    >
      <FaBriefcase size={38} color="var(--accent)" />
      <div>
        <h4
          style={{
            color: "var(--accent)",
            marginBottom: "0.4rem",
            fontSize: "1.25rem",
          }}
        >
          Full Stack Developer - Intern
        </h4>

        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            marginBottom: "0.2rem",
          }}
        >
          <strong>Ether Services</strong> - Coimbatore, Tamil Nadu
        </p>

        <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "0.2rem" }}>
          June 2025 - November 2025
        </p>

        <p style={{ color: "rgba(255,255,255,0.7)" }}>
           • Developed and maintained responsive web pages using HTML, CSS, Bootstrap, JavaScript, and React.js.<br/>
           • Integrated Python, MongoDB and SQL for backend development and database management.<br/>
           • Gained practical experience in Ai-integreted full-stack web application workflow and problem-solving.<br/>
        </p>
      </div>
    </motion.div>

    {/* --- Experience Card 2 --- */}
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(0,255,200,0.15)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "14px",
        padding: "1.5rem 2rem",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 15px rgba(0,255,200,0.05)",
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
      }}
    >
      <FaBriefcase size={38} color="var(--accent)" />
      <div>
        <h4
          style={{
            color: "var(--accent)",
            marginBottom: "0.4rem",
            fontSize: "1.25rem",
          }}
        >
          Front-End Developer - Intern
        </h4>

        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            marginBottom: "0.2rem",
          }}
        >
          <strong>Cognifyz Technologies</strong> – Remote
        </p>

        <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "0.2rem" }}>
          August 2025 - September 2025
        </p>

        <p style={{ color: "rgba(255,255,255,0.7)" }}>
          • Created and styled interactive web pages using HTML, CSS, and Bootstrap, Sass.<br/>
          • Completed assigned frontend tasks according to company standards and deadlines.<br/>
          • Improved understanding of UI/UX design and project structure in a corporate environment.<br/>
        </p>
      </div>
    </motion.div>
  </div>
</motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
