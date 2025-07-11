import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Award,
  Navigation,
  Globe,
  Compass,
  Satellite,
  Route
} from "lucide-react";
import { mockData } from "../data/mockData";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating GIS Icons */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 text-emerald-400/20"
        >
          <Map size={80} />
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 text-cyan-400/20"
        >
          <Globe size={60} />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 left-1/4 text-violet-400/20"
        >
          <Satellite size={70} />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -90, 0],
            y: [0, 80, 0],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-1/3 text-rose-400/20"
        >
          <Navigation size={50} />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -70, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/2 text-orange-400/20"
        >
          <Compass size={90} />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center"
              >
                <Globe size={16} className="text-white" />
              </motion.div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold text-lg">
                GIS Portfolio
              </span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-emerald-400 border-b-2 border-emerald-400"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 flex items-center space-x-2 shadow-lg"
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Interactive cursor following element */}
        <motion.div
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
          className="fixed w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm pointer-events-none z-30 opacity-70"
        />
        
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* Creative Name Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ fontFamily: "'Inter', 'Roboto', sans-serif" }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold"
                >
                  PARDHASREE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                >
                  CHAITANYA
                </motion.span>
              </motion.h1>
              
              {/* Animated subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
                style={{ fontFamily: "'Poppins', 'Arial', sans-serif" }}
              >
                <motion.span
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, #10b981, #06b6d4)",
                      "linear-gradient(45deg, #06b6d4, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #ec4899)",
                      "linear-gradient(45deg, #ec4899, #10b981)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-clip-text text-transparent font-medium"
                >
                  Transforming Geographic Data into Intelligence
                </motion.span>
                <br />
                <span className="text-lg text-white/70 font-light">
                  Civil Engineer • Data Scientist • GIS Specialist
                </span>
              </motion.div>
            </motion.div>

            {/* Animated role badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { name: "GIS Analyst", color: "from-emerald-500 to-teal-500", icon: Map },
                { name: "Data Scientist", color: "from-blue-500 to-purple-500", icon: BarChart3 },
                { name: "Civil Engineer", color: "from-orange-500 to-red-500", icon: Route },
                { name: "Remote Sensing", color: "from-purple-500 to-pink-500", icon: Satellite }
              ].map((role, index) => (
                <motion.div
                  key={role.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" 
                  }}
                  className={`bg-gradient-to-r ${role.color} text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-white/20 flex items-center space-x-2`}
                >
                  <role.icon size={16} />
                  <span>{role.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-8 mb-16"
          >
            {[
              { icon: Github, url: "https://github.com/Pardhasreechaitanya", color: "from-gray-600 to-gray-800" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/pardhasreechaitanya", color: "from-blue-600 to-blue-800" },
              { icon: Mail, url: "mailto:pardhasree1995@gmail.com", color: "from-green-600 to-green-800" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-gradient-to-r ${social.color} rounded-full shadow-2xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm`}
              >
                <social.icon size={24} className="text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-white/60 hover:text-white transition-colors duration-200 flex flex-col items-center space-y-2"
            >
              <span className="text-sm">Explore My Work</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <ChevronDown size={32} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-6"
              whileHover={{ scale: 1.05 }}
            >
              About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-white/90 leading-relaxed">
                Data is more than just numbers—it is a powerful tool for decision-making. As a Data Analyst with expertise in machine learning, geospatial analysis, and business intelligence, I specialize in transforming complex datasets into actionable insights that drive business performance.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                With a Master's in Information System Management and Geoinformatics, I have a strong foundation in data engineering, algorithm development, and statistical modeling. My experience spans optimizing machine learning models, designing interactive dashboards, and managing large-scale geospatial datasets.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
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
              {[
                { icon: Code, title: "Programming", desc: "Python, R, JavaScript, SQL", color: "from-blue-500 to-purple-500" },
                { icon: Database, title: "Data Science", desc: "ML, AI, Statistical Analysis", color: "from-purple-500 to-pink-500" },
                { icon: Map, title: "GIS", desc: "ArcGIS, QGIS, Remote Sensing", color: "from-green-500 to-teal-500" },
                { icon: BarChart3, title: "Analytics", desc: "Tableau, Power BI, Dashboards", color: "from-orange-500 to-red-500" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" 
                  }}
                  className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl text-center backdrop-blur-sm border border-white/20 shadow-xl`}
                >
                  <skill.icon className="mx-auto mb-4 text-white" size={32} />
                  <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-sm text-white/80">{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-16"
              whileHover={{ scale: 1.05 }}
            >
              My <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-12">
            {mockData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)" 
                }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-lg text-emerald-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-white/70 mb-4">{exp.location} • {exp.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{exp.period}</p>
                    <p className="text-white/60 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((responsibility, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 leading-relaxed">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-3 py-1 rounded-full text-sm border border-white/20"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-16"
              whileHover={{ scale: 1.05 }}
            >
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)" 
                }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-xl"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <motion.span 
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.category === 'Data Science' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : project.category === 'GIS'
                          ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                          : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-slate-700/50 text-white px-2 py-1 rounded text-xs border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-16"
              whileHover={{ scale: 1.05 }}
            >
              Academic <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Excellence</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-8">
            {mockData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)" 
                }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-emerald-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-white/70">{edu.field}</p>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <p className="text-white font-medium">{edu.period}</p>
                    {edu.skills && (
                      <div className="flex flex-wrap gap-2 mt-2 justify-end">
                        {edu.skills.map((skill, i) => (
                          <motion.span 
                            key={i} 
                            className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-2 py-1 rounded text-xs border border-white/20"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
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
      <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-16"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)" 
                }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-200">
                    <Award className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2 leading-tight">{cert.name}</h3>
                    <p className="text-purple-400 text-sm font-medium mb-1">{cert.issuer}</p>
                    <p className="text-white/60 text-sm">{cert.date}</p>
                    {cert.credentialId && (
                      <p className="text-xs text-white/40 mt-2">ID: {cert.credentialId}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-teal-900 to-slate-800 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-16"
              whileHover={{ scale: 1.05 }}
            >
              Technical <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)" 
                }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                </div>
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm">{skill.name}</span>
                        <span className="text-xs text-white/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full shadow-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-5xl font-bold text-white mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Let's <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </motion.h2>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
              {[
                { 
                  icon: Mail, 
                  title: "Email", 
                  value: "pardhasree1995@gmail.com",
                  href: "mailto:pardhasree1995@gmail.com",
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  icon: Phone, 
                  title: "Phone", 
                  value: "+1 (845) 484-9756",
                  href: "tel:+18454849756",
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  icon: MapPin, 
                  title: "Location", 
                  value: "New York, United States",
                  subtitle: "Open to Remote • Hybrid • On-site",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-lg`}>
                    <contact.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{contact.title}</h3>
                    {contact.href ? (
                      <a href={contact.href} className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white/80">{contact.value}</p>
                    )}
                    {contact.subtitle && (
                      <p className="text-sm text-white/60">{contact.subtitle}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Github, url: "https://github.com/Pardhasreechaitanya", color: "from-gray-600 to-gray-800" },
                  { icon: Linkedin, url: "https://www.linkedin.com/in/pardhasreechaitanya", color: "from-blue-600 to-blue-800" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gradient-to-r ${social.color} rounded-lg transition-all duration-200 border border-white/20`}
                  >
                    <social.icon className="text-white" size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Available For</h3>
              <div className="space-y-4">
                {[
                  { title: "Full-time Positions", desc: "GIS Analyst • Data Scientist • Civil Engineer • Environmental Analyst" },
                  { title: "Contract Work", desc: "Data Analysis • GIS Projects • Machine Learning Consulting" },
                  { title: "Collaborations", desc: "Research Projects • Open Source Contributions • Technical Writing" }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-lg border border-white/20"
                  >
                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70 mb-4">
                  <strong>Status:</strong> <span className="text-emerald-400">Open to Work</span> • Actively Applying
                </p>
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 30px rgba(79, 70, 229, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p 
              className="text-white/60 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © 2024 Pardhasree Chaitanya. All rights reserved.
            </motion.p>
            <motion.p 
              className="text-white/40 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built with React, Tailwind CSS, and Framer Motion • Designed for Impact
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;