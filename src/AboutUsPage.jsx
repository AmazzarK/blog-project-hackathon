import React from "react";
import "./app.css"; // We'll create this CSS file next

function About() {
  const friends = [
    {
      name: "Youssef",
      role: "Frontend Developer",
      description: "Crafts beautiful and user-friendly interfaces.",
    },
    {
      name: "Ayman",
      role: "Backend Developer",
      description: "Expert in databases and server-side logic.",
    },
    {
      name: "Emane",
      role: "Full Stack Developer",
      description: "Bridges frontend and backend development.",
    },
    {
      name: "Kawtar",
      role: "DevOps Specialist",
      description: "Ensures smooth and secure app deployment.",
    },
  ];

  return (
    <section className="about-section">
      <h1 id="meet-our-dev-team" className="section-title">
        Meet Our Dev Team
      </h1>
      <p className="section-description">
        We are four friends passionate about coding and building great software.
      </p>
      <div className="friends-container">
        {friends.map((friend) => (
          <div key={friend.name} className="friend-card">
            <h2 className="friend-name">{friend.name}</h2>
            <h4 className="friend-role">{friend.role}</h4>
            <p className="friend-description">{friend.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
