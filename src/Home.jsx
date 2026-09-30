import { Link } from "react-router-dom";
import logo from "./assets/upasthiti-logo.jpeg";
import "./App.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="brand">
          <img src={logo} alt="Upasthiti Logo" />

          <div className="brand-text">
            <h2>Upasthiti</h2>
            <p>Smart Attendance. Secure Presence.</p>
          </div>
        </div>

        <nav>
          <a href="#home" className="active-nav">
            Home
          </a>

          <a href="#features">
            Features
          </a>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#contact">
            Contact Us
          </a>

          <Link to="/organization" className="portal-btn">
            Portal <span>→</span>
          </Link>
        </nav>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        {/* Background decorations */}

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="hero-glow glow-three"></div>

        <div className="floating-dot dot-one"></div>
        <div className="floating-dot dot-two"></div>
        <div className="floating-dot dot-three"></div>

        <div className="hero-content">

          <div className="tagline">
            SMART ATTENDANCE MANAGEMENT
          </div>

          <h1>
            Smart Attendance.
            <br />
            <span>Secure Presence.</span>
          </h1>

          <p>
            Upasthiti is a next-generation attendance and event
            management platform designed to help organizations manage
            attendance, access control, events and analytics in one
            secure platform.
          </p>

          <div className="hero-buttons">

            <Link
              to="/organization"
              className="primary-btn"
            >
              Get Started
              <span>→</span>
            </Link>

            <a
              href="#features"
              className="secondary-btn"
            >
              <span className="play-circle">▶</span>
              Learn More
            </a>

          </div>


          {/* TRUST BADGES */}

          <div className="trust-row">

            <div className="trust-item">
              <span className="trust-icon green">
                ✓
              </span>

              Secure
            </div>

            <div className="trust-item">
              <span className="trust-icon blue">
                ●
              </span>

              Easy to Use
            </div>

            <div className="trust-item">
              <span className="trust-icon purple">
                ▥
              </span>

              Real-time Analytics
            </div>

          </div>

        </div>


        {/* ================= DASHBOARD ================= */}

        <div className="hero-visual">

          <div className="visual-glow"></div>

          {/* Decorative ring */}

          <div className="visual-ring"></div>

          {/* Laptop */}

          <div className="laptop">

            <div className="laptop-top">

              <span>
                ◉ Upasthiti
              </span>

              <span className="laptop-search">
                Attendance Overview
              </span>

            </div>


            <div className="laptop-screen">

              <div className="screen-heading">

                <strong>
                  Attendance Overview
                </strong>

                <span>
                  This Week ▾
                </span>

              </div>


              {/* GRAPH */}

              <div className="graph">

                <div
                  className="bar"
                  style={{ height: "38%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "55%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "45%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "68%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "58%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "82%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "70%" }}
                ></div>

                <div
                  className="bar"
                  style={{ height: "92%" }}
                ></div>

              </div>


              {/* MINI DASHBOARD */}

              <div className="mini-cards">

                <div className="mini-card">

                  <span className="mini-icon blue">
                    ●
                  </span>

                  <div>
                    <small>Total Users</small>
                    <strong>1,248</strong>
                  </div>

                </div>


                <div className="mini-card">

                  <span className="mini-icon pink">
                    □
                  </span>

                  <div>
                    <small>Events</small>
                    <strong>32</strong>
                  </div>

                </div>


                <div className="mini-card">

                  <span className="mini-icon green">
                    ✓
                  </span>

                  <div>
                    <small>Active Today</small>
                    <strong>892</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* FLOATING ATTENDANCE CARD */}

          <div className="attendance-card">

            <div className="attendance-top">

              <div>

                <p>
                  Today's Attendance
                </p>

                <h2>
                  87%
                  <span>↑ 5%</span>
                </h2>

                <small>
                  Compared to yesterday
                </small>

              </div>


              <div className="attendance-check">
                ✓
              </div>

            </div>


            <div className="attendance-progress">
              <div></div>
            </div>


            <div className="attendance-stats">

              <div>
                <strong>43</strong>
                <span>Present</span>
              </div>

              <div>
                <strong>7</strong>
                <span>Absent</span>
              </div>

              <div>
                <strong>50</strong>
                <span>Total</span>
              </div>

            </div>

          </div>


          {/* Floating decorations */}

          <div className="floating-badge badge-one">
            ✓ Secure
          </div>

          <div className="floating-badge badge-two">
            ✦ Live Analytics
          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section
        className="features-section"
        id="features"
      >

        <div className="section-decoration"></div>

        <div className="section-label">
          WHY UPASHTITHI?
        </div>

        <h2>
          Everything you need to manage attendance
        </h2>

        <p className="section-description">
          Powerful tools designed to make attendance
          management simpler, smarter and more secure.
        </p>


        <div className="feature-grid">


          {/* CARD 1 */}

          <div className="feature feature-blue">

            <div className="feature-icon">
              👥
            </div>

            <div>

              <h3>
                Easy Tracking
              </h3>

              <p>
                Track student and employee attendance
                quickly and keep records organized.
              </p>

            </div>

            <span className="feature-number">
              01
            </span>

          </div>


          {/* CARD 2 */}

          <div className="feature feature-purple">

            <div className="feature-icon">
              ◔
            </div>

            <div>

              <h3>
                Smart Dashboard
              </h3>

              <p>
                View attendance information through a
                clean and powerful dashboard.
              </p>

            </div>

            <span className="feature-number">
              02
            </span>

          </div>


          {/* CARD 3 */}

          <div className="feature feature-green">

            <div className="feature-icon">
              ▥
            </div>

            <div>

              <h3>
                Analytics
              </h3>

              <p>
                Understand attendance patterns with
                useful reports and analytics.
              </p>

            </div>

            <span className="feature-number">
              03
            </span>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="how-background-circle"></div>

        <div className="section-label">
          HOW IT WORKS
        </div>

        <h2>
          Simple. Secure. Organized.
        </h2>

        <p className="how-intro">
          From selecting your organization to accessing
          your personalized dashboard, Upasthiti keeps
          every step simple.
        </p>


        <div className="timeline">


          {/* STEP 1 */}

          <div className="timeline-item">

            <div className="timeline-icon blue">
              🏛
            </div>

            <div className="timeline-content">

              <span>
                STEP 01
              </span>

              <h3>
                Select Organization
              </h3>

              <p>
                Choose your organization and continue
                to the role selection page.
              </p>

            </div>

          </div>


          <div className="timeline-line"></div>


          {/* STEP 2 */}

          <div className="timeline-item">

            <div className="timeline-icon purple">
              ●
            </div>

            <div className="timeline-content">

              <span>
                STEP 02
              </span>

              <h3>
                Choose Your Role
              </h3>

              <p>
                Select whether you want to continue
                as an Admin or a User.
              </p>

            </div>

          </div>


          <div className="timeline-line"></div>


          {/* STEP 3 */}

          <div className="timeline-item">

            <div className="timeline-icon green">
              🔒
            </div>

            <div className="timeline-content">

              <span>
                STEP 03
              </span>

              <h3>
                Login Securely
              </h3>

              <p>
                Enter your registered ID and password
                to securely access your account.
              </p>

            </div>

          </div>


          <div className="timeline-line"></div>


          {/* STEP 4 */}

          <div className="timeline-item">

            <div className="timeline-icon orange">
              ▦
            </div>

            <div className="timeline-content">

              <span>
                STEP 04
              </span>

              <h3>
                Access Your Dashboard
              </h3>

              <p>
                Your dashboard is customized according
                to your role, organization and permissions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-orb"></div>

        <div className="contact-container">

          <div className="contact-left">

            <div className="section-label">
              CONTACT US
            </div>

            <h2>
              Let's build a smarter
              <br />
              attendance experience.
            </h2>

            <p>
              Have questions about Upasthiti?
              Contact Navonmeshi Samadhan LLP
              for more information and support.
            </p>

          </div>


          <div className="contact-card">

            <h3>
              NAVONMESHI SAMADHAN LLP
            </h3>


            <div className="contact-item">

              <div className="contact-icon">
                ☎
              </div>

              <span>
                +91 90920 12345
              </span>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                ✉
              </div>

              <span>
                info@navonmeshisamadhan.com
              </span>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                ◎
              </div>

              <span>
                www.navonmeshisamadhan.com
              </span>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <span>
                India
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          © 2026 Upasthiti
        </div>

        <div>
          Smart Attendance. Secure Presence.
        </div>

      </footer>

    </div>
  );
}

export default Home;