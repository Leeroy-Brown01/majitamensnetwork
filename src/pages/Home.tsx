import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>RAISING BETTER BOYS.<br />BUILDING BETTER MEN.</h1>
          <p className="hero-subtext">
            Majita Men's Network is a membership-driven movement working with men and boys to promote 
            positive masculinity, prevent gender-based violence, and build healthy families and communities.
          </p>
          <div className="hero-buttons">
            <Link to="/chapters" className="hero-btn primary">Join a Chapter</Link>
            <Link to="/donate" className="hero-btn secondary">Support the Work</Link>
            <a href="#counselling" className="hero-btn emergency">Need Counselling? Get Help Now</a>
          </div>
        </div>
      </section>

      {/* Who We Are & What We Do - Side by Side */}
      <section className="who-what-aside">
        <div className="container who-what-container">
          <aside className="who-what-card who-what-left">
            <h2>WHO WE ARE</h2>
            <p>
              Majita is a national network of men and boys committed to transforming harmful gender norms, 
              strengthening fatherhood, and ending violence in homes and communities. We work through community 
              chapters, mentorship programmes, dialogues, and safe spaces that support men's mental health and wellbeing.
            </p>
          </aside>
          <aside className="who-what-card who-what-right">
            <h2>WHAT WE DO</h2>
            <p>
              Through innovative programs and community partnerships, we engage men and boys in conversations 
              about healthy masculinity, gender equality, and the prevention of gender-based violence.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Home;
