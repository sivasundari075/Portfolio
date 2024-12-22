import React, { useState, useEffect } from 'react';
import { Terminal, Code, Database, Cpu, Network, Mail, Phone, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Internal Components
  const TechTag = ({ children }) => (
    <span className="px-2 py-1 text-xs bg-green-500/20 text-green-500 rounded-full">
      {children}
    </span>
  );

  const SkillTag = ({ children }) => (
    <div className="px-3 py-1 bg-gray-900/50 rounded-lg font-mono text-gray-300 flex items-center space-x-2">
      <Code className="w-4 h-4 text-green-500" />
      <span>{children}</span>
    </div>
  );

  const navigation = [
    { name: 'Terminal', key: 'about', icon: Terminal },
    { name: 'Functions', key: 'skills', icon: Code },
    { name: 'Source', key: 'education', icon: Database },
    { name: 'Network', key: 'projects', icon: Network }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-green-500 font-mono text-sm animate-pulse">
            {'>'} Initializing system...
          </div>
          <div className="text-green-500 font-mono text-sm animate-pulse">
            {'>'} Loading modules...
          </div>
          <div className="text-green-500 font-mono text-sm animate-pulse">
            {'>'} Establishing connection...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Header */}
      <header className="relative bg-gray-900 border-b border-green-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 font-mono">
                SIVA.dev
              </h1>
              <p className="font-mono text-green-500">
                <span className="animate-pulse">▋</span> Full-Stack Developer | Network Specialist
              </p>
            </div>
            <div className="mt-4 md:mt-0 space-y-2 font-mono">
              <div className="flex items-center text-gray-400 hover:text-green-500 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span>sivasundari075@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-green-500 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span>+33 0751855566</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-green-500 transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Netherlands</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto">
            {navigation.map(({ name, key, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-3 text-sm font-mono flex items-center space-x-2 transition-all
                  ${activeSection === key
                    ? 'text-green-500 border-b-2 border-green-500 bg-green-500/10'
                    : 'text-gray-400 hover:text-green-400 hover:bg-green-500/5'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {activeSection === 'about' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} whoami</h2>
              <p className="text-gray-300 font-mono leading-relaxed">
                Experienced Full-Stack Developer with 20+ years of expertise in software development
                and network infrastructure. Specialized in building scalable applications using
                modern tech stack. Successfully led projects achieving significant performance improvements.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="text-3xl text-green-500 font-mono">20+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="text-3xl text-green-500 font-mono">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <div className="text-3xl text-green-500 font-mono">30%</div>
                  <div className="text-gray-400">Performance Improvement</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} skills.list()</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-mono text-blue-400 mb-3">Languages:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['JavaScript', 'Python', 'Java', 'SQL'].map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-mono text-blue-400 mb-3">Frontend:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['React', 'Angular', 'Vue.js', 'D3.js'].map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} skills.getExpertise()</h2>
              {['Node.js', 'Express', 'MongoDB', 'AWS'].map((skill) => (
                <div key={skill} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-gray-300">{skill}</span>
                    <span className="font-mono text-green-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-900 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} projects.showcase()</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-green-500/20">
                  <h3 className="text-lg font-mono text-blue-400">E-commerce Platform</h3>
                  <p className="text-gray-400 mb-3">MERN Stack Implementation</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-green-500/20">
                  <h3 className="text-lg font-mono text-blue-400">Telecom Dashboard</h3>
                  <p className="text-gray-400 mb-3">Real-time Monitoring System</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'WebSocket', 'D3.js'].map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'education' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} education.json</h2>
              <div className="space-y-6">
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h3 className="text-lg font-mono text-blue-400">B.E. in Electronics Engineering</h3>
                  <p className="text-green-500/80 font-mono">VIT</p>
                  <p className="text-gray-400 text-sm">1996 - 2000</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg">
                  <h3 className="text-lg font-mono text-blue-400">Diploma in Computer Science</h3>
                  <p className="text-green-500/80 font-mono">NIIT</p>
                  <p className="text-gray-400 text-sm">2014 - 2015</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-green-500/20">
              <h2 className="text-xl font-mono text-green-500 mb-4">{'>'} certifications.list()</h2>
              <div className="space-y-4">
                {[
                  'Full-Stack Web Development with React Specialization (2021)',
                  'Python for Everybody Specialization (2020)',
                  'AWS Fundamentals Specialization (2022)'
                ].map((cert, index) => (
                  <div key={index} className="p-3 bg-gray-900/50 rounded-lg font-mono text-gray-300 flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-green-500" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;