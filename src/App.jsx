import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const downloadResume = () => {
    const resumeContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Naramshetty Vineethkumar - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #2c3e50; }
          h2 { color: #3498db; margin-top: 20px; }
          .section { margin-bottom: 20px; }
          .contact-info, .education, .experience, .skills { line-height: 1.6; }
          ul { list-style-type: none; padding-left: 0; }
          li { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h1>Naramshetty Vineethkumar</h1>
        <div class="contact-info">
          <p>Email: naramshettyvineethkumar@gmail.com</p>
          <p>Phone: (+91) 6305271785</p>
          <p>LinkedIn: linkedin.com/in/naramshetty-vineeth-kumar</p>
          <p>Address: Suryapet, Telangana, India, 508213</p>
        </div>

        <div class="section">
          <h2>About Me</h2>
          <p>BTech student at Sreenidhi Institute of Science and Technology with a keen interest in web development and embedded systems. Born on April 4, 2004, I strive to create innovative solutions using modern technologies.</p>
        </div>

        <div class="section">
          <h2>Education</h2>
          <div class="education">
            <strong>BTech</strong> - Sreenidhi Institute of Science and Technology<br>
            07/11/2022 - Current | Hyderabad, India | EQF Level 6<br><br>
            <strong>Intermediate</strong> - TSRJC, Thungathurthy<br>
            Score: 983/1000 | Thungathurthy, India<br><br>
            <strong>SSC</strong> - Sri Vyshnavi High School, Kodad<br>
            GPA: 10/10 | Kodad, India
          </div>
        </div>

        <div class="section">
          <h2>Experience</h2>
          <div class="experience">
            <strong>Intern</strong> - Nobel PBS<br>
            February 2025 - Present | India<br><br>
            <strong>Intern</strong> - Emertxe<br>
            08/01/2025 - 28/02/2025 | Online, India
          </div>
        </div>

        <div class="section">
          <h2>Projects</h2>
          <ul>
            <li><strong>Microoven Simulation</strong> - Simulation of a microwave oven using PICSimLab (08/01/2025 - 28/02/2025)</li>
            <li><strong>Google Clone</strong> - Front-end replica of Google homepage using HTML and CSS</li>
            <li><strong>Netflix Clone</strong> - Responsive Netflix-inspired interface using HTML and CSS</li>
            <li><strong>Amazon Clone</strong> - E-commerce inspired web interface using HTML and CSS</li>
          </ul>
        </div>

        <div class="section">
          <h2>Skills</h2>
          <div class="skills">
            <strong>Digital Skills:</strong> HTML, CSS, Python, C Programming, Digital Logic Design, CMOS, MATLAB (Basic), Tina-TI (Basic), AI<br>
            <strong>Soft Skills:</strong> Active Listening, Empathy, Emotional Intelligence, Team Work, Time Management, Problem Solving<br>
            <strong>Languages:</strong> Telugu (Native), English
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Naramshetty_Vineethkumar_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Header */}
      <header className="header">
        <h1>Naramshetty Vineethkumar</h1>
        <nav>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="home-content">
          <img 
            src="vineethai.png" 
            alt="Welcome illustration" 
            className="home-image"
          />
          <div className="home-text">
            <h2>Welcome!</h2>
            <p>Hello! I'm Naramshetty Vineethkumar, a passionate developer and student.</p>
            <marquee behavior="scroll" direction="left" className="marquee">
              Web Development | Embedded Systems | Innovative Solutions | BTech Student
            </marquee>
            <button onClick={downloadResume} className="resume-button">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aIOgsv7BKJblhD55Rfl9mz4a-4110FgdEA&s" 
              alt="Naramshetty Vineethkumar" 
              className="about-image"
            />
            <div className="about-details">
              <p>
                I'm a passionate BTech student at Sreenidhi Institute of Science and Technology with a keen interest in 
                web development and embedded systems.
              </p>
              <p>Born: April 4, 2004</p>
              <p>Home: Suryapet, Telangana, India, 508213</p>
              <p>I strive to create innovative solutions using modern technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-content">
          <h3>BTech</h3>
          <p>Sreenidhi Institute of Science and Technology</p>
          <p>07/11/2022 - Current</p>
          <p>Hyderabad, India | EQF Level 6</p>
          <a href="http://www.sreenidhi.edu.in" target="_blank" rel="noopener noreferrer">
            www.sreenidhi.edu.in
          </a>
        </div>
        <div className="education-content">
          <h3>Intermediate</h3>
          <p>TSRJC, Thungathurthy</p>
          <p>Score: 983/1000</p>
          <p>Thungathurthy, India</p>
        </div>
        <div className="education-content">
          <h3>SSC</h3>
          <p>Sri Vyshnavi High School, Kodad</p>
          <p>GPA: 10/10</p>
          <p>Kodad, India</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="experience-content">
          <h3>Intern</h3>
          <p>Nobel PBS</p>
          <p>February 2025 - Present</p>
          <p>India</p>
        </div>
        <div className="experience-content">
          <h3>Intern</h3>
          <p>Emertxe</p>
          <p>08/01/2025 - 28/02/2025</p>
          <p>Online, India</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Microoven Simulation</h3>
            <p>Simulation of a microwave oven using PICSimLab platform with GUI control panel</p>
            <p>08/01/2025 - 28/02/2025</p>
          </div>
          <div className="project-card">
            <h3>Google Clone</h3>
            <p>Front-end replica of Google homepage using HTML and CSS</p>
            <a href="https://vineethkumar-google-clone.netlify.app" className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>Netflix Clone</h3>
            <p>Responsive Netflix-inspired interface using HTML and CSS</p>
            <a href="https://vineeth-kumar-netfix.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
          <div className="project-card">
            <h3>Amazon Clone</h3>
            <p>E-commerce inspired web interface using HTML and CSS</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-card">
            <h3>Digital Skills</h3>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>C Programming</li>
              <li>Digital Logic Design</li>
              <li>CMOS</li>
              <li>MATLAB (Basic)</li>
              <li>Tina-TI (Basic)</li>
              <li>AI</li>
            </ul>
          </div>
          <div className="skills-card">
            <h3>Soft Skills</h3>
            <ul className="skills-list">
              <li>Active Listening</li>
              <li>Empathy</li>
              <li>Emotional Intelligence</li>
              <li>Team Work</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div className="skills-card">
            <h3>Languages</h3>
            <ul className="skills-list">
              <li>Telugu (Native)</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-content">
          <div className="contact-info-card">
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <p><span className="contact-icon">✉️</span> naramshettyvineethkumar@gmail.com</p>
              <p><span className="contact-icon">📞</span> (+91) 6305271785</p>
              <p><span className="contact-icon">💬</span> WhatsApp: 6305271785</p>
              <p><span className="contact-icon">🔗</span> 
                <a href="linkedin.com/in/naramshetty-vineeth-kumar" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                rows="4"
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Naramshetty Vineethkumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;