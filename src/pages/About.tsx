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
                <h3>1. Human Dignity and Respect</h3>
                <p>We uphold the inherent dignity, worth, and voice of every person in all our actions and relationships.</p>
              </div>
              <div className="value-item">
                <h3>2. Peace and Non-Violence</h3>
                <p>We promote peaceful, respectful relationships and actively reject all forms of violence, abuse, and harmful practices.</p>
              </div>
              <div className="value-item">
                <h3>3. Integrity and Accountability</h3>
                <p>We act with honesty, take responsibility for our actions, and remain accountable to the communities we serve.</p>
              </div>
              <div className="value-item">
                <h3>4. Gender Justice and Equality</h3>
                <p>We champion fairness, equal rights, and opportunities for all genders, and work to transform harmful norms and systems.</p>
              </div>
              <div className="value-item">
                <h3>5. Positive Masculinity and Partnership</h3>
                <p>We engage men and boys as responsible partners and allies in advancing gender equality and ending discrimination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
