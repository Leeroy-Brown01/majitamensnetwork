import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>ABOUT US</h1>
          <p className="about-subtitle">Empowering Men and Boys for a Better Tomorrow</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-card about-card-vision">
              <h2>Our Vision</h2>
              <p>
                A world where men and boys are champions of gender equality, actively working to end 
                gender-based violence and building communities founded on respect, dignity, and positive 
                masculinity.
              </p>
            </div>

            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                To empower men and boys through education, mentorship, and advocacy, transforming harmful 
                attitudes and behaviors into positive action that promotes gender equality and prevents 
                violence against women and girls.
              </p>
            </div>
          </div>

          <div className="about-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Respect and Dignity</h3>
                <p>We honor the dignity and worth of every individual</p>
              </div>
              <div className="value-item">
                <h3>Non-Violence</h3>
                <p>We commit to peaceful resolution and reject all forms of violence</p>
              </div>
              <div className="value-item">
                <h3>Accountability</h3>
                <p>We take responsibility for our actions and their impact</p>
              </div>
              <div className="value-item">
                <h3>Gender Equality</h3>
                <p>We actively promote justice and equality for all genders</p>
              </div>
              <div className="value-item">
                <h3>Community Participation</h3>
                <p>We believe in collective action and grassroots engagement</p>
              </div>
              <div className="value-item">
                <h3>Positive Masculinity</h3>
                <p>We redefine strength as empathy, service, and self-control</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
