// src/App.jsx
import { useState } from 'react';
import './App.css';
import logo from './assets/vineeth pass photo.jpg';
import logo1 from './assets/vineeth.png';
import netflix from './assets/netflix.png';
import micro from './assets/micro.png';
import google from './assets/google.png';
import amazon from './assets/amazon.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen font-sans ${darkMode ? 'bg-[#f4a261] text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation Bar */}
      <nav className={`shadow-md fixed w-full top-0 z-50 ${darkMode ? 'bg-[#e76f51]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
            Naramshetty Vineethkumar
          </h1>
          <div className="flex items-center space-x-6">
            <a href="#home" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>Home</a>
            <a href="#education" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>Education</a>
            <a href="#skills" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>Skills</a>
            <a href="#experience" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>Experience</a>
            <a href="#about" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>About</a>
            <a href="#projects" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>Projects</a>
            <a href="#contact" className={`hover:text-[#264653] ${darkMode ? 'text-white' : 'text-gray-600'}`}>Contact</a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-[#264653] text-white' : 'bg-gray-300'}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className={`pt-24 pb-16 flex items-center justify-center min-h-screen ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
      >
        <div className="flex space-x-8 max-w-4xl">
          <div className="w-1/2">
            <h2 className={`text-4xl mb-4`}>
              Welcome, I'm <br /> <pre className={`inline font-bold ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'} typing-animation`}> N Vineeth kumar </pre>
            </h2>
            <p className="text-xl mb-6">
              A passionate BTech student and Front-End Developer from Sreenidhi Institute of Science and Technology, Hyderabad. Explore my work and get to know me!
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src={logo}
              alt="Naramshetty Vineethkumar"
              className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-[#264653]"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-16 ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
            Education
          </h2>
          {/* BTech */}
          <div className={`rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <h3 className="text-xl font-semibold mb-2">BTech</h3>
            <p className="text-lg mb-2"><strong>Institution:</strong> Sreenidhi Institute of Science and Technology</p>
            <p className="text-lg mb-2"><strong>Duration:</strong> 07/11/2022 - Current</p>
            <p className="text-lg mb-2"><strong>Location:</strong> Hyderabad, India</p>
            <p className="text-lg mb-2"><strong>Level:</strong> EQF Level 6</p>
            <p className="text-lg">
              <strong>Website:</strong>{' '}
              <a href="https://www.sreenidhi.edu.in" className={`${darkMode ? 'text-[#264653] hover:text-white' : 'text-[#f4a261] hover:text-[#e76f51]'}`} target="_blank" rel="noopener noreferrer">
                www.sreenidhi.edu.in
              </a>
            </p>
          </div>
          {/* TSBIE */}
          <div className={`rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <h3 className="text-xl font-semibold mb-2">Intermediate (TSBIE)</h3>
            <p className="text-lg mb-2"><strong>Institution:</strong> TSRJC Thungathurthy</p>
            <p className="text-lg mb-2"><strong>Result:</strong> 983/1000</p>
            <p className="text-lg mb-2"><strong>Completion Year:</strong> 2022</p>
            <p className="text-lg mb-2"><strong>Location:</strong> Thungathurthy, Telangana, India</p>
          </div>
          {/* SSC */}
          <div className={`rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <h3 className="text-xl font-semibold mb-2">Secondary School Certificate (SSC)</h3>
            <p className="text-lg mb-2"><strong>Institution:</strong> Sri Vyshnavi High School</p>
            <p className="text-lg mb-2"><strong>Result:</strong> 10 GPA</p>
            <p className="text-lg mb-2"><strong>Completion Year:</strong> 2020</p>
            <p className="text-lg mb-2"><strong>Location:</strong> Kodad, Telangana, India</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section
  id="skills"
  className={`py-16 ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
>
  <div className="max-w-4xl mx-auto px-4">
    <h2
      className={`text-3xl font-bold mb-8 text-center ${
        darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'
      }`}
    >
      Skills
    </h2>
    <div className="flex flex-wrap justify-center gap-6">
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
        <div
          key={index}
          className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center w-48 ${
            darkMode ? 'bg-[#e76f51]' : 'bg-white'
          }`}
        >
          <div className="w-24 h-24 mb-4 flex items-center justify-center">
            <img
              src={skill.img}
              alt={`${skill.name} logo`}
              className="max-w-full max-h-full object-contain rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-16 ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
            Experience
          </h2>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow flex items-center ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <div className="w-40 h-32 bg-gray-300 rounded-full flex items-center justify-center mr-6">
              <span className="text-gray-600 text-sm text-center">
                <img src="https://yt3.ggpht.com/ytc/AKedOLQAtvbe-N3etxrAGmqwuVWlAZIyIpUu1u1Ctm4=s900-c-k-c0x00ffffff-no-rj" alt="Emertxe lgo" className="rounded-full w-40" />
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Intern</h3>
              <p className="text-lg mb-2"><strong>Company:</strong> Emertxe</p>
              <p className="text-lg mb-2"><strong>Duration:</strong> 08/01/2025 - 28/02/2025</p>
              <p className="text-lg mb-2"><strong>Location:</strong> Online, India</p>
              <p className="text-lg"><strong>Description:</strong> Gained hands-on experience in embedded systems and software development during an online internship.</p>
            </div>
          </div>
          <div className={`rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow flex items-center ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <div className="w-40 h-32 bg-gray-300 rounded-full flex items-center justify-center mr-6">
              <span className="text-gray-600 text-sm text-center">
                <img src="https://media.licdn.com/dms/image/v2/D560BAQHKj7Awmq4pDg/company-logo_200_200/company-logo_200_200/0/1693215023031/nobel_community_logo?e=2147483647&v=beta&t=Sd4PwV4kViOgSyPDbxxkzBPJs-i-ulDyzW7kaydJIRs" alt="Nobel PBC lgo" className="rounded-full w-40" />
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Intern</h3>
              <p className="text-lg mb-2"><strong>Company:</strong> Nobel PBC</p>
              <p className="text-lg mb-2"><strong>Duration:</strong> Feb 2025 - present</p>
              <p className="text-lg mb-2"><strong>Location:</strong> Online, India</p>
              <p className="text-lg"><strong>Description:</strong> Gained Networking, Teamwork, fundamentals on wordpress, confidence during an online internship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className={`py-16 ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
            About Me
          </h2>
          <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Naramshetty Vineethkumar"
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg object-cover border-4 border-[#264653]"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg mb-4">
                  I’m Naramshetty Vineethkumar, a BTech student at Sreenidhi Institute of Science and Technology, Hyderabad. Born on 04/04/2004 in Suryapet, India, I’m passionate about front-end development, embedded systems and VLSI.
                </p>
                <p className="text-lg">
                  I’ve worked as an intern at Emertxe, honing skills in C programming and learned how to use simulation tools like Pic simLab. I enjoy teamwork, problem-solving, and speak Telugu and English. In my free time, I play chess, watch movies, and read comics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-16 ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 relative">
            {/* Microoven Simulation */}
            <div className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start rotate-1 z-10 ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
              <div className="w-100 h-48 bg-gray-300 rounded mr-6 flex-shrink-0">
                <span className="text-gray-600 text-sm flex items-center justify-center h-full">
                <img src={micro} alt="Netflix output" className='w-100 h-48 rounded'/>
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
                  Microoven Simulation
                </h3>
                <p className="text-lg mb-2 text-center">Simulated a microwave oven using PICSimLab with a GUI interface.</p>
                <p className="text-lg text-center"><strong>Technologies:</strong> PICSimLab, MPLAB XIDE</p>
              </div>
            </div>
            {/* Google Clone */}
            <div className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start -rotate-1 z-20 -mt-8 ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
              <div className="w-100 h-48 bg-gray-300 rounded mr-6 flex-shrink-0">
                <span className="text-gray-600 text-sm flex items-center justify-center h-full">
                <img src={google} alt="Google output" className='w-100 h-48 rounded'/>
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
                  Google Clone
                </h3>
                <p className="text-lg mb-2 text-center">Recreated Google's homepage with clean design.</p>
                <p className="text-lg mb-2 text-center"><strong>Technologies:</strong> HTML, CSS</p>
                <a href="https://vineethkumar-google-clone.netlify.app" className={`${darkMode ? 'text-[#264653] hover:text-white' : 'text-[#f4a261] hover:text-[#e76f51]'}`} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            {/* Netflix Clone */}
            <div className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start rotate-1 z-30 -mt-8 ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
              <div className="w-100 h-48 bg-gray-300 rounded mr-6 flex-shrink-0">
                <span className="text-gray-600 text-sm flex items-center justify-center h-full">
                  <img src={netflix} alt="Netflix output" className='w-100 h-48 rounded'/>
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
                  Netflix Clone
                </h3>
                <p className="text-lg mb-2 text-center">Built a Netflix-inspired interface with responsive design.</p>
                <p className="text-lg mb-2 text-center"><strong>Technologies:</strong> HTML, CSS</p>
                <a href="https://vineeth-kumar-netflix.netlify.app/" className={`${darkMode ? 'text-[#264653] hover:text-white' : 'text-[#f4a261] hover:text-[#e76f51]'}`} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            {/* Amazon Clone */}
            <div className={`rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex items-start -rotate-1 z-40 -mt-8 ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
              <div className="w-100 h-48 bg-gray-300 rounded mr-6 flex-shrink-0">
                <span className="text-gray-600 text-sm flex items-center justify-center h-full">
                <img src={amazon} alt="Amazon output" className='w-100 h-48 rounded'/>
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
                  Amazon Clone
                </h3>
                <p className="text-lg mb-2 text-center">Developed an Amazon-inspired e-commerce interface.</p>
                <p className="text-lg mb-2 text-center"><strong>Technologies:</strong> HTML, CSS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 ${darkMode ? 'bg-[#f4a261]' : 'bg-gray-100'}`}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-[#2a9d8f]' : 'text-[#f4a261]'}`}>
            Contact Me
          </h2>
          <div className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-[#e76f51]' : 'bg-white bg-opacity-70'}`}>
            <div className="mb-6">
              <p className="text-lg mb-2"><strong>Phone:</strong> (+91) 6305271785</p>
              <p className="text-lg mb-2"><strong>Email:</strong> naramshettyvineethkumar@gmail.com</p>
              <p className="text-lg mb-2"><strong>WhatsApp:</strong> 6305271785</p>
              <div className="flex space-x-4 mt-4 justify-center">
                <a href="https://www.linkedin.com/in/naramshetty-vineeth-kumar" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src="https://openvisualfx.com/wp-content/uploads/2019/10/linkedin-icon-logo-png-transparent.png" alt="LinkedIn" className="w-15 h-12" />
                </a>
                <a href="https://github.com/N-Vineethkumar" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png" alt="GitHub" className="w-15 h-12" />
                </a>
                <a href="https://www.instagram.com/n_vineeth_kumar_" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <img src="https://i.pinimg.com/1200x/24/37/73/2437730f7e3a5705e205e67fa2cd1020.jpg" alt="Instagram" className="w-15 h-12 rounded-full" />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-[#f4a261] text-white border-[#264653]' : 'bg-white text-gray-900 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]`}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-[#f4a261] text-white border-[#264653]' : 'bg-white text-gray-900 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]`}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-[#f4a261] text-white border-[#264653]' : 'bg-white text-gray-900 border-gray-300'} focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]`}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg font-semibold text-white ${darkMode ? 'bg-[#264653] hover:bg-[#2a9d8f]' : 'bg-[#f4a261] hover:bg-[#e76f51]'} transition-colors`}
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