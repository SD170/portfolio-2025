"use client";

import { motion } from "framer-motion";
import {
	Github,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	ExternalLink,
	Info,
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import {
	profile,
	experience,
	projects,
	achievements,
	skills,
	contact,
} from "@/data/portfolio";
import React, { useEffect } from "react";


export default function Home() {
	// Prevent scroll restoration issues
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}, []);

	// Developer Easter Eggs
	useEffect(() => {
		console.log('Easter eggs loading...');
		
		setTimeout(() => {
			console.log('%c👋 Hey there, developer!', 'color: #00ff41; font-size: 20px; font-weight: bold;');
			console.log('%c🔍 What are you trying to see here?', 'color: #00ff41; font-size: 14px;');
			console.log('%c💻 This portfolio was built with Next.js, TypeScript, and lots of terminal vibes!', 'color: #888; font-size: 12px;');
			console.log('%c🚀 Want to see something cool? Try typing "blockchain()" in the console!', 'color: #00ff41; font-size: 12px;');
			
			// Add interactive console commands
			(window as any).blockchain = () => {
				console.log('%c⛓️ Blockchain mode activated!', 'color: #00ff41; font-size: 16px; font-weight: bold;');
				console.log('%c💎 Built Proof-of-Humanity protocols, scaled to 14M users!', 'color: #00ff41; font-size: 12px;');
				console.log('%c🔗 Worked with EVM, Solidity, NFTs, and multi-chain integrations!', 'color: #00ff41; font-size: 12px;');
				console.log('%c💰 Generated $590k revenue through innovative blockchain solutions!', 'color: #00ff41; font-size: 12px;');
			};
			
			(window as any).ai = () => {
				console.log('%c🤖 AI mode activated!', 'color: #00ff41; font-size: 16px; font-weight: bold;');
				console.log('%c🧠 Currently pursuing MS in Computer Science at Arizona State University!', 'color: #00ff41; font-size: 12px;');
				console.log('%c🔬 Passionate about AI-driven solutions and emerging technologies!', 'color: #00ff41; font-size: 12px;');
				console.log('%c🎯 Building products that combine scale, reliability, and innovation!', 'color: #00ff41; font-size: 12px;');
			};
			
			(window as any).terminal = () => {
				console.log('%c🖥️ Terminal mode activated!', 'color: #00ff41; font-size: 16px; font-weight: bold;');
				console.log('%c📟 This portfolio has a terminal aesthetic with green accents everywhere!', 'color: #00ff41; font-size: 12px;');
				console.log('%c🎨 Custom CSS variables, monospace fonts, and that sweet terminal glow!', 'color: #00ff41; font-size: 12px;');
			};
			
			(window as any).help = () => {
				console.log('%c📚 Available commands:', 'color: #00ff41; font-size: 16px; font-weight: bold;');
				console.log('%c   blockchain() - Learn about blockchain experience', 'color: #00ff41; font-size: 12px;');
				console.log('%c   ai() - AI and education background', 'color: #00ff41; font-size: 12px;');
				console.log('%c   terminal() - Terminal aesthetic info', 'color: #00ff41; font-size: 12px;');
				console.log('%c   help() - Show this help message', 'color: #00ff41; font-size: 12px;');
			};
			
			console.log('%c💡 Type "help()" in the console for available commands!', 'color: #00ff41; font-size: 12px;');
		}, 1000);
	}, []);

	// Custom terminal cursor - temporarily disabled
	// useEffect(() => {
	// 	console.log('Creating custom cursor...');
	// 	const cursor = document.createElement('div');
	// 	cursor.className = 'terminal-cursor';
	// 	cursor.style.position = 'fixed';
	// 	cursor.style.width = '20px';
	// 	cursor.style.height = '20px';
	// 	cursor.style.border = '2px solid #00ff41';
	// 	cursor.style.borderRadius = '50%';
	// 	cursor.style.pointerEvents = 'none';
	// 	cursor.style.zIndex = '99999';
	// 	cursor.style.background = 'transparent';
	// 	cursor.style.boxShadow = '0 0 10px #00ff41';
	// 	cursor.style.userSelect = 'none';
	// 	document.body.appendChild(cursor);
	// 	console.log('Cursor created and added to body');

	// 	const moveCursor = (e: MouseEvent) => {
	// 		cursor.style.left = e.clientX - 10 + 'px';
	// 		cursor.style.top = e.clientY - 10 + 'px';
	// 		// Force hide any text cursor
	// 		document.body.style.cursor = 'none';
	// 	};

	// 	// Add hover effects for interactive elements
	// 	const addHoverEffect = () => {
	// 		const interactiveElements = document.querySelectorAll('button, a, .btn, .social-link, .project-link, .experience-link, .contact-btn, .nav-link');
		
	// 		interactiveElements.forEach(el => {
	// 			el.addEventListener('mouseenter', () => {
	// 				cursor.style.transform = 'scale(1.5)';
	// 				cursor.style.borderColor = 'var(--accent-green-light)';
	// 			});
		
	// 			el.addEventListener('mouseleave', () => {
	// 				cursor.style.transform = 'scale(1)';
	// 				cursor.style.borderColor = 'var(--accent-green)';
	// 			});
	// 		});
	// 	};

	// 	document.addEventListener('mousemove', moveCursor);
	
	// 	// Add hover effects after a short delay to ensure elements are loaded
	// 	setTimeout(addHoverEffect, 100);

	// 	return () => {
	// 		document.removeEventListener('mousemove', moveCursor);
	// 		if (cursor.parentNode) {
	// 			cursor.parentNode.removeChild(cursor);
	// 		}
	// 	};
	// }, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
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
						<div style={{ marginBottom: "64px" }}>
							<div
								style={{
									textAlign: "center",
									marginBottom: "32px",
								}}
							>
								{/* Portrait Section */}
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										marginBottom: "40px",
										marginTop: "20px",
										pointerEvents: "auto",
									}}
								>
									<div
										style={{
											position: "relative",
											pointerEvents: "auto",
											backgroundColor:
												"var(--bg-primary)",
											borderRadius: "50%",
											padding: "3px",
											zIndex: 5,
										}}
									>
										<img
											src="/potrait.png"
											alt="Saswata Dutta"
											style={{
												width: "180px",
												height: "180px",
												borderRadius: "50%",
												border: "3px solid var(--accent-green)",
												objectFit: "cover",
												boxShadow:
													"0 0 20px rgba(0, 255, 65, 0.3)",
												userSelect: "none",
												WebkitUserSelect: "none",
												MozUserSelect: "none",
												msUserSelect: "none",
												backgroundColor:
													"var(--bg-primary)",
											}}
										/>
																				<div 
											className="info-button"
											style={{ 
												position: 'relative',
												pointerEvents: 'auto',
												zIndex: 100
											}} 
											onMouseEnter={(e) => {
												const tooltip = e.currentTarget.querySelector('.info-tooltip') as HTMLElement;
												if (tooltip) {
													tooltip.style.opacity = '1';
													tooltip.style.visibility = 'visible';
												}
											}}
											onMouseLeave={(e) => {
												const tooltip = e.currentTarget.querySelector('.info-tooltip') as HTMLElement;
												if (tooltip) {
													tooltip.style.opacity = '0';
													tooltip.style.visibility = 'hidden';
												}
											}}
										>
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
												zIndex: 1000,
												marginBottom: '8px',
												boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
											}} className="info-tooltip">
												AI generated image - I&apos;m not this good looking 😅
											</div>
										</div>
									</div>
								</div>

								{/* Name Section */}
								<div
									style={{
										position: "relative",
										textAlign: "center",
										marginBottom: "24px",
										pointerEvents: "auto",
									}}
								>
									<div className="whoami-command">
										<span
											style={{
												color: "var(--accent-green)",
											}}
										>
											$
										</span>{" "}
										whoami
									</div>

									<h1
										className="hero-title terminal-text"
										style={{
											fontSize: "4rem",
											fontFamily:
												"'Courier New', monospace",
											letterSpacing: "2px",
											margin: 0,
										}}
									>
										{profile.name}
									</h1>
								</div>

								<div
									style={{
										display: "inline-block",
										padding: "8px 16px",
										background: "rgba(0, 255, 65, 0.1)",
										border: "1px solid rgba(0, 255, 65, 0.3)",
										borderRadius: "4px",
										fontFamily: "monospace",
										fontSize: "12px",
										color: "var(--accent-green)",
										letterSpacing: "1px",
									}}
								>
									<span
										style={{ color: "var(--text-muted)" }}
									>
										&#47;&#47;
									</span>{" "}
									{profile.role}
								</div>
							</div>

							<p className="hero-description">
								Software engineer with 3 years of experience
								building scalable backend systems and
								large-scale applications. I joined Intract as
								the first hire and helped scale it from zero to
								14 million users. Currently pursuing MS in
								Computer Science at Arizona State University,
								I&apos;m passionate about solving complex
								engineering challenges in blockchain ecosystems
								and emerging AI-driven solutions.
							</p>
						</div>

						{/* Scroll Indicator */}
						<div style={{ 
							marginTop: '48px',
							textAlign: 'center',
							pointerEvents: 'auto'
						}}>
							<div style={{
								display: 'inline-flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '8px',
								color: 'var(--text-muted)',
								fontSize: '0.875rem',
								cursor: 'pointer',
								transition: 'all 0.3s ease'
							}}
							onClick={() => scrollToSection("experience")}
							onMouseEnter={(e) => {
								e.currentTarget.style.color = 'var(--accent-green)';
								e.currentTarget.style.transform = 'translateY(-2px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.color = 'var(--text-muted)';
								e.currentTarget.style.transform = 'translateY(0)';
							}}
							>
								<span style={{ fontFamily: 'monospace' }}>scroll down</span>
								<div style={{
									width: '2px',
									height: '20px',
									background: 'var(--accent-green)',
									animation: 'scrollPulse 2s infinite'
								}} />
							</div>
						</div>

						{/* Social Links */}
						<div className="hero-social" style={{ pointerEvents: "auto" }}>
							<a
								href={profile.links.github}
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								title="GitHub"
								style={{ pointerEvents: "auto" }}
							>
								<Github size={28} />
							</a>
							<a
								href={profile.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								title="LinkedIn"
								style={{ pointerEvents: "auto" }}
							>
								<Linkedin size={28} />
							</a>
							<a
								href={profile.links.stackoverflow}
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								title={`Stack Overflow (${profile.reputation.stackoverflow} rep, 47k reached)`}
								style={{ pointerEvents: "auto" }}
							>
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.338.585-2.328-10.478-2.347-.585 2.337zm1.363-5.445l9.705 5.018 1.1-2.028-9.706-5.017-1.099 2.027zm2.715-5.215l8.217 7.318 1.537-1.73L11.45 3.23l-1.537 1.73zM15.926 0l-2.406 2.812 6.32 5.407 2.406-2.812L15.926 0z" />
								</svg>
							</a>
							<a
								href={profile.links.ethereumStackExchange}
								target="_blank"
								rel="noopener noreferrer"
								className="social-link"
								title={`Ethereum Stack Exchange (${profile.reputation.ethereumStackExchange} rep, 27k reached)`}
								style={{ pointerEvents: "auto" }}
							>
								<svg
									width="28"
									height="28"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
									<path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
									<path d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
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
						<h2 className="section-title terminal-text">
							Experience
						</h2>
						<p className="section-subtitle">
							My professional journey
						</p>
					</div>

					<div className="experience-container">
						{experience.map((exp, index) => (
							<motion.div
								key={exp.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
							>
								<div className="experience-card">
									<div className="experience-content">
										<div className="experience-left">
											<h3 className="experience-title">
												{exp.title}
											</h3>
											<p className="experience-timeframe">
												{exp.timeframe}
											</p>
										</div>

										<div className="experience-right">
											<p className="experience-company">
												{exp.subtitle}
											</p>

											<p className="experience-description">
												{exp.description}
											</p>

											{exp.tags && (
												<div className="experience-tags">
													{exp.tags.map(
														(tag, tagIndex) => (
															<span
																key={tagIndex}
																className="experience-tag"
															>
																{tag}
															</span>
														)
													)}
												</div>
											)}

											{exp.links && (
												<div className="experience-links" style={{ pointerEvents: "auto" }}>
													{Object.entries(
														exp.links
													).map(([key, url]) => (
														<a
															key={key}
															href={url}
															target="_blank"
															rel="noopener noreferrer"
															className="experience-link"
															style={{ pointerEvents: "auto" }}
														>
															<span
																style={{
																	textTransform:
																		"capitalize",
																}}
															>
																{key}
															</span>
															<ExternalLink
																size={14}
															/>
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
						<p className="section-subtitle">
							Technologies I work with
						</p>
					</div>

					<div className="skills-container">
						{skills.map((category, categoryIndex) => (
							<motion.div
								key={category.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: categoryIndex * 0.1,
								}}
								className="skill-category"
							>
								<div className="category-header">
									<h3 className="category-title">
										{category.name}
									</h3>
									<div className="category-underline" />
								</div>

								<div className="skills-grid">
									{category.skills.map(
										(skill, skillIndex) => (
											<motion.div
												key={skill.name}
												initial={{ opacity: 0, y: 20 }}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{ once: true }}
												transition={{
													duration: 0.5,
													delay:
														categoryIndex * 0.1 +
														skillIndex * 0.1,
												}}
											>
												<div className="skill-card">
													<div className="skill-icon">
														<div className="skill-letter">
															{skill.name
																.charAt(0)
																.toUpperCase()}
														</div>
													</div>
													<span className="skill-name">
														{skill.name}
													</span>
												</div>
											</motion.div>
										)
									)}
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
						<h2 className="section-title terminal-text">
							Projects
						</h2>
						<p className="section-subtitle">Featured work</p>
					</div>

					<div className="projects-grid">
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
							>
								<div className="project-card">
									<div className="project-image">
										<img
											src={project.image}
											alt={project.title}
										/>
									</div>

									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: "8px",
											marginBottom: "8px",
										}}
									>
										<h3 className="project-title">
											{project.title}
										</h3>
										{project.associatedWith && (
											<div
												style={{
													position: "relative",
													cursor: "help",
												}}
												className="info-button"
											>
												<Info
													size={16}
													style={{
														color: "var(--accent-green)",
													}}
												/>
												<div
													style={{
														position: "absolute",
														bottom: "100%",
														left: "50%",
														transform:
															"translateX(-50%)",
														background:
															"var(--bg-tertiary)",
														border: "1px solid var(--accent-green)",
														borderRadius: "8px",
														padding: "8px 12px",
														fontSize: "0.75rem",
														color: "var(--text-secondary)",
														whiteSpace: "nowrap",
														opacity: 0,
														visibility: "hidden",
														pointerEvents: "none",
														transition:
															"all 0.3s ease",
														zIndex: 100,
														marginBottom: "8px",
														boxShadow:
															"0 4px 12px rgba(0, 0, 0, 0.3)",
													}}
													className="info-tooltip"
												>
													Affiliated to{" "}
													{project.associatedWith}
												</div>
											</div>
										)}
									</div>
									<p className="project-subtitle">
										{project.subtitle}
									</p>
									<p className="project-description">
										{project.description}
									</p>

									<div className="project-tags">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="project-tag"
											>
												{tag}
											</span>
										))}
									</div>

									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
										style={{ pointerEvents: "auto" }}
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
						<h2 className="section-title terminal-text">
							Achievements
						</h2>
						<p className="section-subtitle">Key milestones</p>
					</div>

					<div className="projects-grid">
						{achievements.map((achievement, index) => (
							<motion.div
								key={achievement.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
							>
								<div className="project-card">
									{achievement.image && (
										<div className="project-image">
											<img
												src={achievement.image}
												alt={achievement.title}
											/>
										</div>
									)}

									<h3 className="project-title">
										{achievement.title}
									</h3>
									<p className="project-subtitle">
										{achievement.subtitle}
									</p>
									<p className="project-description">
										{achievement.description}
									</p>

									<div className="project-tags">
										{achievement.tags.map(
											(tag, tagIndex) => (
												<span
													key={tagIndex}
													className="project-tag"
												>
													{tag}
												</span>
											)
										)}
									</div>

									{achievement.links && (
										<div className="experience-links" style={{ pointerEvents: "auto" }}>
											{Object.entries(
												achievement.links
											).map(([key, url]) => (
												<a
													key={key}
													href={url}
													target="_blank"
													rel="noopener noreferrer"
													className="experience-link"
													style={{ pointerEvents: "auto" }}
												>
													<span
														style={{
															textTransform:
																"capitalize",
														}}
													>
														{key}
													</span>
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
						<p className="section-subtitle">
							Let&apos;s work together
						</p>
					</div>

					<div className="contact-container">
						<div className="contact-card">
							<div className="contact-pattern" />

							<div className="contact-content">
								<div className="contact-info">
									<div className="contact-item">
										<div className="contact-item-content">
											<div className="contact-icon">
												<Mail
													size={24}
													style={{
														color: "var(--accent-green)",
													}}
												/>
											</div>
											<div className="contact-details">
												<p className="contact-label">
													Email
												</p>
												<p className="contact-value">
													{contact.email}
												</p>
											</div>
										</div>
									</div>

									<div className="contact-item">
										<div className="contact-item-content">
											<div className="contact-icon">
												<Phone
													size={24}
													style={{
														color: "var(--accent-green)",
													}}
												/>
											</div>
											<div className="contact-details">
												<p className="contact-label">
													Phone
												</p>
												<p className="contact-value">
													{contact.phone}
												</p>
											</div>
										</div>
									</div>

									<div className="contact-item">
										<div className="contact-item-content">
											<div className="contact-icon">
												<MapPin
													size={24}
													style={{
														color: "var(--accent-green)",
													}}
												/>
											</div>
											<div className="contact-details">
												<p className="contact-label">
													Location
												</p>
												<p className="contact-value">
													{profile.location}
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="contact-button" style={{ pointerEvents: "auto" }}>
									<a
										href={`mailto:${contact.email}?subject=Portfolio Inquiry`}
										className="contact-btn"
										style={{ pointerEvents: "auto" }}
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
