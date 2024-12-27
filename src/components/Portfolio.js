import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Github,
  Download,
  ExternalLink
} from 'lucide-react';
import HeroAnimation from './HeroAnimation';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const titles = [
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'AI Specialist',
    'Network Expert'
  ];

  // Enhanced title animation with smoother transitions
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
      
      // Reset animation flag after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Increased duration to match the transition
    }, 4000); // Increased interval to give more time to read

    return () => clearInterval(animationInterval);
  }, []);

  // Add back the skills and projects data
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL',
    'Responsive Design', 'UI/UX Design', 'Git', 'Agile Methodologies',
    
    // AI and ML skills
    'Large Language Models (LLMs)',
    'ChatGPT Integration',
    'RAG (Retrieval Augmented Generation)',
    'LangChain',
    'Machine Learning',
    'OpenCV',
    'Computer Vision',
    'TensorFlow',
    'PyTorch',
    'Natural Language Processing',
    'Prompt Engineering',
    'Vector Databases',
    'AI Model Fine-tuning',
    'Neural Networks',
    'Hugging Face Transformers'
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      image: '/projects/ecommerce.jpg'
    },
    {
      title: 'Telecom Dashboard',
      description: 'Real-time network monitoring system with WebSocket',
      tech: ['React', 'D3.js', 'WebSocket'],
      demoLink: '#',
      codeLink: '#',
      image: '/projects/telecom.jpg'
    },
    {
      title: 'Network Management Tool',
      description: 'A comprehensive network management and monitoring solution',
      tech: ['React Native', 'Redux', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
      image: '/projects/network.jpg'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-green-500 font-mono text-sm animate-pulse">
            {'>'} Initializing...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 relative overflow-hidden">
      {/* Background geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-teal-500/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-mono font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            SIVA.dev
          </div>
          <div className="flex space-x-8 font-mono">
            <a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a>
            <a 
              href="/contact"
              className="px-4 py-1 rounded bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
            >
              Let's Build
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 relative flex justify-between items-center">
          <div className="max-w-xl relative z-10 pl-8">
            <h1 className="text-7xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">SIVA</span>
            </h1>
            <div className="h-[70px] mb-8">
              <h2 
                className={`text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent
                  transform transition-all duration-700 ease-out
                  ${isAnimating ? 'translate-y-3 opacity-0 blur-sm' : 'translate-y-0 opacity-100 blur-0'}
                `}
              >
                {titles[currentTitle]}
              </h2>
            </div>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              I create scalable, efficient web applications that help businesses grow online.
              With 20+ years of experience, I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className="space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold hover:from-teal-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-4 border border-teal-500/20 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>
          
          <HeroAnimation />
        </div>
      </section>

      {/* Skills Section with train-like animation */}
      <section id="skills" className="py-20 border-t border-teal-500/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">Skills</h2>
          <p className="text-gray-400 mb-12">Technologies and methodologies I specialize in</p>
          
          {/* First row moving right */}
          <div className="flex space-x-6 animate-scroll-right mb-6">
            {[...skills.slice(0, Math.floor(skills.length / 2))].map((skill, index) => (
              <div 
                key={`${skill}-${index}`}
                className="flex-shrink-0 p-6 bg-gray-900/50 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <span className="text-lg font-medium whitespace-nowrap">{skill}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[...skills.slice(0, Math.floor(skills.length / 2))].map((skill, index) => (
              <div 
                key={`${skill}-duplicate-${index}`}
                className="flex-shrink-0 p-6 bg-gray-900/50 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <span className="text-lg font-medium whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>

          {/* Second row moving left */}
          <div className="flex space-x-6 animate-scroll-left">
            {[...skills.slice(Math.floor(skills.length / 2))].map((skill, index) => (
              <div 
                key={`${skill}-${index}`}
                className="flex-shrink-0 p-6 bg-gray-900/50 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <span className="text-lg font-medium whitespace-nowrap">{skill}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[...skills.slice(Math.floor(skills.length / 2))].map((skill, index) => (
              <div 
                key={`${skill}-duplicate-${index}`}
                className="flex-shrink-0 p-6 bg-gray-900/50 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <span className="text-lg font-medium whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with hover effects */}
      <section id="projects" className="py-20 border-t border-teal-500/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-teal-500/10 hover:border-teal-500/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end space-x-4">
                        <a 
                          href={project.demoLink} 
                          className="p-2 bg-teal-500/20 rounded-full text-teal-400 hover:bg-teal-500/30 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.codeLink} 
                          className="p-2 bg-teal-500/20 rounded-full text-teal-400 hover:bg-teal-500/30 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social links with hover animations */}
      <div className="fixed left-4 bottom-4 flex flex-col space-y-4">
        <a 
          href="https://github.com/sivasundari075" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-teal-500/10 text-gray-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="/Sivasundari.pdf" 
          download
          className="p-3 rounded-full hover:bg-teal-500/10 text-gray-400 hover:text-teal-400 transform hover:scale-110 transition-all duration-300"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;