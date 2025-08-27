'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Terminal, ExternalLink, Info } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';
import { profile, experience, projects, achievements, skills, contact } from '@/data/portfolio';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <ParticlesBackground />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Content */}
            <div style={{ marginBottom: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '24px', 
                    background: 'linear-gradient(135deg, rgba(0, 255, 65, 0.2), rgba(0, 255, 65, 0.05))',
                    border: '1px solid rgba(0, 255, 65, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '24px'
                  }}>
                    <Terminal style={{ width: '40px', height: '40px', color: 'var(--accent-green)' }} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '24px',
                    height: '24px',
                    background: 'var(--accent-green)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }} />
                </div>
                <h1 className="hero-title terminal-text">
                  {profile.name}
                </h1>
              </div>
              
              <h2 className="hero-subtitle">
                {profile.role}
              </h2>
              
              <p className="hero-description">
                Software engineer with 3 years of experience building scalable backend systems and large-scale applications. I joined Intract as the first hire and helped scale it from zero to 14 million users. Currently pursuing MS in Computer Science at Arizona State University, I&apos;m passionate about solving complex engineering challenges in blockchain ecosystems and emerging AI-driven solutions.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('experience')}
                className="btn btn-primary"
              >
                View Experience
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Contact
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={profile.links.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={`Stack Overflow (${profile.reputation.stackoverflow} rep, 47k reached)`}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.338.585-2.328-10.478-2.347-.585 2.337zm1.363-5.445l9.705 5.018 1.1-2.028-9.706-5.017-1.099 2.027zm2.715-5.215l8.217 7.318 1.537-1.73L11.45 3.23l-1.537 1.73zM15.926 0l-2.406 2.812 6.32 5.407 2.406-2.812L15.926 0z"/>
                </svg>
              </a>
              <a
                href={profile.links.ethereumStackExchange}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={`Ethereum Stack Exchange (${profile.reputation.ethereumStackExchange} rep, 27k reached)`}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                  <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
                  <path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title terminal-text">Experience</h2>
            <p className="section-subtitle">My professional journey</p>
          </div>
          
          <div className="experience-container">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="experience-card">
                  <div className="experience-content">
                    <div className="experience-left">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-timeframe">{exp.timeframe}</p>
                    </div>
                    
                    <div className="experience-right">
                      <p className="experience-company">{exp.subtitle}</p>
                      
                      <p className="experience-description">{exp.description}</p>

                      {exp.tags && (
                        <div className="experience-tags">
                          {exp.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="experience-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {exp.links && (
                        <div className="experience-links">
                          {Object.entries(exp.links).map(([key, url]) => (
                            <a
                              key={key}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="experience-link"
                            >
                              <span style={{ textTransform: 'capitalize' }}>{key}</span>
                              <ExternalLink size={14} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title terminal-text">Skills</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>
          
          <div className="skills-container">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="skill-category"
              >
                <div className="category-header">
                  <h3 className="category-title">{category.name}</h3>
                  <div className="category-underline" />
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    >
                      <div className="skill-card">
                        <div className="skill-icon">
                          <div className="skill-letter">
                            {skill.name.charAt(0).toUpperCase()}
                          </div>
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title terminal-text">Projects</h2>
            <p className="section-subtitle">Featured work</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <h3 className="project-title">{project.title}</h3>
                    {project.associatedWith && (
                      <div style={{ 
                        position: 'relative',
                        cursor: 'help'
                      }} className="info-button">
                        <Info size={16} style={{ color: 'var(--accent-green)' }} />
                        <div style={{
                          position: 'absolute',
                          bottom: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--accent-green)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          whiteSpace: 'nowrap',
                          opacity: 0,
                          visibility: 'hidden',
                          pointerEvents: 'none',
                          transition: 'all 0.3s ease',
                          zIndex: 100,
                          marginBottom: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                        }} className="info-tooltip">
                          Affiliated to {project.associatedWith}
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>View Project</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title terminal-text">Achievements</h2>
            <p className="section-subtitle">Key milestones</p>
          </div>
          
          <div className="projects-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-card">
                  {achievement.image && (
                    <div className="project-image">
                      <img src={achievement.image} alt={achievement.title} />
                    </div>
                  )}

                  <h3 className="project-title">{achievement.title}</h3>
                  <p className="project-subtitle">{achievement.subtitle}</p>
                  <p className="project-description">{achievement.description}</p>

                  <div className="project-tags">
                    {achievement.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {achievement.links && (
                    <div className="experience-links">
                      {Object.entries(achievement.links).map(([key, url]) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-link"
                        >
                          <span style={{ textTransform: 'capitalize' }}>{key}</span>
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title terminal-text">Contact</h2>
            <p className="section-subtitle">Let&apos;s work together</p>
          </div>
          
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-pattern" />
              
              <div className="contact-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-item-content">
                      <div className="contact-icon">
                        <Mail size={24} style={{ color: 'var(--accent-green)' }} />
                      </div>
                      <div className="contact-details">
                        <p className="contact-label">Email</p>
                        <p className="contact-value">{contact.email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-item-content">
                      <div className="contact-icon">
                        <Phone size={24} style={{ color: 'var(--accent-green)' }} />
                      </div>
                      <div className="contact-details">
                        <p className="contact-label">Phone</p>
                        <p className="contact-value">{contact.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-item-content">
                      <div className="contact-icon">
                        <MapPin size={24} style={{ color: 'var(--accent-green)' }} />
                      </div>
                      <div className="contact-details">
                        <p className="contact-label">Location</p>
                        <p className="contact-value">{profile.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-button">
                  <a
                    href={`mailto:${contact.email}?subject=Portfolio Inquiry`}
                    className="contact-btn"
                  >
                    <span>Send Message</span>
                    <div className="contact-btn-dot">
                      <div className="contact-btn-dot-inner" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
