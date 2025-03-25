// src/App.jsx
import { useState } from 'react';
import './App.css';
import logo from './assets/vineeth pass photo.jpg';
import netflix from './assets/netflix.png';
import micro from './assets/micro.png';
import google from './assets/google.png';
import amazon from './assets/Amazon.png';
import resume from './assets/Resume.pdf'; // Add your resume PDF here

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation Bar */}
      <nav className={`shadow-md fixed w-full top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            Naramshetty Vineethkumar
          </h1>
          <button
            className="sm:hidden p-2 focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle Navigation"
          >
            <div className={`hamburger ${isNavOpen ? 'open' : ''}`}>
              <span className={`${darkMode ? 'bg-teal-400' : 'bg-gray-600'}`}></span>
              <span className={`${darkMode ? 'bg-teal-400' : 'bg-gray-600'}`}></span>
              <span className={`${darkMode ? 'bg-teal-400' : 'bg-gray-600'}`}></span>
            </div>
          </button>
          <div className={`nav-links ${isNavOpen ? 'flex' : 'hidden'} sm:flex sm:space-x-4 flex-col sm:flex-row items-center absolute sm:static top-16 left-0 w-full sm:w-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} sm:bg-transparent`}>
            <a href="#home" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>Home</a>
            <a href="#about" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>About</a>
            <a href="#education" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>Education</a>
            <a href="#skills" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>Skills</a>
            <a href="#experience" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>Experience</a>
            <a href="#projects" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>Projects</a>
            <a href="#contact" className={`hover-text-teal ${darkMode ? 'text-gray-100' : 'text-gray-600'} py-2 sm:py-0`}>Contact</a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-teal-600 text-white' : 'bg-gray-300'} mt-2 sm:mt-0`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section with Centered Image */}
      <section
        id="home"
        className={`pt-24 pb-16 flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-4xl px-4 items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mb-4">
              Welcome, I'm <br />
              <pre className={`inline font-bold ${darkMode ? 'text-teal-400' : 'text-orange-500'} typing-animation`}>
                N Vineeth kumar
              </pre>
            </h2>
            <p className="text-lg md:text-xl mb-6">
              A passionate BTech student and Front-End Developer from Sreenidhi Institute of Science and Technology, Hyderabad. Explore my work and get to know me!
            </p>
            <a
              href={resume}
              download="Naramshetty_Vineethkumar_Resume.pdf"
              className={`inline-block px-6 py-3 rounded-lg font-semibold text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-500' : 'bg-orange-500 hover:bg-orange-600'}`}
            >
              Download Resume
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={logo}
              alt="Naramshetty Vineethkumar"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-md object-cover border-4 border-teal-600 mx-auto"
            />
          </div>
        </div>
      </section>

       {/* About Me Section */}
       <section id="about" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            About Me
          </h2>
          <div className={`rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <img src={logo} alt="Naramshetty Vineethkumar" className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md mb-4 md:mr-8 md:mb-0" />
            <div>
              <p className="text-base sm:text-lg mb-4">
                I’m Naramshetty Vineethkumar, a BTech student at Sreenidhi Institute of Science and Technology, Hyderabad. Born on 04/04/2004 in Suryapet, India, I’m passionate about front-end development, embedded systems, and VLSI.
              </p>
              <p className="text-base sm:text-lg">
                I’ve worked as an intern at Emertxe, honing skills in C programming and learned how to use simulation tools like PICSimLab. I enjoy teamwork, problem-solving, and speak Telugu and English. In my free time, I play chess, watch movies, and read comics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            Education
          </h2>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover-shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">BTech</h3>
            <p className="text-base sm:text-lg mb-2"><strong>Institution:</strong> Sreenidhi Institute of Science and Technology</p>
            <p className="text-base sm:text-lg mb-2"><strong>Duration:</strong> 07/11/2022 - Current</p>
            <p className="text-base sm:text-lg mb-2"><strong>Location:</strong> Hyderabad, India</p>
            <p className="text-base sm:text-lg"><strong>Website:</strong>{' '}
              <a href="https://www.sreenidhi.edu.in" className={`hover-text-teal ${darkMode ? 'text-teal-600' : 'text-orange-500'}`} target="_blank" rel="noopener noreferrer">
                www.sreenidhi.edu.in
              </a>
            </p>
          </div>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover-shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Intermediate (TSBIE)</h3>
            <p className="text-base sm:text-lg mb-2"><strong>Institution:</strong> TSRJC Thungathurthy</p>
            <p className="text-base sm:text-lg mb-2"><strong>Result:</strong> 983/1000</p>
            <p className="text-base sm:text-lg mb-2"><strong>Completion Year:</strong> 2022</p>
          </div>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover-shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Secondary School Certificate (SSC)</h3>
            <p className="text-base sm:text-lg mb-2"><strong>Institution:</strong> Sri Vyshnavi High School</p>
            <p className="text-base sm:text-lg mb-2"><strong>Result:</strong> 10 GPA</p>
            <p className="text-base sm:text-lg mb-2"><strong>Completion Year:</strong> 2020</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            Skills
          </h2>
          <div className="grid grid-skills">
            {[
              { name: 'HTML', img: 'https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png' },
              { name: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
              { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
              { name: 'C programming', img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
              { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
              { name: 'PHP', img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
              { name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
              { name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
            ].map((skill, index) => (
              <div key={index} className={`rounded-lg shadow-md p-4 hover-shadow-lg flex flex-col items-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img src={skill.img} alt={`${skill.name} logo`} className="w-16 h-16 mb-2 object-contain" />
                <h3 className="text-base sm:text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            Experience
          </h2>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover-shadow-lg flex flex-col sm:flex-row items-start ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLQAtvbe-N3etxrAGmqwuVWlAZIyIpUu1u1Ctm4=s900-c-k-c0x00ffffff-no-rj" alt="Emertxe logo" className="w-30 h-30 rounded-full mb-4 sm:mr-6 sm:mb-0" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Intern</h3>
              <p className="text-base sm:text-lg mb-2"><strong>Company:</strong> Emertxe</p>
              <p className="text-base sm:text-lg mb-2"><strong>Duration:</strong> 08/01/2025 - 28/02/2025</p>
              <p className="text-base sm:text-lg"><strong>Description:</strong> Gained hands-on experience in embedded systems and software development.</p>
            </div>
          </div>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover-shadow-lg flex flex-col sm:flex-row items-start ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <img src="https://media.licdn.com/dms/image/v2/D560BAQHKj7Awmq4pDg/company-logo_200_200/company-logo_200_200/0/1693215023031/nobel_community_logo?e=2147483647&v=beta&t=Sd4PwV4kViOgSyPDbxxkzBPJs-i-ulDyzW7kaydJIRs" alt="Nobel PBC logo" className="w-30 h-30 rounded-full mb-4 sm:mr-6 sm:mb-0" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Intern</h3>
              <p className="text-base sm:text-lg mb-2"><strong>Company:</strong> Nobel PBC</p>
              <p className="text-base sm:text-lg mb-2"><strong>Duration:</strong> Feb 2025 - present</p>
              <p className="text-base sm:text-lg"><strong>Description:</strong> Gained Networking, Teamwork, fundamentals on WordPress, confidence.</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Projects Section */}
      <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            Projects
          </h2>
          <div className="grid grid-projects gap-6">
            <div className={`rounded-lg shadow-md p-6 hover-shadow-lg flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src={micro} alt="Microoven Simulation" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
                Microoven Simulation
              </h3>
              <p className="text-base sm:text-lg mb-2">Simulated a microwave oven using PICSimLab with a GUI interface.</p>
              <p className="text-base sm:text-lg"><strong>Technologies:</strong> PICSimLab, MPLAB XIDE</p>
            </div>
            <div className={`rounded-lg shadow-md p-6 hover-shadow-lg flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src={google} alt="Google Clone" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
                Google Clone
              </h3>
              <p className="text-base sm:text-lg mb-2">Recreated Google's homepage with clean design.</p>
              <p className="text-base sm:text-lg mb-2"><strong>Technologies:</strong> HTML, CSS</p>
              <a href="https://vineethkumar-google-clone.netlify.app" className={`hover-text-teal ${darkMode ? 'text-teal-600' : 'text-orange-500'}`} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className={`rounded-lg shadow-md p-6 hover-shadow-lg flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src={netflix} alt="Netflix Clone" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
                Netflix Clone
              </h3>
              <p className="text-base sm:text-lg mb-2">Built a Netflix-inspired interface with responsive design.</p>
              <p className="text-base sm:text-lg mb-2"><strong>Technologies:</strong> HTML, CSS</p>
              <a href="https://vineeth-kumar-netflix.netlify.app/" className={`hover-text-teal ${darkMode ? 'text-teal-600' : 'text-orange-500'}`} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div className={`rounded-lg shadow-md p-6 hover-shadow-lg flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img src={amazon} alt="Amazon Clone" className="w-full h-48 object-cover rounded mb-4" />
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
                Amazon Clone
              </h3>
              <p className="text-base sm:text-lg mb-2">Developed an Amazon-inspired e-commerce interface.</p>
              <p className="text-base sm:text-lg"><strong>Technologies:</strong> HTML, CSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-teal-400' : 'text-orange-500'}`}>
            Contact Me
          </h2>
          <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="mb-6">
              <p className="text-base sm:text-lg mb-2"><strong>Phone:</strong> (+91) 6305271785</p>
              <p className="text-base sm:text-lg mb-2"><strong>Email:</strong> naramshettyvineethkumar@gmail.com</p>
              <p className="text-base sm:text-lg mb-2"><strong>WhatsApp:</strong> 6305271785</p>
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="https://www.linkedin.com/in/naramshetty-vineeth-kumar" target="_blank" rel="noopener noreferrer">
                  <img src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt="LinkedIn" className="w-12 h-12" />
                </a>
                <a href="https://github.com/N-Vineethkumar" target="_blank" rel="noopener noreferrer">
                  <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="GitHub" className="w-12 h-12" />
                </a>
                <a href="https://www.instagram.com/n_vineeth_kumar_" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.pinimg.com/1200x/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg" alt="Instagram" className="w-12 h-12 rounded-full" />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base sm:text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base sm:text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base sm:text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg font-semibold text-white ${darkMode ? 'bg-teal-600 hover:bg-teal-500' : 'bg-orange-500 hover:bg-orange-600'}`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;