
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Passionate Full Stack Developer with 3+ years of experience creating 
              pixel-perfect, responsive web applications. I specialize in modern 
              JavaScript frameworks and love turning complex problems into simple, 
              beautiful solutions.
            </p>
            <p>
              When Im not coding, youll find me exploring new technologies, 
              contributing to open source, or capturing moments with my camera.
            </p>
            <div className="skills-grid">
              <div className="skill">React.js</div>
              <div className="skill">Node.js</div>
              <div className="skill">TypeScript</div>
              <div className="skill"> Java</div>
              <div className="skill">Postgres</div>
              <div className="skill">Springboot</div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder"></div>
             <img src="../Images/p.webp" className="img" alt="MyImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

