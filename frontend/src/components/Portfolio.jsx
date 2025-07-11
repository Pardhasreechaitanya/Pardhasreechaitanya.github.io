import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  ChevronDown,
  Code,
  Database,
  Map,
  BarChart3,
  Brain,
  Award
} from "lucide-react";
import { mockData } from "../data/mockData";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "education", "certifications", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Mock resume download - in real app, this would download actual resume
    alert("Resume download would start here!");
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-slate-900"
            >
              Pardhasree Chaitanya
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
        />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pardhasree
              </span>
              <br />
              <span className="text-slate-700">Chaitanya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Civil Engineer & Data Scientist specializing in GIS, Machine Learning, and Geospatial Analytics
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                GIS Analyst
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Data Scientist
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Civil Engineer
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                Remote Sensing Analyst
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/Pardhasreechaitanya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
            >
              <Github size={24} className="text-slate-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/pardhasreechaitanya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href="mailto:pardhasree1995@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-110 transform"
            >
              <Mail size={24} className="text-green-600" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="animate-bounce"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Data is more than just numbers—it is a powerful tool for decision-making. As a Data Analyst with expertise in machine learning, geospatial analysis, and business intelligence, I specialize in transforming complex datasets into actionable insights that drive business performance.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                With a Master's in Information System Management and Geoinformatics, I have a strong foundation in data engineering, algorithm development, and statistical modeling. My experience spans optimizing machine learning models, designing interactive dashboards, and managing large-scale geospatial datasets.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I am passionate about leveraging AI-powered analytics to solve real-world problems, whether it's predicting environmental changes, optimizing business operations, or uncovering hidden trends in complex datasets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <Code className="mx-auto mb-4 text-blue-600" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Programming</h3>
                <p className="text-sm text-slate-600">Python, R, JavaScript, SQL</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <Database className="mx-auto mb-4 text-purple-600" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Data Science</h3>
                <p className="text-sm text-slate-600">ML, AI, Statistical Analysis</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Map className="mx-auto mb-4 text-green-600" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">GIS</h3>
                <p className="text-sm text-slate-600">ArcGIS, QGIS, Remote Sensing</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <BarChart3 className="mx-auto mb-4 text-orange-600" size={32} />
                <h3 className="font-semibold text-slate-900 mb-2">Analytics</h3>
                <p className="text-sm text-slate-600">Tableau, Power BI, Dashboards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-12">
            {mockData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-slate-600 mb-4">{exp.location} • {exp.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-700 font-medium">{exp.period}</p>
                    <p className="text-slate-500 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.responsibilities.map((responsibility, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700 leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'Data Science' 
                        ? 'bg-blue-100 text-blue-800'
                        : project.category === 'GIS'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-white text-slate-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {mockData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-600">{edu.field}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-slate-700 font-medium">{edu.period}</p>
                    {edu.skills && (
                      <div className="flex flex-wrap gap-2 mt-2 justify-end">
                        {edu.skills.map((skill, i) => (
                          <span key={i} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-2 leading-tight">{cert.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-slate-500 text-sm">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-xs text-slate-400 mt-2">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{skillCategory.category}</h3>
                </div>
                <div className="space-y-2">
                  {skillCategory.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-700 text-sm">{skill.name}</span>
                      <div className="flex-1 mx-3 bg-slate-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just connecting with fellow professionals. Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a href="mailto:pardhasree1995@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                    pardhasree1995@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone</h3>
                  <a href="tel:+18454849756" className="text-green-600 hover:text-green-800 transition-colors duration-200">
                    +1 (845) 484-9756
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600">New York, United States</p>
                  <p className="text-sm text-slate-500">Open to Remote • Hybrid • On-site</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/Pardhasreechaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors duration-200"
                >
                  <Github className="text-slate-700" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pardhasreechaitanya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors duration-200"
                >
                  <Linkedin className="text-slate-700" size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Available For</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Full-time Positions</h4>
                  <p className="text-sm text-slate-600">GIS Analyst • Data Scientist • Civil Engineer • Environmental Analyst</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Contract Work</h4>
                  <p className="text-sm text-slate-600">Data Analysis • GIS Projects • Machine Learning Consulting</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Collaborations</h4>
                  <p className="text-sm text-slate-600">Research Projects • Open Source Contributions • Technical Writing</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Status:</strong> <span className="text-green-600">Open to Work</span> • Actively Applying
                </p>
                <button
                  onClick={handleDownloadResume}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              © 2024 Pardhasree Chaitanya. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;