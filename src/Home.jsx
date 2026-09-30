import { Link } from "react-router-dom";
import logo from "./assets/upasthiti-logo.jpeg";
import "./App.css";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <header className="navbar">

        <div className="brand">
          <img src={logo} alt="Upasthiti Logo" />

          <div>
            <h2>Upasthiti</h2>
            <p>Smart Attendance. Secure Presence.</p>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact Us</a>

          {/* Organization is now Step 1 */}
          <Link to="/organization" className="portal-btn">
            Portal
          </Link>
        </nav>

      </header>


      {/* HERO */}
      <section className="hero" id="home">

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

            {/* Organization is now Step 1 */}
            <Link to="/organization" className="primary-btn">
              Get Started
            </Link>

            <a href="#features" className="secondary-btn">
              Learn More
            </a>

          </div>

        </div>


        {/* ATTENDANCE CARD */}
        <div className="attendance-card">

          <div className="card-top">

            <div>
              <p>Today's Attendance</p>
              <h2>87%</h2>
            </div>

            <div className="check">
              ✓
            </div>

          </div>

          <div className="progress">
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

      </section>


      {/* FEATURES */}
      <section className="features-section" id="features">

        <p className="section-label">
          WHY UPASHTITHI?
        </p>

        <h2>
          Everything you need to manage attendance
        </h2>

        <div className="feature-grid">

          <div className="feature">
            <div className="feature-icon">✓</div>

            <h3>Easy Tracking</h3>

            <p>
              Track student and employee attendance quickly
              and keep records organized.
            </p>
          </div>


          <div className="feature">
            <div className="feature-icon">▣</div>

            <h3>Smart Dashboard</h3>

            <p>
              View attendance information through a clean
              and powerful dashboard.
            </p>
          </div>


          <div className="feature">
            <div className="feature-icon">↗</div>

            <h3>Analytics</h3>

            <p>
              Understand attendance patterns with useful
              reports and analytics.
            </p>
          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">

        <div className="section-label">
          HOW IT WORKS
        </div>

        <h2>
          Simple. Secure. Organized.
        </h2>

        <p className="how-intro">
          Upasthiti makes attendance management simple for
          administrators, organizations and users.
        </p>


        <div className="steps">

          {/* STEP 01 */}
          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Select Organization
            </h3>

            <p>
              Choose your organization and continue to the
              role selection page.
            </p>

          </div>


          {/* STEP 02 */}
          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Choose Your Role
            </h3>

            <p>
              Select whether you want to access the Admin Portal
              or the User Portal.
            </p>

          </div>


          {/* STEP 03 */}
          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Login Securely
            </h3>

            <p>
              Enter your registered ID and password to access
              your account.
            </p>

          </div>


          {/* STEP 04 */}
          <div className="step-card">

            <div className="step-number">
              04
            </div>

            <h3>
              Access Your Dashboard
            </h3>

            <p>
              Your dashboard is customized according to your
              role, organization and permissions.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="contact-container">

          <div className="contact-title">

            <p className="section-label">
              CONTACT US
            </p>

            <h2>
              Get in Touch
            </h2>

            <p>
              Have questions about Upasthiti? Contact Navonmeshi
              Samadhan LLP for more information and support.
            </p>

          </div>


          <div className="contact-card">

            <h3>
              NAVONMESHI SAMADHAN LLP
            </h3>


            <div className="contact-item">
              <span className="contact-icon">☎</span>
              <span>+91 90920 12345</span>
            </div>


            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <span>info@navonmeshisamadhan.com</span>
            </div>


            <div className="contact-item">
              <span className="contact-icon">🌐</span>
              <span>www.navonmeshisamadhan.com</span>
            </div>


            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>India</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;