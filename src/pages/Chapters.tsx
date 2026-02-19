import { useState } from 'react';
import './Chapters.css';

const ACTIVITY_INFO: Record<string, { title: string; description: string }> = {
  "men's circles": {
    title: "Men's Circles",
    description: "Men's circles are safe, confidential spaces where men meet regularly to share experiences, support each other, and discuss issues like mental health, relationships, fatherhood, and positive masculinity. They promote accountability, vulnerability, and mutual growth in a non-judgmental environment."
  },
  "workshops": {
    title: "Workshops",
    description: "Workshops are structured learning sessions on topics such as gender equality, GBV prevention, healthy relationships, consent, emotional intelligence, and life skills. They combine facilitation, group activities, and discussions to build knowledge and change attitudes."
  },
  "community activities": {
    title: "Community Activities",
    description: "Community activities are hands-on initiatives where chapter members engage with their neighbourhoods—clean-ups, awareness campaigns, sports, cultural events, and outreach. They strengthen ties between Majita and the community and model positive male involvement."
  },
  "mentorship": {
    title: "Mentorship",
    description: "Mentorship pairs experienced men with boys or younger men to guide them in life skills, education, career, and positive masculinity. Mentors offer support, advice, and role modelling to help mentees grow into responsible, respectful men."
  },
  "dialogue sessions": {
    title: "Dialogue Sessions",
    description: "Dialogue sessions are facilitated conversations where men (and sometimes mixed groups) discuss gender norms, violence prevention, equality, and culture. They encourage listening, reflection, and collective action to shift harmful attitudes and behaviours."
  },
  "commemoration of special dates": {
    title: "Commemoration of Special Dates",
    description: "Chapters mark important dates such as 16 Days of Activism Against Gender-Based Violence, International Men's Day, Father's Day, and other awareness days with events, campaigns, and community activities to promote our mission and engage the public."
  }
};

const ACTIVITY_KEYS = [
  "men's circles",
  "workshops",
  "community activities",
  "mentorship",
  "dialogue sessions",
  "commemoration of special dates"
] as const;

function Chapters() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  return (
    <div className="chapters-page chapters-page-blue">
      <section className="chapters-hero chapters-hero-blue">
        <div className="container">
          <h1>Community Chapters</h1>
          <p className="chapters-subtitle">Building Communities Across Zimbabwe</p>
          <p className="chapters-subtitle-2">Building transformative communities across Zimbabwe.</p>
        </div>
      </section>

      <section className="chapters-content">
        <div className="container">
          <div className="chapters-intro">
            <h2>How Chapters Work</h2>
            <p>
              <b>Click the Buttons</b>: Chapters are the grassroots structure of Majita. Paid-up members meet regularly for:
            </p>
            <div className="chapter-activities-buttons">
              {ACTIVITY_KEYS.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`chapter-activity-btn ${selectedActivity === key ? 'active' : ''}`}
                  onClick={() => setSelectedActivity(selectedActivity === key ? null : key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))}
            </div>
            {selectedActivity && ACTIVITY_INFO[selectedActivity] && (
              <div className="chapter-activity-info">
                <h3>{ACTIVITY_INFO[selectedActivity].title}</h3>
                <p>{ACTIVITY_INFO[selectedActivity].description}</p>
              </div>
            )}
            <p className="chapters-intro-footer">
              Each chapter elects its Chair, Secretary, and Treasurer, who coordinate activities and
              represent the chapter at the AGM.
            </p>
          </div>

          <div className="current-chapters">
            <h2>Current Chapters</h2>
            <div className="chapters-grid">
              <div className="chapter-card">
                <h3>DZ Extension</h3>
                <p>Serving men in the DZ Extension area.</p>
              </div>
              <div className="chapter-card">
                <h3>Hatcliffe</h3>
                <p>Serving men in the Hatcliffe area.</p>
              </div>
            </div>
          </div>

          <div className="start-chapter-cta">
            <a href="mailto:majitamensnetwork@gmail.com" className="join-btn">Contact Us to Start a Chapter</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chapters;
